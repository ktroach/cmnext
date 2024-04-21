import { z } from 'zod'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'
import { ContentStatus } from '@/db'

export const postRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        subRef: z.string().min(1),
        title: z.string().min(1),
        description: z.string().min(1),
        image: z.string().min(1),
        content: z.string().min(1),
        slug: z.string().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      console.log("CAN WE CALL FETCH OR AXIOS RIGHT HERE?")

      const alreadyExists = await ctx.db.post.findFirst({ where: {title: input.title} })
      if (alreadyExists) {
        console.log("Post already exists...")
        return null
      }

      // TODO: get authorId and subsiteId from backend!
      
      const response = await fetch("/api/content/save", {
        method: "POST",
        body: JSON.stringify({
          subRef: input.subRef,
          title: input.title, 
          description: input.description,
          image: input.image,
          body: input.content
        }),
      });

      if (!response) {
        console.log("Error saving content!")
        return null        
      }

      return await ctx.db.post.create({
        data: {
          title: input.title,
          content: input.content,
          slug: input.slug,
          published: false,
          deleted: false,
          authorId: 7,
          subsiteId: 7
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
        softDeleted: z.boolean().default(true)     
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

  delete: protectedProcedure
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

  patch: protectedProcedure
    .input(
      z.object({
        id: z.number().min(1),
        title: z.string().min(1),
        content: z.string().min(1),
        slug: z.string().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.db.post.update({
        where: {
          id: input.id,
        },
        data: {
          title: input.title,
          content: input.content,
          slug: input.slug,
        },
      })
    }),
})
