import { z } from 'zod'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'
import { ContentStatus } from '@/db'
import { getFrontendBaseUrl } from '@/lib/url'
import { createContent, updateContent } from '@/lib/publisherBackend'

export const postRouter = createTRPCRouter({
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
      const exists = await ctx.db.post.findFirst({
        where: {
          title: input.title,
          authorId: input.authorId,
          subsiteId: input.subsiteId,
        },
      })
      // Do not allow the same title to be duplicated
      if (exists) {
        console.log('Failed to CREATE Content. Post already exists: ', exists?.id)
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

      const userName: string | undefined =  user?.name ?  user.name : undefined
      if (!userName) {
        console.log('Failed to CREATE Content >>> user.name is invalid.')
        return null
      }    

      const createContentData: any = {
        isUpdate: false,
        contentType: 'blogs',
        subRef: input.subRef,
        title: input.title,
        description: input.description,
        image: input.image,
        body: input.content,
        userName: userName, 
      }     
      
      const responseData = await createContent('blogs', userName, input.subRef, createContentData)
      console.log(">>> post >>> create >>> responseData >>> ", responseData)
      
      let slug: string | undefined = responseData && responseData?.slug ? responseData.slug : undefined
      if (slug && slug?.indexOf('/') === 0) {
        slug = `/${slug}`
      }
      
      console.log(">>> post >>> create >>> slug >>> ", slug)

      return await ctx.db.post.create({
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
        postId: z.number().min(1),
        content: z.string().min(1),
        authorId: z.number().min(1),
        subsiteId: z.number().min(1),        
        metaData: z.string().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const existingPost = await ctx.db.post.findFirst({
        where: {
          id: input.postId,
          authorId: input.authorId,
          subsiteId: input.subsiteId,           
        },
      })
      if (!existingPost) {
        console.log('Failed to update content. Post no longer exists: ', input.postId)
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

      const userName: string | undefined =  user?.name ?  user.name : undefined
      if (!userName) {
        console.log('Failed to UPDATE Content >>> user.name is invalid.')
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

      const updateContentData: any = {
          isUpdate: true,
          contentType: 'blogs',
          subRef: subRef,
          body: input.content,
          userName: user.name,  
          existingData: existingPost,    
          metaData: input.metaData,        
      }

      console.log('>>> post >>> update >>> updateContentData >>> ', updateContentData)
      const responseData = await updateContent('blogs', userName, subRef, updateContentData)
      console.log(">>> post >>> update >>> responseData >>> ", responseData)      

      return await ctx.db.post.update({
        where: {
          id: input.postId,
          authorId: input.authorId,
          subsiteId: input.subsiteId,          
        },
        data: {
          content: input.content,
          updatedAt: new Date()
        },
      })
    }),

  updateImage: protectedProcedure
    .input(
      z.object({
        postId: z.number().min(1),
        authorId: z.number().min(1),
        subsiteId: z.number().min(1),         
        coverImage: z.string().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const postExists = await ctx.db.post.findFirst({
        where: {
          id: input.postId,
        },
      })
      if (!postExists) {
        console.log('Failed to update image. Post no longer exists: ', input.postId)
        return null
      }

      return await ctx.db.post.update({
        where: {
          id: input.postId,
          authorId: input.authorId,
          subsiteId: input.subsiteId,          
        },
        data: {
          coverImage: input.coverImage,
        },
      })
    }),


  getFeatured: publicProcedure
    .input(
      z.object({
        limit: z.number().min(3),
      })
    )
    .query(async ({ input, ctx }) => {
      return await ctx.db.post.findMany({
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
      return await ctx.db.post.findMany({
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
        authorId: z.number().min(1).optional(),
        subsiteId: z.number().min(1).optional(),        
      })
    )
    .query(async ({ input, ctx }) => {
      return await ctx.db.post.findFirst({
        where: {
          id: input.id,
          authorId: input.authorId,
          subsiteId: input.subsiteId,          
        },
      })
    }),

  getPost: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1).optional(),
        authorId: z.number().min(1).optional(),
        subsiteId: z.number().min(1).optional(),
      })
    )
    .query(async ({ input, ctx }) => {
      if (!input?.title){
        return null
      }
      if (!input?.authorId){
        return null
      }
      if (!input?.subsiteId){
        return null
      }
      return await ctx.db.post.findFirst({
        where: {
          title: input.title,
          authorId: input.authorId,
          subsiteId: input.subsiteId,
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
      return await ctx.db.post.update({
        where: {
          id: input.id,
        },
        data: {
          status: ContentStatus.DRAFT,
          published: false, 
          updatedAt: new Date(),           
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
      return await ctx.db.post.update({
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
      return await ctx.db.post.update({
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
      return await ctx.db.post.update({
        where: {
          id: input.id,
        },
        data: {
          status: ContentStatus.REVIEW,
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
      return await ctx.db.post.update({
        where: {
          id: input.id,
        },
        data: {
          deleted: input.softDeleted,
          published: false,
          status: ContentStatus.DRAFT,
          updatedAt: new Date()          
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
      return await ctx.db.post.delete({
        where: {
          id: input.id,
        },
      })
    }),
})
