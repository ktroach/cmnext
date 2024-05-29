import { z } from 'zod'

import { createTRPCRouter, protectedProcedure } from '../trpc'
import { createContent } from '@/lib/publisherBackend'
import { RootConfig } from '@/config/root-config'

export const subsiteRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        accountId: z.number().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const newSubSite = await ctx.db.subsite.create({
        data: {
          name: input.name,
          accountId: input.accountId,
        },
      })

      if (!newSubSite) {
        console.log('Failed to CREATE Subsite. Subsite does not exist.')
        return null
      }         
      const newSubSiteId = newSubSite?.id 
      const newSubRef = newSubSite?.subsiteRef

      const user = await ctx.db.user.findFirst({
        where: {
          id: input.accountId,
        },
      })
      if (!user) {
        console.log('Failed to CREATE Subsite. User does not exist.')
        return null
      }   
      const userId = user && user?.id ? user.id : undefined

      // Create the initial Home page to the subsite
      const createContentData: any = {
        isUpdate: false,
        contentType: 'pages',
        subRef: newSubRef,
        title: 'Home',
        description: 'Home Page',
        image: RootConfig.defaultCoverImage,
        body: '# Home Page',
        userName: user.name,           
      }

      const responseData = await createContent('pages', user.name, newSubRef, createContentData)
      let slug: string | undefined = responseData && responseData?.slug ? responseData.slug : undefined
      let metaDataSlug: string  = slug ? slug : ''
      let pageSlug: string = slug ? slug : ''
      if (pageSlug && pageSlug?.indexOf('/') === 0) {
        pageSlug = `/${pageSlug}`
      }

      if (newSubSiteId && userId) {
        const newPage = {
          data: {
            title: 'Home',
            content: 'Home',
            authorId: userId,
            subsiteId: newSubSiteId,
            slug: pageSlug,
            published: false,
            deleted: false,
            metaData: `${metaDataSlug}.mdx`,
            pageType: 'full-width',
          },
        }
        await ctx.db.page.create(newPage)
      }

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
