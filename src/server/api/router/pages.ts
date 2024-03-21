import { z } from 'zod'

import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'
import { ContentStatus } from '@/db'

export const pagesRouter = createTRPCRouter({
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
      return await ctx.db.page.create({
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

  show: protectedProcedure
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
        softDeleted: z.boolean().default(true)     
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

  delete: protectedProcedure
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
      return await ctx.db.page.update({
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
