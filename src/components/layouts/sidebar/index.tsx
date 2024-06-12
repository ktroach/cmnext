'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SidebarHeader } from './sidebar-header'
import { SidebarMenu } from './sidebar-menu'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import { Icons } from '@/styles/icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ThemeToggle } from '@/components/layouts/theme-toggle'
import { getFrontendBaseUrl } from '@/lib/url'

export type MenuItem = {
  label: string
  path?: string
  icon?: React.JSX.Element
  children?: MenuItem[]
}

export type SidebarProps = {
  routes: MenuItem[]
  subRef: string | undefined
  account: any
}

export const Sidebar = ({ routes, account, subRef }: SidebarProps) => {
  const publisherUrl: string | undefined = subRef
    ? `/publish/${subRef}`
    : undefined
  const baseUrl: string = getFrontendBaseUrl()
  const accountUrl: string = publisherUrl
    ? `${baseUrl}${publisherUrl}/settings/profile`
    : ''
  const pathname = usePathname()
  const [collapsed, setCollapsed] = React.useState(false)

  return (
    <div
      id="docs-sidebar"
      className={cn(
        'bg-muted/20 h-full hidden border-e  pb-10 pt-4 transition-all lg:relative lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col flex-grow-0 ',
        {
          'lg:w-20': collapsed,
        }
      )}
    >
      <div className="px-6">
        <Link
          className="flex-none text-xl font-semibold"
          href="#"
          aria-label="Brand"
        >
          <SidebarHeader collapsed={collapsed} />
        </Link>
      </div>

      <SidebarMenu {...{ pathname, routes, collapsed, setCollapsed }} />

      <Button
        variant="outline"
        size="icon"
        onClick={() => setCollapsed(!collapsed)}
        className="bg-background absolute -right-3 top-1/2 -translate-y-1/2 z-10 size-6 rounded-full shadow-lg dark:bg-gray-900"
      >
        <Icons.chevronLeft
          className={cn('size-4 transition-transform', {
            'rotate-180': collapsed,
          })}
        />
      </Button>

      <div className="flex flex-col flex-grow-0 absolute bottom-0 -translate-y-12 ml-3 ">
        <div className="">
          <nav className="space-x-4">
            <ThemeToggle className="ml-4 mb-5" />
            {account ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="" asChild>
                  <Button
                    variant="secondary"
                    className="relative h-8 w-8 rounded-full ml-2"
                  >
                    <Avatar className="h-9 w-9 ml-2 ">
                      <AvatarImage
                        src={account?.imageUrl}
                        alt={account?.username ?? ''}
                      />
                      <AvatarFallback>{account?.initials}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 my-3"
                  align="end"
                  forceMount
                >
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1 ">
                      <p className="text-sm font-medium leading-none">
                        {account?.firstName} {account?.lastName}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {account?.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link href={accountUrl}>
                        <Icons.user
                          className="mr-2 h-4 w-4"
                          aria-hidden="true"
                        />
                        Account Settings
                        <DropdownMenuShortcut>⇧⌘A</DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/signout">
                      <Icons.logout
                        className="mr-2 h-4 w-4"
                        aria-hidden="true"
                      />
                      Sign Out
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/signin">
                <div
                  className={buttonVariants({
                    size: 'sm',
                  })}
                >
                  Sign In
                  <span className="sr-only">Sign In</span>
                </div>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </div>
  )
}
