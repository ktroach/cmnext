'use client'

import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { RootConfig } from '@/config/root-config'

export default async function SiteFooter() {
  const currentYear = new Date().getFullYear()
  const copyrightDate = 2024 + (currentYear > 2024 ? `-${currentYear}` : '')
  const copyrightName = RootConfig.name

  const handleAvatarClick = () => {
    window.open('https://github.com/ktroach', '_blank')
  }

  return (
    <>
      <div className="text-sm text-neutral-500 dark:text-neutral-400 ">
        <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
          <div className="flex flex-col items-center  mx-auto w-full max-w-7xl gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
            <p>
              &copy; {copyrightDate} {copyrightName}
              {copyrightName.length && !copyrightName.endsWith('.')
                ? '.'
                : ''}{' '}
              All rights reserved.
            </p>
            <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
            <div className="flex xs:ml-2 sm:ml-2 md:ml-auto lg:ml-auto items-center">
              <div className="">Crafted by {RootConfig?.author}</div>
              <Link href="#" onClick={handleAvatarClick}>
                <Avatar className="ml-2 h-8 w-8">
                  <AvatarImage
                    src={RootConfig?.authorAvatar}
                    alt={RootConfig?.author}
                  />
                  <AvatarFallback>KT</AvatarFallback>
                </Avatar>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
