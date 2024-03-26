import type { Metadata } from 'next';
import { env } from '@/env.mjs';
import { metaConfig } from "@/config/static";
import { getFrontendBaseUrl } from '@/lib/url'

export const metadata: Metadata = {
    metadataBase: new URL(getFrontendBaseUrl()),
    title: {
        default: metaConfig.name,
        template: `%s - ${metaConfig.name}`,
    },
    description: metaConfig.description,
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
