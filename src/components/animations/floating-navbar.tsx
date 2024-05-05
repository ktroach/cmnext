'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import useLinkUrl from '@/hooks/use-link-url'

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}

export const MenuItem = ({
  setActive,
  active,
  item,
  href,
  children,
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  href: string
  children?: any
}) => {
  const hasChildren =
    children && children?.props?.children
      ? children.props.children?.length > 0
      : false
  const linkUrl = useLinkUrl(href)

  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {linkUrl && linkUrl?.href && (
          <Link href={linkUrl.href} legacyBehavior>
            {item}
          </Link>
        )}
      </motion.p>
      {hasChildren && active !== null && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={transition}
          >
            {active === item && (
              <div className="absolute top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2 -translate-y-[15%]  ">
                <motion.div
                  transition={transition}
                  layoutId="active"
                  className="dark:bg-[#09090b] bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.4] dark:border-white/[0.4] shadow-xl"
                >
                  <motion.div layout className="w-max h-full p-4">
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </div>
  )
}

// TODO: calcualate space-x-8 in nav className to be distributed and spaced evenly covering the full width
export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void
  children: React.ReactNode
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative border border-black/[0.4] dark:border-white/[0.4] rounded-full dark:bg-[#09090b] dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-8 px-8 py-6 "
    >
      {children}
    </nav>
  )
}

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black dark:bg-[#09090b] bg-white "
      title="todo: description..."
    >
      {children}
    </Link>
  )
}
