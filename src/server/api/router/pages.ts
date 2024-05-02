import { z } from 'zod'

import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'
import { ContentStatus } from '@/db'
import { getFrontendBaseUrl } from '@/lib/url'

export const pagesRouter = createTRPCRouter({
    create: protectedProcedure
    .input(
      z.object({
        subRef: z.string().min(1),
        title: z.string().min(1),
        description: z.string().min(1),
        image: z.string().min(1),
        content: z.string().min(1),
        authorId: z.number().min(1),
        subsiteId: z.number().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const exists = await ctx.db.page.findFirst({
        where: {
          title: input.title,
          authorId: input.authorId,
          subsiteId: input.subsiteId,
        },
      })
      // Do not allow the same title to be duplicated
      if (exists) {
        console.log('Failed to CREATE Content. Page already exists: ', exists?.id)
        return null
      }

      // you have to get the username 
      const user = await ctx.db.user.findFirst({
        where: {
          id: input.authorId,
        },
      })
      if (!user) {
        console.log('Failed to CREATE Content. User does not exist.')
        return null
      }    
      
      console.log('>>> pages >>> user >>> ', user)

      const baseUrl: string = getFrontendBaseUrl()
      const createContentEndpoint: string = `${baseUrl}/api/content/create`
      const response = await fetch(createContentEndpoint, {
        method: 'POST',
        body: JSON.stringify({
          isUpdate: false,
          contentType: 'pages',
          subRef: input.subRef,
          title: input.title,
          description: input.description,
          image: input.image,
          body: input.content,
          userName: user.name,           
        }),
      })

      if (response.status !== 204) {
        console.log('Error saving Page >>> input >>> ', input)
        return null
      }

      const responseData = await response.json()
      console.log(">>> page >>> create >>> responseData >>> ", responseData)
      const slug = responseData && responseData?.slug ? responseData.slug : undefined
      console.log(">>> page >>> create >>> slug >>> ", slug)

      return await ctx.db.page.create({
        data: {
          title: input.title,
          content: input.content,
          slug: slug,
          published: false,
          deleted: false,
          authorId: input.authorId,
          subsiteId: input.subsiteId,
        },
      })
    }),    

  updateContent: protectedProcedure
    .input(
      z.object({
        pageId: z.number().min(1),
        content: z.string().min(1),
        authorId: z.number().min(1),
        subsiteId: z.number().min(1),    
      })
    )
    .mutation(async ({ input, ctx }) => {
      const exists = await ctx.db.page.findFirst({
        where: {
          id: input.pageId,
        },
      })

      if (!exists) {
        console.log('Failed to UPDATE Content. Page does not exist: ', input.pageId)
        return null
      }

      // you have to get the username 
      const user = await ctx.db.user.findFirst({
        where: {
          id: input.authorId,
        },
      })
      if (!user) {
        console.log('Failed to UPDATE Content. User does not exist.')
        return null
      }    
      
      console.log('>>> pages >>> user >>> ', user)      

      // you have to get the subRef 
      const subsite = await ctx.db.subsite.findFirst({
        where: {
          id: input.subsiteId,
        },
      })      
      if (!subsite) {
        console.log('Failed to UPDATE Content. subsite does not exist.')
        return null
      }    
      const subRef = subsite?.subsiteRef ? subsite.subsiteRef : null
      if (!subRef) {
        console.log('Failed to UPDATE Content. subsiteRef does not exist.')
        return null
      }          

      const baseUrl: string = getFrontendBaseUrl()
      const updateContentEndpoint: string = `${baseUrl}/api/content/save`
      const response = await fetch(updateContentEndpoint, {
        method: 'POST',
        body: JSON.stringify({
          isUpdate: false,
          contentType: 'pages',
          subRef: subRef,
          body: input.content,
          userName: user.name,           
        }),
      })      

      const responseData = await response.json()
      console.log(">>> page UPDATE >>> responseData >>> ", responseData)

      return await ctx.db.page.update({
        where: {
          id: input.pageId,
          authorId: input.authorId,
          subsiteId: input.subsiteId,           
        },
        data: {
          content: input.content,
        },
      })
    }),    
    
  getFeatured: publicProcedure
    .input(
      z.object({
        limit: z.number().min(3)
      })
    )
    .query(async ({ input, ctx }) => {
      console.log({ 'input.limit': input.limit })
      return await ctx.db.page.findMany({
        take: input.limit,
        orderBy: {
          createdAt: 'desc',
        },
      })
    }),

  getAll: protectedProcedure
    .input(
      z.object({
        subsiteId: z.number().min(1),
      })
    )
    .query(async ({ input, ctx }) => {
      console.log({ 'input.subsiteId': input.subsiteId })
      const getAllWhere = {
        subsiteId: input.subsiteId,
      }
      return await ctx.db.page.findMany({
        where: getAllWhere,
        orderBy: {
          createdAt: 'desc',
        },
      })
    }),

  getOne: protectedProcedure
    .input(
      z.object({
        id: z.number().min(1),
      })
    )
    .query(async ({ input, ctx }) => {
      return await ctx.db.page.findFirst({
        where: {
          id: input.id,
        },
      })
    }),

  setStatusDraft: protectedProcedure
    .input(
      z.object({
        id: z.number().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.db.page.update({
        where: {
          id: input.id,
        },
        data: {
          status: ContentStatus.DRAFT,
        },
      })
    }),

  setStatusPublished: protectedProcedure
    .input(
      z.object({
        id: z.number().min(1),  
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.db.page.update({
        where: {
          id: input.id,
        },
        data: {
          published: true, 
          publishedAt: new Date(), 
          status: ContentStatus.PUBLISHED,
        },
      })
    }),  
    
  setStatusPending: protectedProcedure
    .input(
      z.object({
        id: z.number().min(1),  
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.db.page.update({
        where: {
          id: input.id,
        },
        data: {
          status: ContentStatus.PENDING,
        },
      })
    }),  
    
  setStatusReview: protectedProcedure
    .input(
      z.object({
        id: z.number().min(1),  
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.db.page.update({
        where: {
          id: input.id,
        },
        data: {
          status: ContentStatus.REVIEW,
        },
      })
    }),      

  showOnNav: protectedProcedure
    .input(
      z.object({
        id: z.number().min(1),
        showOnNav: z.boolean().default(true)     
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.db.page.update({
        where: {
          id: input.id,
        },
        data: {
          showOnNav: input.showOnNav,
        },
      })
    }),

  softDelete: protectedProcedure
    .input(
      z.object({
        id: z.number().min(1),
        softDeleted: z.boolean().default(true),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.db.page.update({
        where: {
          id: input.id,
        },
        data: {
          deleted: input.softDeleted,
        },
      })
    }),

  hardDelete: protectedProcedure
    .input(
      z.object({
        id: z.number().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.db.page.delete({
        where: {
          id: input.id,
        },
      })
    }),
})
