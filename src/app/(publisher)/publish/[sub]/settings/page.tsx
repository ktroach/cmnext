import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'
import { Header } from '@/components/layouts/header'
import { Block } from '@/components/containers/block'
import { getFrontendBaseUrl } from '@/lib/url'
import { verifySubRefAccess } from '@/lib/queries'

export const metadata: Metadata = {
  metadataBase: new URL(getFrontendBaseUrl()),
  title: 'Account Settings',
  description: 'Manage your Account Settings',
}

export default async function AccountSettings({ params }: any) {
  const curUser = await currentUser()
  if (!curUser) redirect('/')
  const subRef = params?.sub ? params.sub : null
  const hasAccess = await verifySubRefAccess(curUser, subRef)
  if (!hasAccess) redirect('/')

  return (
    <Block variant="sidebar">
      <Header
        title="Account Settings"
        description="Manage your Account Settings"
        size="sm"
      />
      <div className="w-full overflow-hidden">
      
      </div>
    </Block>
  )
}
