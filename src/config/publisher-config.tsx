import React from 'react'
import { Icons } from '@/styles/icons'

export const PublisherNavConfig: any = {
    sidebarNav: [
        {
          label: "Dashboard",
          path: "/",
          icon: <Icons.chart className="size-4" />,
          children: [],
        },      
        {
          label: "Pages",
          path: "/pages",
          icon: <Icons.edit className="size-4" />,
          children: [],
        },    
        {
          label: "Blogs",
          path: "/blogs",
          icon: <Icons.fileimage className="size-4" />,
          children: [],
        },
        {
          label: "Storage",
          path: "/storage",
          icon: <Icons.video className="size-4" />,
          children: [],
        },        
        {
          label: "Settings",
          path: "/settings",
          icon: <Icons.settings className="size-4" />,
          children: [
            {
              label: "Profile", 
              path: "/settings/profile",
              icon: <Icons.user className="size-4" />,
              children: [],
            },
            {
              label: "Site Settings", 
              path: "/settings/site",
              icon: <Icons.wrench className="size-4" />,
              children: [],
            },            
            {
              label: "Notifications", 
              path: "/settings/notifications",
              icon: <Icons.message className="size-4" />, 
              children: [],
            },            
            {
              label: "Privacy", 
              path: "/settings/privacy",
              icon: <Icons.view className="size-4" />, 
              children: [],
            }
        ],
        }, 
      ],
}