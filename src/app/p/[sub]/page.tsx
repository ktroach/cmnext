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

  const getHref = (menuProps: any): any => {
    const subRef: string | undefined = params?.sub ? params.sub : undefined
    const subPath: string | undefined = subRef
      ? `http://localhost:3000/p/${subRef}/pages/`
      : undefined
    const menuItemHref = menuProps?.href ? menuProps.href : undefined
    const hrefResult =
      menuItemHref && subPath ? menuItemHref.replace('/pages/', subPath) : '#'
    console.log('>>> hrefResult >>> ', hrefResult)
  }

  let menuItems: MenuItemType[] = []
  let groupName: string = ''

  for (let i = 0; i < menus.length; i++) {
    let menuProps = menus[i]
    let slugItems = menuProps?.slug ? menuProps.slug : undefined
    // TODO: replace '/page/' in href with '/p/[sub]/pages/'
    // let subRef = `/p/${params.sub}/pages/`
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
              href: getHref(menuProps),
              type: 'navlink',
              items: [],
            })
          }
          // create the group at the top level
          menuItems.push({
            label: groupName,
            href: getHref(menuProps), // parse the href
            type: 'group',
            items: subMenus,
          })
        }
      } else {
        // one top menu item
        // let topMenuItemHref: string = ''
        // const topMenuItemLabel: string = menuProps?.label
        //   ? menuProps.label.toUpperCase()
          // : ''
        // let menuItemHref: string = ''
        // let subRef: string | undefined = params?.sub ? params.sub : undefined
        // let subPath: string | undefined = subRef
        //   ? `/p/${subRef}/pages/`
        //   : undefined
        // menuItemHref = menuProps?.href ? menuProps.href : undefined
        // if (menuItemHref && subPath) {
        //   topMenuItemHref = menuItemHref.replace('/pages/', subPath)
        //   topMenuItemHref = `http://localhost:3000${topMenuItemHref}`
        //   console.log('>>> topMenuItemHref >>> ', topMenuItemHref)
        // }
        menuItems.push({
          label: menuProps?.label
          ? menuProps.label.toUpperCase()
          : '',
          href: getHref(menuProps),
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
