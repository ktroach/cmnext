import { z } from 'zod'

import { createTRPCRouter, protectedProcedure } from '../trpc'
import { v4 as uuidv4 } from 'uuid'

export const subsiteRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        accountId: z.number().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const subsiteRef = uuidv4()
      console.log('subsiteRef: ', subsiteRef)
      const newSubSite = await ctx.db.subsite.create({
        data: {
          name: input.name,
          accountId: input.accountId,
        //   subsiteRef: subsiteRef is automatically created by prisma 
        },
      })
      return newSubSite
    }),

  getByAccount: protectedProcedure
    .input(
      z.object({
        accountId: z.number().min(1),
      })
    )
    .query(async ({ input, ctx }) => {
      console.log({ 'input.accountId': input.accountId })
      const criteria = {
        accountId: input.accountId,
      }
      return await ctx.db.subsite.findMany({
        where: criteria,
      })
    }),

  getAllSubSites: protectedProcedure
    .input(z.object({}))
    .query(async ({ input, ctx }) => {
      return await ctx.db.subsite.findMany({
        orderBy: {
          name: 'asc',
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
      return await ctx.db.subsite.findFirst({
        where: {
          id: input.id,
        },
      })
    }),

  getByRef: protectedProcedure
    .input(
      z.object({
        subsiteRef: z.string().min(1),
      })
    )
    .query(async ({ input, ctx }) => {
      return await ctx.db.subsite.findFirst({
        where: {
          subsiteRef: input.subsiteRef,
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
      return await ctx.db.subsite.delete({
        where: {
          id: input.id,
        },
      })
    }),

  patchName: protectedProcedure
    .input(
      z.object({
        id: z.number().min(1),
        name: z.string().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.db.subsite.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
        },
      })
    }),

  patchFull: protectedProcedure
    .input(
      z.object({
        id: z.number().min(1),
        name: z.string().min(1),
        accountId: z.number().min(1),
        subsiteRef: z.string().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.db.subsite.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          accountId: input.accountId,
          subsiteRef: input.subsiteRef, 
        },
      })
    }),
})
