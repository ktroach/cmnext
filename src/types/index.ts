import { type Icons } from '@/styles/icons'
import { type userPrivateMetadataSchema } from "@/validations/auth"
import { type z } from "zod"

export type UserRole = z.infer<typeof userPrivateMetadataSchema.shape.role>

export interface NavItem {
  name: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
  description?: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export type MainNavItem = NavItemWithOptionalChildren

export interface SideNavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
  description?: string
}

export interface SideNavItemWithChildren extends SideNavItem {
  items: SideNavItemWithChildren[]
}

export interface SideNavItemWithOptionalChildren extends SideNavItem {
  items?: SideNavItemWithChildren[]
}

export type SidebarNavItem = SideNavItemWithChildren

export interface FooterItem {
  title: string
  items: {
    title: string
    href: string
    external?: boolean
  }[]
}

export interface FeaturedItemTypes {
  url: string
  title: string
  icon?: keyof typeof Icons
  iconSize?: string
}

export interface FeaturedItem extends FeaturedItemTypes {
  items: FeaturedItemTypes[]
}

export type FeaturedItemType = FeaturedItem

export interface UserSignUp  {
  username: string | null;
  emailAddress: string | null;  
  createdSessionId: string | null;
  createdUserId: string | null;  
}

export type UserSignUpType = UserSignUp

export type Blog = {
  _id: string
  authors: string[]
  title: string
  description?: string | undefined
  date: string
  published: boolean 
  readingTime: number
  slug: string
  slugAsParams: string
}


