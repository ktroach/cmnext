import { z } from 'zod'

import { createTRPCRouter, protectedProcedure } from '../trpc'

export const accountRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        adminId: z.number().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const newAccount = await ctx.db.account.create({
        data: {
          name: input.name,
          adminId: input.adminId,
        },
      })
      return newAccount
    }),

  createWithSubsites: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        adminId: z.number().min(1),
        subsites: z.any(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const newAccount = await ctx.db.account.create({
        data: {
          name: input.name,
          adminId: input.adminId,
          subsites: input.subsites,
        },
      })
      return newAccount
    }),

  getAdminAccount: protectedProcedure
    .input(
      z.object({
        adminId: z.number().min(1),
      })
    )
    .query(async ({ input, ctx }) => {
      console.log({ 'input.adminId': input.adminId })
      const criteria = {
        adminId: input.adminId,
      }
      return await ctx.db.account.findMany({
        where: criteria,
      })
    }),

  getAllAccounts: protectedProcedure
    .input(z.object({}))
    .query(async ({ input, ctx }) => {
      return await ctx.db.account.findMany({
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
      return await ctx.db.account.findFirst({
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
      return await ctx.db.account.delete({
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
      return await ctx.db.account.update({
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
        adminId: z.number().min(1),
        subsites: z.any(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.db.account.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          adminId: input.adminId,
          subsites: input.subsites,
        },
      })
    }),
})
