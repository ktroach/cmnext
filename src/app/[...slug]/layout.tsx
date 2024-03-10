import { currentUser } from '@clerk/nextjs'
import { SiteFooter } from '@/components/layouts/site-footer'
import { SiteHeader } from '@/components/layouts/site-header'

interface CreatorLayoutProps {
  children: React.ReactNode
}

export default async function PagePageLayout({ children }: CreatorLayoutProps) {
  const user = await currentUser()

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <div className="container flex-1 ">
        <main className="flex w-full flex-col overflow-hidden">{children}</main>
      </div>
      <SiteFooter />
    </div>
  )
}
