import { type Icons } from '@/styles/icons'
import { type userPrivateMetadataSchema } from "@/validations/auth"
import { type z } from "zod"

export type UserRole = z.infer<typeof userPrivateMetadataSchema.shape.role>

export interface NavItem {
  title: string
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

export type SidebarNavItem = NavItemWithChildren

export type MainNavItem = NavItemWithOptionalChildren

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
