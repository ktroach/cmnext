"use client"

import * as React from "react"
import Link from "next/link"
import type { MainNavItem } from "@/types"
import { useUser } from "@clerk/nextjs"
import { RootConfig } from "@/config/root-config"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Icons } from "@/styles/icons"

interface MainNavProps {
  items?: any
}

export function MainNav({ items }: MainNavProps) {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return (<>Loading...</>); 
  }

  return (
    <div className="hidden gap-6 lg:flex">
      <Link
        aria-label="Home"
        href="/"
        className="hidden items-center lg:flex"
      >
        <Icons.nextjs className="h-6 w-6" aria-hidden="true" />
        <span className="hidden font-bold lg:inline-block mx-2">
          {RootConfig?.name}
        </span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
       <NavigationMenuItem key="blog-nav">
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "h-auto")}
            >
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>   
       </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={String(href)}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
