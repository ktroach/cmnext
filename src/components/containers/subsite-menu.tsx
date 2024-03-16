'use client'

import React, { useState } from 'react'
import {
  DynamicNavMenu,
} from '@/components/templates/dynamic-navmenu'
import {buildDyanmicMenus} from '@/lib/menuBuilder'

export interface SubsiteMenuProps {
  sub: string
  menuData: any
}

export default function SubsiteMenu({ sub, menuData }: SubsiteMenuProps) {
  const [active, setActive] = useState<string | null>(null)
  const menuItems = buildDyanmicMenus(menuData)
  return (
    <>
      {menuData && (
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
