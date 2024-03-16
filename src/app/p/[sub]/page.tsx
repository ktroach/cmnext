'use server'

import React from 'react'
import { allPages } from 'contentlayer/generated'
import { Block } from '@/components/containers/block'
import SubsiteMenu from '@/components/containers/subsite-menu'

export default async function PagePage({ params }: any) {
  let menuData: any = []
  /**
   * You build a dynamic menu or nav by iterating over a collection of pages or posts and creating a new array of menuData
   * Then you pass your menuData to the dynamicMenuBuilder() function and that function builds your menu heirarchy for you
   * This means that when a new page or post is added, the new content is automatically to your Nav menu
   * Here, you can see that we are just building the data for our nav bar from the pages collection. The pages collection
   * is created/generated automatically by ContentLayer when a new MDX file is saved to the pages or posts folders.
   * ContentLayer will generate the Markdown for us and the collection is updated by ContentLayer and our menu or nav bar 
   * recieves this change and updates appropriately.
   **/
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

  return (
    <Block>
      <SubsiteMenu sub={params.sub} menuData={menuData} />
      <div className="w-full py-8 overflow-hidden flex flex-col items-center justify-center">
        Sub: {params.sub} Home
        <div className="w-full overflow-hidden items-center justify-center">
          {JSON.stringify(menuData)}
        </div>
      </div>
    </Block>
  )
}
