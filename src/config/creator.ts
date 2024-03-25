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
          title: "Blog Posts",
          href: "/blogs",
          icon: "edit",
          items: [],
        },
        {
          title: "Images & Files",
          href: "/media",
          icon: "upload",
          items: [],
        }, 
        {
          title: "Subscriptions",
          href: "/subscriptions",
          icon: "dollarSign",
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