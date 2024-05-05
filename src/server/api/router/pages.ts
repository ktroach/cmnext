import { z } from 'zod'

import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'
import { ContentStatus } from '@/db'
import { getFrontendBaseUrl } from '@/lib/url'
import { createContent } from '@/lib/publisherBackend'

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
      
      const createContentData: any = {
        isUpdate: false,
        contentType: 'pages',
        subRef: input.subRef,
        title: input.title,
        description: input.description,
        image: input.image,
        body: input.content,
        userName: user.name,           
      }

      const responseData = await createContent('pages', user.name, input.subRef, createContentData)
      console.log(">>> page >>> create >>> responseData >>> ", responseData)
      
      let slug: string | undefined = responseData && responseData?.slug ? responseData.slug : undefined
      // TODO: Ensure that the slug is pre-fixed with a slash before saving to the database
      if (slug && slug?.indexOf('/') === 0) {
        slug = `/${slug}`
      }

      return await ctx.db.page.create({
        data: {
          title: input.title,
          content: input.content,
          slug: slug,
          published: false,
          deleted: false,
          authorId: input.authorId,
          subsiteId: input.subsiteId,
          metaData: `${slug}.mdx`
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
        metaData: z.string().min(1), 
      })
    )
    .mutation(async ({ input, ctx }) => {
      const existingPage = await ctx.db.page.findFirst({
        where: {
          id: input.pageId,
        },
      })

      if (!existingPage) {
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

      // TODO: Re-evaluate the api endpoint and fetch here.
      const baseUrl: string = getFrontendBaseUrl()
      const updateContentEndpoint: string = `${baseUrl}/api/content/save`
      const response = await fetch(updateContentEndpoint, {
        method: 'POST',
        body: JSON.stringify({
          isUpdate: true,
          contentType: 'pages',
          subRef: subRef,
          body: input.content,
          userName: user.name,  
          existingData: existingPage,          
          metaData: input.metaData,        
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
          updatedAt: new Date()
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
