import { redirect } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'
import { PublisherNavConfig } from '@/config/publisher-config'
import { type MenuItem, Sidebar } from '@/components/layouts/sidebar'
import { SiteFooter } from '@/components/layouts/site-footer'
import { SiteHeader } from '@/components/layouts/site-header'
import { getSubsiteDetails, verifySubRefAccess } from '@/lib/queries'

interface PublisherLayoutProps {
  params: any
  children: React.ReactNode
}

export default async function AdminLayout({
  params,
  children,
}: PublisherLayoutProps) {
  const curUser = await currentUser()
  if (!curUser) redirect('/')
  const subRef = params?.sub ? params.sub : null
  const hasAccess = await verifySubRefAccess(curUser, subRef)
  if (!hasAccess) redirect('/')
  const subsiteData: any = await getSubsiteDetails(curUser, subRef)
  const publisherUrl = subRef ? `/publish/${subRef}` : ''

  const buildSidebar = (menus: any[]): MenuItem[] => {
    return menus.map(menu => {
      return {
        path: `${publisherUrl}${menu.path}`,
        label: menu.label,
        icon: menu.icon,
        children: menu?.children ? buildSidebar(menu.children) : []
      }
    }
    )
  }
  
  const routes = buildSidebar(PublisherNavConfig.sidebarNav)

  return (
      <div className=" min-h-screen w-full flex">
        <div className="sticky bg-background top-0 h-screen z-[49]">
          <Sidebar routes={routes} />
        </div>
        <div className="flex flex-col flex-1 space-x-5 mr-10">
          <div className="sticky bg-background top-0 z-[49]">
            <SiteHeader user={curUser} subRef={subRef} subsite={subsiteData} />
          </div>
          <div className='h-full'>
            {children}
          </div>
          <SiteFooter />
        </div>
      </div>
  )  

}
