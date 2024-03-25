// Subsite Layout
'use server'

import React from 'react'

import { allPages, allPosts } from 'contentlayer/generated'
import SubsiteMenu from '@/components/containers/subsite-menu'
import { getFrontendBaseUrl } from '@/lib/url'

interface SubsiteLayoutProps {
  params: any
  children: React.ReactNode
}

export default async function SubsiteLayout({
  params,
  children,
}: SubsiteLayoutProps) {
  let menuData: any = []
  const baseUrl = getFrontendBaseUrl()
  if (allPages && params?.sub) {
    allPages.map((page) =>
      menuData.push({
        label: page.title,
        href: page.slug,
        slug: page.slugAsParams.split('/'),
        sub: params.sub,
      })
    )
  }

  if (allPosts && params?.sub) {
    let blogsMenu: any = []
    // add the posts to the Blogs group
    allPosts.map((post) =>
      blogsMenu.push({
        label: post.title,
        href: `${baseUrl}/p/${params.sub}${post.slug}`, 
        type: 'navlink',
        slug: post.slugAsParams.split('/'),
        sub: params.sub,
      })
    )
    // create a top menu group for Blogs
    menuData.push({
      label: 'Blogs',
      href: `${baseUrl}/p/${params.sub}/blogs`,
      type: 'super-group',
      slug: ['blogs'],
      sub: params.sub,
      items: blogsMenu
    })    
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <SubsiteMenu sub={params.sub} menuData={menuData} />
      {/* subs route layout - sub: {params.sub} */}
      <main className="flex-1 my-20">{children}</main>{' '}
    </div>
  )
}
