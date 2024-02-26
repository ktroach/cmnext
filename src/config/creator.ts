import { type SidebarNavItem, MainNavItem } from "@/types"

export interface CreatorConfig {
    name: string, 
    description: string, 
    mainNav: MainNavItem[],
    sidebarNav: SidebarNavItem[]
  }
  
export const creatorConfig: CreatorConfig = {
    name: "",
    description: "",  
    mainNav: [
      {
        title: "Dashboard",
        items: [
          {
            title: "Views",
            href: "/views",
            description: "Page Views",
            items: [],
          },
        ],
      },
    ] satisfies MainNavItem[],  
    sidebarNav: [
      {
        title: "Dashboard",
        href: "/admin",
        icon: "chart",
        items: [],
      },      
      {
        title: "Pages",
        href: "/admin/pages",
        icon: "placeholder",
        items: [],
      },    
      {
        title: "Blogs",
        href: "/admin/blog",
        icon: "edit",
        items: [],
      },
      {
        title: "Media",
        href: "/admin/storage",
        icon: "upload",
        items: [],
      }, 
      {
        title: "Sites",
        href: "/admin/sites",
        icon: "terminal",
        items: [],
      }, 
      {
        title: "Settings",
        href: "/admin/settings",
        icon: "settings",
        items: [],
      }, 
    ],  
  }
  