'use client'

import React from 'react'
import {
  HoveredLink,
  Menu,
  MenuItem,
} from '@/components/animations/floating-navbar'
import { cn } from '@/lib/utils'

export interface MenuItemProps {
  item: MenuItemType
  active: string | null
  setActive: any | undefined    
}

export interface MenuItemType {
  label: string
  href: string | undefined
  type: string | undefined
  items?: MenuItemType[]
}

export interface NavMenuProps {
    menuItems: MenuItemType[]
    active: string | null
    setActive: any | undefined     
}

export interface MenuThingProps {
    className: string | undefined
    menuItems: MenuItemType[]
    active: string | null
    setActive: any | undefined    
}

const NavMenuItem: React.FC<MenuItemProps> = ({ item, setActive, active }) => {
  const subMenu = item.items ? (
    <div className="flex flex-col space-y-4 text-sm">
      {item.items.map((subItem, index) => (
        <HoveredLink key={index} href={subItem?.href}>{subItem?.label}</HoveredLink>
      ))}
    </div>
  ) : null

  return (
    <MenuItem
      setActive={setActive}
      active={active}
      item={item?.label}
    >
      {subMenu}
    </MenuItem>
  )
}

const NavMenu: React.FC<NavMenuProps> = ({ menuItems, setActive, active }) => {
  return (
    <>
      {menuItems.map((item, index) => (
        <NavMenuItem key={index} item={item} setActive={setActive} active={active} />
      ))}
    </>
  )
}

export const NavMenuThing = (props: MenuThingProps) => {
  return (
    <div
      className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50', props?.className)}
    >
      <Menu setActive={props?.setActive}>
        <NavMenu menuItems={props?.menuItems} setActive={props?.setActive} active={props?.active} />
      </Menu>
    </div>
  )
}
