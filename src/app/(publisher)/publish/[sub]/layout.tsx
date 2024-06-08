import { redirect } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'
import { PublisherNavConfig } from '@/config/publisher-config'
import { type MenuItem, Sidebar } from '@/components/layouts/sidebar'
import { verifySubRefAccess } from '@/lib/queries'

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
  const publisherUrl = subRef ? `/publish/${subRef}` : ''
  let accountInitials: string | undefined = ''
  let accountEmail: string | undefined = ''
  if (curUser) {
    accountInitials = `${curUser?.firstName?.charAt(0) ?? ''} ${
      curUser?.lastName?.charAt(0) ?? curUser?.username
   }`
   accountEmail =
    curUser?.emailAddresses?.find((e) => e.id === curUser.primaryEmailAddressId)
        ?.emailAddress ?? ''
  }  

  const account: any = {
    initials: accountInitials, 
    email: accountEmail, 
    imageUrl: curUser.imageUrl, 
    username: curUser.username, 
    firstName: curUser.firstName, 
    lastName: curUser.lastName
  }

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
          <Sidebar routes={routes} subRef={subRef} account={account} />
        </div>
        <div className="flex flex-col flex-1 space-x-5 mr-5 ml-5">
          <div className='h-full'>
            {children}
          </div>
        </div>
      </div>
  )  
}
