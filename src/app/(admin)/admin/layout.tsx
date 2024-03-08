// Admin Layout
import { redirect } from 'next/navigation'
import { currentUser } from '@clerk/nextjs'

import { creatorConfig } from '@/config/creator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sidebar } from '@/components/layouts/sidebar'
import { SiteFooter } from '@/components/layouts/site-footer'
import { SiteHeader } from '@/components/layouts/site-header'

interface CreatorLayoutProps {
  children: React.ReactNode
}

export default async function AdminLayout({ children }: CreatorLayoutProps) {
  const user = await currentUser()

  // Using Clerk Auth SDK redirect unauthorized users
  // TODO: Uncomment before committing to branch  
  // if (!user) {
  //   redirect('/signin')
  // }

  // TODO: Fetch the User from the database and redirect if the user is not in the ADMIN role
  // if (!fetchedUser.role !== "ADMIN") {
  //   redirect("/signin")
  // }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <ScrollArea className="py-6 pr-6 lg:py-8">
            <Sidebar items={creatorConfig.sidebarNav} />
          </ScrollArea>
        </aside>
        <main className="flex w-full flex-col overflow-hidden">{children}</main>
      </div>
      <SiteFooter />
    </div>
  )
}
