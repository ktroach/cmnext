import { type SidebarNavItem } from "@/types"

export interface PublisherNavConfigProps {
  sidebarNav: SidebarNavItem[]
}

export type PublisherNavConfigType = PublisherNavConfigProps

export const PublisherNavConfig: PublisherNavConfigType = {
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
          items: [
            {
              title: "Profile", 
              href: "/profile",
              icon: "user", 
              items: [],
            },
            {
              title: "Site Settings", 
              href: "/site",
              icon: "store", 
              items: [],
            },            
            {
              title: "Notifications", 
              href: "/notifications",
              icon: "message", 
              items: [],
            },            
            {
              title: "Privacy", 
              href: "/privacy",
              icon: "view", 
              items: [],
            }
        ],
        }, 
      ],
}