import Link from 'next/link'
import FooterMenu from '@/components/layouts/footer-menu'
import { RootConfig } from '@/config/root-config'
import LogoSquare from '@/components/logo/logo-square'
import { Suspense } from 'react'

export default async function SiteFooter() {
  const currentYear = new Date().getFullYear()
  const copyrightDate = 2024 + (currentYear > 2024 ? `-${currentYear}` : '')
  const skeleton =
    'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700'
  const copyrightName = RootConfig.name
  const menu: any = RootConfig.footerNav
  return (
    <div className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
        <div>
          <Link
            className="flex items-center gap-2 text-black md:pt-1 dark:text-white"
            href="/"
          >
            <LogoSquare size="sm" iconKey="nextjs" />
            <span className="uppercase">{RootConfig.name}</span>
          </Link>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
        <div className="md:ml-auto">
          <a
            className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white"
            aria-label="Signup"
            href="/signup"
          >
            <span className="px-3">
              <LogoSquare size="sm" />
            </span>
            <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
            <span className="px-3">GitHub</span>
          </a>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.')
              ? '.'
              : ''}{' '}
            All rights reserved.
          </p>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          <p className="md:ml-auto">
            <a
              href="https://github.com/ktroach"
              className="text-black dark:text-white"
            >
              Crafted by ktroach
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
