import { getFrontendBaseUrl } from '@/lib/url'

export const BaseUrl = getFrontendBaseUrl()

export const RootConfig = {
  name: 'CMNexT',
  description: 'Taking your Content to the Next level',
  pitch: 'Create Blogs, Create Sites, Create your Dreams',
  waveAnimationColors: ['#38bfff', '#818cf8', '#c084fc', '#e879f9', '#22d3ee'],
  leftAction: { title: 'Learn More...', href: '' },
  rightAction: { title: 'Start Creating', href: '/signup' },
  featureBlogsLimit: 4,
  featureSitesLimit: 4,
  logoImage: '',
  emailProviderUrl: 'https://react.email/api/send/test',
  defaultCoverImage: 'https://picsum.photos/seed/picsum/200/120',
  signoutOptions: {
    signOutOptionText: 'Sign Out',
  },
  statusConfigs: {
    draft: {
      statusColor: 'text-blue-600',
    },
    published: {
      statusColor: 'text-green-600',
    },
    review: {
      statusColor: 'text-yellow-600',
    },
    pending: {
      statusColor: 'text-gray-600',
    },
  },
  sections: [
    {
      title: 'Blogs',
      description: 'Featured Blog Posts',
      href: `${BaseUrl}/featured-blogs`, //'http://localhost:3000/blogs',
      linkText: 'View all Blogs',
    },
    {
      title: 'Sites',
      description: 'Featured Sites',
      href: `${BaseUrl}/featured-sites`, //'http://localhost:3000/sites',
      linkText: 'View all Sites',
    },
  ],
  mainNav: [
    {
      label: 'Products',
      href: '/products',
      type: 'group',
      items: [
        {
          label: 'Create a Site',
          href: '/products',
          type: 'navlink',
          items: [],
        },
        {
          label: 'Create a Blog',
          href: '/products',
          type: 'navlink',
          items: [],
        },
      ],
    },
    {
      label: 'Features',
      href: '/features',
      type: 'group',
      items: [
        {
          label: 'Overview',
          href: '/features',
          type: 'navlink',
          items: [],
        },
        {
          label: 'Generative AI',
          href: '/features',
          type: 'navlink',
          items: [],
        },
      ],
    },
    {
      label: 'Resources',
      href: '/resources',
      type: 'group',
      items: [],
    },
    {
      label: 'Plans',
      href: '/plans',
      type: 'group',
      items: [],
    },
    {
      label: 'Login',
      href: '/signin',
      type: 'group',
      items: [],
    },
    {
      label: 'Get Started',
      href: '/get-started',
      type: 'group',
      items: [],
    },
  ],
  footerNav: [
    {
      title: 'Twitter',
      path: 'https://x.com/enigmaticobject',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/ktroach/cmnext',
    },
    {
      title: 'Discord',
      path: 'https://discord.com/',
    },
  ],
}
