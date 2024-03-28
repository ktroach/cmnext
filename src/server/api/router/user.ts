import { z } from 'zod'

import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const newUser = await ctx.db.user.create({
        data: {
          name: input.name,
          email: input.email,
        },
      })
      return newUser
    }),

  getAll: publicProcedure.input(z.object({})).query(async ({ input, ctx }) => {
    return await ctx.db.user.findMany({
    })
  }),

  getOne: publicProcedure
    .input(
      z.object({
        id: z.number().min(1),
      })
    )
    .query(async ({ input, ctx }) => {
      return await ctx.db.user.findFirst({
        where: {
          id: input.id,
        },
      })
    }),

  getByName: publicProcedure
    .input(
      z.object({
        username: z.string().min(1),
      })
    )
    .query(async ({ input, ctx }) => {
      return await ctx.db.user.findFirst({
        where: {
          name: input.username,
        },
      })
    }),

  getUserSubRef: publicProcedure
    .input(
      z.object({
        username: z.string().min(1),
      })
    )
    .query(async ({ input, ctx }) => {
      const userData = await ctx.db.user.findFirst({
        where: { name: input.username },
      })
      
      if (!userData) {
        return null
      }
      const adminId = userData?.id ? userData.id : undefined
      if (!adminId) {
        return null
      }
      const accountData = await ctx.db.account.findFirst({
        where: { adminId: adminId },
      })
      if (!accountData) {
        return null
      }
      const accountId = accountData?.id ? accountData.id : undefined
      if (!accountId) {
        return null
      }

      const subsiteData = await ctx.db.subsite.findFirst({
        where: { accountId: accountId },
      })
      if (!subsiteData) {
        return null
      }
      const subsiteRef = subsiteData?.subsiteRef
        ? subsiteData.subsiteRef
        : undefined
      if (!subsiteRef) {
        return null
      }
      return subsiteRef
    }),

  delete: protectedProcedure
    .input(
      z.object({
        id: z.number().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.db.user.delete({
        where: {
          id: input.id,
        },
      })
    }),

  patch: protectedProcedure
    .input(
      z.object({
        id: z.number().min(1),
        name: z.string().min(1),
        email: z.string().min(1),
        description: z.string().optional(),
        token: z.string().optional(),
        prefix: z.string().optional(),
        firstName: z.string().min(1),
        middleName: z.string().optional(),
        lastName: z.string().min(1),
        suffix: z.string().optional(),
        preferredName: z.string().optional(),
        gender: z.string().optional(),
        birthDate: z.date().optional(),
        local: z.string().optional(),
        timeZone: z.string().optional(),
        lastLoginTime: z.date().optional(),
        updatedAt: z.date().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.db.user.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          email: input.email,
          description: input.description,
          token: input.token,
          prefix: input.prefix,
          firstName: input.firstName,
          middleName: input.middleName,
          lastName: input.lastName,
          suffix: input.suffix,
          preferredName: input.preferredName,
          gender: input.gender,
          birthDate: input.birthDate,
          local: input.local,
          timeZone: input.timeZone,
          lastLoginTime: input.lastLoginTime,
          updatedAt: input.updatedAt,
        },
      })
    }),
})
