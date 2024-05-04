import type { Metadata } from 'next'
import { RootConfig as rootConfig } from '@/config/root-config'
import { getFrontendBaseUrl } from '@/lib/url'

export const metadata: Metadata = {
    metadataBase: new URL(getFrontendBaseUrl()),
    title: {
        default: rootConfig?.name,
        template: `%s - ${rootConfig?.name}`,
    },
    description: rootConfig?.description,
    keywords: [
        'Next.js',
        'React',
        'Tailwind CSS',
        'Server Components',
        'Server Actions',
    ],
    authors: [
        {
            name: 'ktroach',
            url: 'https://github.com/ktroach',
        },
    ],
    creator: 'ktroach',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
    icons: {
        icon: '/favicon.ico',
    },
};
