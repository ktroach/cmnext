import { type SidebarNavItem } from "@/types"

export interface CreatorConfigProps {
  sidebarNav: SidebarNavItem[]
}

export type CreatorConfigType = CreatorConfigProps

export const CreatorConfig: CreatorConfigType = {
    sidebarNav: [
        {
          title: "Dashboard",
          href: "/",
          icon: "chart",
          items: [],
        },      
        {
          title: "Pages",
          href: "/pages",
          icon: "placeholder",
          items: [],
        },    
        {
          title: "Blogs",
          href: "/blogs",
          icon: "edit",
          items: [],
        },
        {
          title: "Settings",
          href: "/settings",
          icon: "settings",
          items: [],
        }, 
      ],
}