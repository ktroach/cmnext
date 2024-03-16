import type { FooterItem, MainNavItem, SidebarNavItem } from "@/types"
import { MenuItemType } from '@/components/templates/dynamic-navmenu'

export const RootConfig = {
    name: "CMNexT",
    description: "Taking your Content to the Next level",
    pitch: "Create Blogs, Create Sites, Create your Dreams",
    waveAnimationColors: ['#38bfff', '#818cf8', '#c084fc', '#e879f9', '#22d3ee'],
    leftAction: { title: 'Learn More...', href: '' }, 
    rightAction: { title: 'Start Creating', href: '' },
    featureBlogsLimit: 4,  
    featureSitesLimit: 4,  
    logoImage: "",
    sections:  [
        {
          title: 'Blogs',
          description: 'Featured Blog Posts',
          href: 'http://localhost:3000/blogs',
          linkText: 'View all Blogs',
        },
        {
          title: 'Sites',
          description: 'Featured Sites',
          href: 'http://localhost:3000/sites',
          linkText: 'View all Sites',
        },
      ],     
    mainNav: [
      {
        label: "Products",
        href: "/products",
        type: "group",
        items: [
          {
            label: "Create a Site",
            href: "/product-sites",
            type: "navlink",
            items: [],
          },
          {
            label: "Create a Blog",
            href: "/product-blog",
            type: "navlink",
            items: [],
          },
        ],
      }, 
      {
        label: "Features",
        href: "/features",
        type: "group",
        items: [
          {
            label: "Overview",
            href: "/features-overview",
            type: "navlink",
            items: [],
          },
          {
            label: "Generative AI",
            href: "/features-ai",
            type: "navlink",
            items: [],
          },          
        ],
      }, 
      {
        label: "Resources",
        href: "/resources",
        type: "group",
        items: [

        ],
      },    
      {
        label: "Plans & Pricing",
        href: "/pricing",
        type: "group",
        items: [
        ],
      },
      {
        label: "Login",
        href: "/signin",
        type: "group",
        items: [
        ],
      },
      {
        label: "Get Started",
        href: "/get-started",
        type: "group",
        items: [
        ],
      },                             
    ],
    footerNav: [
      {
        title: "Resources",
        items: [
          {
            title: "Docs",
            href: "/docs",
            external: false,
          },
          {
            title: "Blog",
            href: "/blog",
            external: false,
          },
          {
            title: "Terms of Service",
            href: "/terms",
            external: false,
          },        
          {
            title: "Content Policy",
            href: "/contentpolicy",
            external: false,
          },
          {
            title: "Privacy",
            href: "/privacy",
            external: false,
          },
        ],
      },
      {
        title: "Social",
        items: [
          {
            title: "Twitter",
            href: "",
            external: true,
          },
          {
            title: "GitHub",
            href: "",
            external: true,
          },
          {
            title: "Discord",
            href: "",
            external: true,
          },
        ],
      },
    ]
  }
  
