'use server'

import React from 'react'
import { allPages } from 'contentlayer/generated'
import { Block } from '@/components/containers/block'
import DynamicMenuContainer from '@/components/containers/dynamic-menu'
import { MenuItemType } from '@/components/templates/dynamic-navmenu'

export default async function PagePage({ params }: any) {
  let menus: any = []
  allPages.map((page) =>
    menus.push({
      label: page.title,
      href: page.slug,
      slug: page.slugAsParams.split('/'),
    })
  )

  let menuItems: MenuItemType[] = []
  let groupName: string = ''

  for (let i = 0; i < menus.length; i++) {
    let menuProps = menus[i]
    let slugItems = menuProps?.slug ? menuProps.slug : undefined
    // TODO: replace '/page/' in href with '/p/[sub]/pages/'
    let subRef = `/p/${params.sub}/pages/`
    if (slugItems && slugItems.length > 0) {
      if (slugItems.length > 1) {
        if (groupName !== slugItems[0]) {
          groupName = slugItems[0]
          // add the rest of the items under the group
          let subMenus = []
          for (let j = 1; j < slugItems.length; j++) {
            const slugItem = slugItems[j]
            subMenus.push({
              label: slugItem,
              href: menuProps?.href,
              type: 'navlink',
              items: [],
            })
          }
          // create the group at the top level
          menuItems.push({
            label: groupName,
            href: menuProps?.href, // parse the href
            type: 'group',
            items: subMenus,
          })
        }
      } else {
        // slugItem.length === 1 (one top menu item)
        menuItems.push({
          label: menuProps?.label,
          href: menuProps?.href,
          type: 'group',
          items: [],
        })
      }
    }
  }

  return (
    <Block>
      {JSON.stringify(menus)}
      <DynamicMenuContainer menuItems={menuItems} />
      <div className="w-full py-8 overflow-hidden flex flex-col items-center justify-center">
        sub: {params.sub} - Home
      </div>
    </Block>
  )
}
