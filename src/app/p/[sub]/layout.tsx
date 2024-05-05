'use server'

import React from 'react'
import SubsiteMenu from '@/components/containers/subsite-menu'
import { getFrontendBaseUrl } from '@/lib/url'
import { getAllPagesBySubRef, getAllBlogsBySubRef } from '@/lib/queries'

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
  const subRef = params?.sub ? params.sub : null
  const pagesData = await getAllPagesBySubRef(subRef)
  const blogsData = await getAllBlogsBySubRef(subRef)

  // TODO: This needs some serious work 
  // Needs to support parent page option
  // Needs to go off of some ordering concept 

  menuData.push({
    label: 'HOME',
    href: '/',
    slug: '/',
    sub: params.sub,
    type: 'super-group',
    items: [], 
    isPage: true, 
  })      

  if (pagesData && params?.sub) {
    let pagesMenu: any = []
    for (let i = 0; i < pagesData.length; i++) {
      const pageData = pagesData[i]
      const pageTitle = pageData?.title ? pageData.title : undefined
      const pageSlug  = pageData?.slug ? pageData.slug : undefined
      const pageUrl = `${baseUrl}/p/${params.sub}/pages/${pageSlug}`
      pagesMenu.push({
        label: pageTitle,
        href: pageUrl,
        slug: pageSlug,
        sub: params.sub,
        type: 'navlink',
        isPage: true, 
      })      
    }
    menuData.push({
      label: 'Pages',
      href: '#',
      slug: '/pages',
      sub: params.sub,
      type: 'super-group',
      isPage: true, 
      items: pagesMenu
    })          
  }

  if (blogsData && params?.sub) {
    let blogsMenu: any = []
    // add the posts to the Blogs group
    blogsData.map((post: any) =>
      blogsMenu.push({
        label: post.title,
        href: `${baseUrl}/p/${params.sub}/blogs/${post.slug}`, 
        type: 'navlink',
        slug: post.slug,
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
      <main className="flex-1 my-20">{children}</main>{' '}
    </div>
  )
}
