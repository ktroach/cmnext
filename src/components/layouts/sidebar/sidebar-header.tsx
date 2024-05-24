import React from 'react'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Icons } from '@/styles/icons'
import { cn } from '@/lib/utils'
import { RootConfig } from '@/config/root-config'

export const SidebarHeader = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <>
      <Link href='/'>
        <div className={cn("flex items-center", collapsed && "justify-center")}>
          <Icons.nextjs className={cn("size-6 font-semibold")} />
          <h1 className={cn("ml-4 opacity-100 visible block w-auto truncate transition-all", collapsed && " invisible hidden w-0")}>{RootConfig?.name}</h1>
        </div>
        <Separator className="mt-4" />
      </Link>
    </>
  )
}