'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Icons } from '@/styles/icons'
import { usePathname } from 'next/navigation'

export function Sidebar(props: any) {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const publisherBaseUrl = props?.subRef
    ? `/publish/${props?.subRef}`
    : undefined

  console.log('publisherBaseUrl: ', publisherBaseUrl)
  console.log('pathname: ', pathname)

  if (!props?.items?.length) return null

  return (
    <>
      {/* Hamburger button */}
      <div className="flex w-full flex-col">
        <button
          className="block px-2 py-1 text-white-600 hover:text-white-800 focus:outline-none focus:text-white-800  lg:hidden "
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.293 5.293a1 1 0 011.414 0L12 10.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 5a1 1 0 100 2h14a1 1 0 100-2H4zm0 5a1 1 0 100 2h14a1 1 0 100-2H4z"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className=" fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
          onClick={toggleSidebar}
        />
      )}

      <div className="flex w-full flex-col gap-2">
        {props?.items.map((item: any, index: any) => {
          const IconKey: string = item.icon ?? 'chevronLeft'
          /* @ts-ignore-next-line */
          const Icon = Icons[IconKey]
          const linkUrl =
            item?.href && publisherBaseUrl
              ? `${publisherBaseUrl}${item.href}`
              : ''
          return linkUrl ? (
            <Link
              key={index}
              href={linkUrl}
              target={item.external ? '_blank' : ''}
              rel={item.external ? 'noreferrer' : ''}
            >
              <>
                <span
                  className={cn(
                    'group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-muted hover:text-foreground',
                    (pathname === linkUrl)
                      ? 'bg-muted font-medium text-foreground'
                      : 'text-muted-foreground',
                    item.disabled && 'pointer-events-none opacity-60'
                  )}
                >
                  <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
                  <span>{item.title}</span>
                </span>
              </>
            </Link>
          ) : (
            <span
              key={index}
              className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
            >
              {item.title}
            </span>
          )
        })}
      </div>
    </>
  )
}
