'use server'

import React from 'react'
import { allPages } from 'contentlayer/generated'
import { Block } from '@/components/containers/block'
import SubsiteMenu from '@/components/containers/subsite-menu'

export default async function PagePage({ params }: any) {
  let menus: any = []

  if (allPages && params?.sub) {
    allPages.map((page) =>
      menus.push({
        label: page.title,
        href: page.slug,
        slug: page.slugAsParams.split('/'),
        sub: params.sub,
      })
    )
  }

  return (
    <Block>
      <SubsiteMenu sub={params.sub} menus={menus} />
      <div className="w-full py-8 overflow-hidden flex flex-col items-center justify-center">
        Sub: {params.sub} Home
        <div className="w-full overflow-hidden items-center justify-center">
          {JSON.stringify(menus)}
        </div>
      </div>
    </Block>
  )
}
