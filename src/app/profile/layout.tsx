import { redirect } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'
import { PublisherNavConfig } from '@/config/publisher-config'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sidebar } from '@/components/layouts/sidebar'
import { SiteFooter } from '@/components/layouts/site-footer'
import { SiteHeader } from '@/components/layouts/site-header'
import { getSubsiteBySignInIdentifierQuery } from '@/lib/queries'

interface PublisherLayoutProps {
  children: React.ReactNode
}

export default async function PublisherLayout({ children }: PublisherLayoutProps) {
  const curUser = await currentUser()
  if (!curUser) redirect('/signin')
  const signInId = curUser && curUser?.username ? curUser.username : undefined
  const userSubSite: any = await getSubsiteBySignInIdentifierQuery(signInId, signInId)
  const subRef: any = userSubSite?.subRef ? userSubSite.subRef : undefined

  return (
    <div className="flex min-h-screen flex-col">
      profile
      <SiteHeader user={curUser} subRef={subRef} />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <ScrollArea className="py-6 pr-6 lg:py-8">
            <Sidebar items={PublisherNavConfig.sidebarNav} />
          </ScrollArea>
        </aside>
        <main className="flex w-full flex-col overflow-hidden">{children}</main>
      </div>
      <SiteFooter />
    </div>
  )
}
