"use client"

import React, { useState } from 'react'
import { DynamicNavMenu, MenuItemType } from '../templates/dynamic-navmenu'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from '@/lib/utils'

interface DynamicMenuContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dynamicMenuVariants> {
  as?: React.ElementType, 
  className?: string | undefined
  menuItems: MenuItemType[]
}

const dynamicMenuVariants = cva("top-2", {
  variants: {
    variant: {
      default: "container",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export default function DynamicMenuContainer({className, menuItems, variant }: DynamicMenuContainerProps) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <>
      <DynamicNavMenu
        className={cn(dynamicMenuVariants({ variant }), className)}
        menuItems={menuItems}
        active={active}
        setActive={setActive}
      />
    </>
  )
}  