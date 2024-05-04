import { currentUser } from '@clerk/nextjs/server'
import { PublisherNavConfig } from '@/config/publisher-config'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sidebar } from '@/components/layouts/sidebar'
import { SiteFooter } from '@/components/layouts/site-footer'
import { SiteHeader } from '@/components/layouts/site-header'

interface PublisherLayoutProps {
  params: any
  children: React.ReactNode
}

export default async function AdminLayout({
  params,
  children,
}: PublisherLayoutProps) {
  const user = await currentUser()
  const subRef = params?.sub
  console.log('subRef: ', subRef)
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader user={user} subRef={subRef} />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <ScrollArea className="py-6 pr-6 lg:py-8">
            <Sidebar subRef={subRef} items={PublisherNavConfig.sidebarNav}  /> 
          </ScrollArea>
        </aside>
        <main className="flex w-full flex-col overflow-hidden">{children}</main>
      </div>
      <SiteFooter />
    </div>
  )
}
