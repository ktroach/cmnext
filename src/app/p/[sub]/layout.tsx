'use server'

import React from 'react'
import SubsiteMenu from '@/components/containers/subsite-menu'
import { getFrontendBaseUrl } from '@/lib/url'
import { getAllPagesBySubRef, getAllBlogsBySubRef } from '@/lib/queries'
import dayjs from 'dayjs'

interface SubsiteLayoutProps {
  params: any
  children: React.ReactNode
}

export default async function SubsiteLayout({
  params,
  children,
}: SubsiteLayoutProps) {
  const buildPagesMenu = (subsitePagesData: any[]): any[] => {
    const pagesMenu: any[] = []
    const parentMap: Map<number, any> = new Map()

    for (const subsitePage of subsitePagesData) {
      if (subsitePage?.parentPageId < 0) {
        parentMap.set(subsitePage.id, subsitePage)
      }
    }

    for (const page of subsitePagesData) {
      if (page?.parentPageId) {
        const parent = parentMap.get(page.parentPageId)
        if (parent) {
          if (!parent?.items || parent?.items?.length === 0) {
            parent.items = []
          }
          parent.items.push(page)
        }
      }
    }

    if (parentMap && parentMap.size > 0) {
      for (const value of parentMap.values()) {
        pagesMenu.push(value)
      }
    }

    if (pagesMenu && pagesMenu?.length > 0) {
      pagesMenu.sort((a, b) =>
        dayjs(a.createdAt).isAfter(dayjs(b.createdAt)) ? 1 : -1
      )
    }

    return pagesMenu
  }

  let menuData: any = []
  const baseUrl = getFrontendBaseUrl()
  const subRef = params?.sub ? params.sub : null
  let pagesData: any[] | null | undefined = await getAllPagesBySubRef(
    subRef,
    'PUBLISHED'
  )
  const pagesMenuResult: any[] = pagesData ? buildPagesMenu(pagesData) : []
  if (pagesMenuResult && subRef) {
    for (let i = 0; i < pagesMenuResult.length; i++) {
      const pageMenu = pagesMenuResult[i]
      let pagesMenu: any = []
      if (pageMenu?.items) {
        const pageChildren = pageMenu.items
        for (let j = 0; j < pageChildren.length; j++) {
          const childPage = pageChildren[j]
          const childSlug = childPage?.slug ? childPage.slug : ''
          pagesMenu.push({
            label: childPage?.title,
            href: `${baseUrl}/p/${subRef}/pages/${childSlug}`,
            slug: childSlug,
            sub: subRef,
            type: 'navlink',
            isPage: true,
          })
        }
      }

      if (pagesData && pagesData?.length > 0) {
        pagesData.sort((a, b) => a.pageOrder - b.pageOrder)
      }

      const pageTitle = pageMenu?.title ? pageMenu.title : undefined
      const pageSlug = pageMenu?.slug ? pageMenu.slug : undefined
      const pageUrl = `${baseUrl}/p/${params.sub}/pages/${pageSlug}`
      menuData.push({
        label: pageTitle,
        href: '#',
        slug: pageSlug,
        sub: params.sub,
        type: 'super-group',
        isPage: true,
        items: pagesMenu,
      })
    }
  }

  let blogsData: any[] | null | undefined = await getAllBlogsBySubRef(
    subRef,
    'PUBLISHED'
  )
  if (blogsData && params?.sub) {
    let blogsMenu: any = []
    blogsData.map((post: any) =>
      blogsMenu.push({
        label: post.title,
        href: `${baseUrl}/p/${params.sub}/blogs/${post.slug}`,
        type: 'navlink',
        slug: post.slug,
        sub: params.sub,
      })
    )

    if (blogsMenu && blogsMenu?.length > 0) {
      blogsMenu.sort((a: { createdAt: string | number | Date | dayjs.Dayjs | null | undefined }, b: { createdAt: string | number | Date | dayjs.Dayjs | null | undefined }) =>
        dayjs(a.createdAt).isAfter(dayjs(b.createdAt)) ? 1 : -1
      )
      blogsMenu?.reverse()
    }
    
    menuData.push({
      label: 'Blogs',
      href: `${baseUrl}/p/${params.sub}/blogs`,
      type: 'super-group',
      slug: ['blogs'],
      sub: params.sub,
      items: blogsMenu,
    })
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <SubsiteMenu sub={params.sub} menuData={menuData} />
      <main className="flex-1 my-20">{children}</main>{' '}
    </div>
  )
}
