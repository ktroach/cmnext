'use client'

import React, { useState } from 'react'
import {
  DynamicNavMenu,
  MenuItemType,
} from '@/components/templates/dynamic-navmenu'
import useHref from '@/hooks/use-href'

export interface SubsiteMenuProps {
  sub: string
  menus: any
}

export default function SubsiteMenu({ sub, menus }: SubsiteMenuProps) {
  const [active, setActive] = useState<string | null>(null)
  let menuItems: MenuItemType[] = []

  if (menus && menus.length > 0) {
    let groupName: string = ''
    for (let i = 0; i < menus.length; i++) {
      let menuProps = menus[i]
      let slugItems = menuProps?.slug ? menuProps.slug : undefined
      if (slugItems && slugItems.length > 0) {
        if (slugItems.length > 1) {
          if (groupName !== slugItems[0]) {
            groupName = slugItems[0]
            let subMenus = []
            for (let j = 1; j < slugItems.length; j++) {
              const slugItem = slugItems[j]
              subMenus.push({
                label: slugItem,
                href: useHref(menuProps),
                type: 'navlink',
                items: [],
              })
            }
            menuItems.push({
              label: groupName.toUpperCase(),
              href: useHref(menuProps),
              type: 'group',
              items: subMenus,
            })
          }
        } else {
          menuItems.push({
            label: menuProps?.label ? menuProps.label.toUpperCase() : '',
            href: useHref(menuProps),
            type: 'group',
            items: [],
          })
        }
      }
    }
  }

  return (
    <>
      {menus && (
        <>
          <DynamicNavMenu
            className="top-2"
            menuItems={menuItems}
            active={active}
            setActive={setActive}
          />
        </>
      )}
    </>
  )
}
