import { z } from 'zod'

import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'

export const postRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1),
        content: z.string().min(1),
        slug: z.string().min(1),
        authorId: z.number().min(1),
        subsiteId: z.number().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.db.post.create({
        data: {
          title: input.title,
          content: input.content,
          slug: input.slug,
          published: false,
          deleted: false,
          authorId: input.authorId,
          subsiteId: input.subsiteId
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
