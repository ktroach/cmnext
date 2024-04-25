import { z } from 'zod'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'
import { ContentStatus } from '@/db'
import { getFrontendBaseUrl } from '@/lib/url'

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

      const baseUrl: string = getFrontendBaseUrl()
      const saveEndpoint: string = `${baseUrl}/api/content/save`
      const response = await fetch(saveEndpoint, {
        method: 'POST',
        body: JSON.stringify({
          isUpdate: false,
          subRef: input.subRef,
          title: input.title,
          description: input.description,
          image: input.image,
          body: input.content,
        }),
      })

      if (response.status !== 204) {
        console.log('Error saving Post >>> input >>> ', input)
        return null
      }

      const responseData = await response.json()
      console.log("post create >>> responseData >>> ", responseData)
      const slug = responseData && responseData?.slug ? responseData.slug : undefined
      console.log("post create >>> slug >>> ", slug)

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
      })
    )
    .mutation(async ({ input, ctx }) => {
      const exists = await ctx.db.post.findFirst({
        where: {
          id: input.postId,
        },
      })
      if (!exists) {
        console.log('Failed to update content. Post no longer exists: ', input.postId)
        return null
      }

      return await ctx.db.post.update({
        where: {
          id: input.postId,
        },
        data: {
          content: input.content,
        },
      })
    }),

  updateImage: protectedProcedure
    .input(
      z.object({
        postId: z.number().min(1),
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
      console.log({ 'input.limit': input.limit })
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
      })
    )
    .query(async ({ input, ctx }) => {
      return await ctx.db.post.findFirst({
        where: {
          id: input.id,
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
