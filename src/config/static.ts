export type MetaConfig = typeof metaConfig;
import type { FooterItem, MainNavItem, SidebarNavItem } from "@/types"

export const metaConfig = {
  name: 'cmnext',
  description: 'The "Next" Content Management solution',
};

export const staticConfig = {
    name: "",
    description: "",
    ogImage: "",
    mainNav: [
      {
        title: "Examples",
        items: [
          {
            title: "Fonts",
            href: "/fonts",
            description: "Examples showing fonts.",
            items: [],
          },
        ],
      },
    ] satisfies MainNavItem[],
    footerNav: [
      {
        title: "Help",
        items: [
          {
            title: "About",
            href: "/about",
            external: false,
          },
          {
            title: "Contact",
            href: "/contact",
            external: false,
          },
          {
            title: "Terms",
            href: "/terms",
            external: false,
          },
          {
            title: "Privacy",
            href: "/privacy",
            external: false,
          },
        ],
      },
    ] satisfies FooterItem[],
  }
  
