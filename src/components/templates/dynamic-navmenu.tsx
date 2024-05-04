'use client'

import React from 'react'
import {
  HoveredLink,
  Menu,
  MenuItem,
} from '@/components/animations/floating-navbar'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/layouts/theme-toggle'

export interface MenuItemProps {
  item: MenuItemType
  active: string | null
  setActive: any | undefined    
}

// TODO: add menuitem description for submenu Cards and maybe title attribute in the hoverlinks 
export interface MenuItemType {
  label: string
  href: string | undefined
  type: string | undefined
  items?: MenuItemType[]
  isPage?: boolean
}

export interface NavMenuProps {
    menuItems: MenuItemType[] | null
    active: string | null
    setActive: any | undefined     
}

export interface DynamicNavMenuProps {
    className: string | undefined
    menuItems: MenuItemType[] | null
    active: string | null
    setActive: any | undefined    
}

export const NavMenuItem = ({ item, setActive, active }: MenuItemProps) => {
  const subMenu = item.items ? (
    <div className="flex flex-col space-y-4 text-sm">
      {item.items.map((subItem, index) => (
        <HoveredLink key={index} href={subItem?.href}>{subItem?.label}</HoveredLink>
      ))}
    </div>
  ) : null

  const url = item?.href ? item.href : ""

  return (
    <MenuItem
      setActive={setActive}
      active={active}
      item={item?.label}
      href={url}
    >
      {subMenu}
    </MenuItem>
  )
}

export const NavMenu = ({ menuItems, setActive, active }: NavMenuProps) => {
  if (!menuItems) {
    return null
  }
  return (
    <>
      {menuItems.map((item, index) => (
        <NavMenuItem key={index} item={item} setActive={setActive} active={active} />
      ))}
    </>
  )
}

export const DynamicNavMenu = ({className, menuItems, active, setActive }: DynamicNavMenuProps) => {
  return (
    <div
      className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50', className)}
    >
      <Menu setActive={setActive}>
        <NavMenu menuItems={menuItems} setActive={setActive} active={active} />
        <ThemeToggle className="pt-1 mt-[-12px]" />
      </Menu>
    </div>
  )
}
