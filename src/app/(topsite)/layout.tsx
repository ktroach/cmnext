import * as React from 'react'
import SiteFooter from '@/components/layouts/site-footer'

interface TopSiteLayoutProps {
  params: any
  children: React.ReactNode
}

export default async function TopSiteLayout({
  params,
  children,
}: TopSiteLayoutProps) {
  return (
    <>
      <div className=" min-h-screen w-full flex">
        <div className="flex flex-col flex-1 space-x-5 mr-10">
          <div className="h-full">{children}</div>
          <SiteFooter />
        </div>
      </div>
    </>
  )
}
