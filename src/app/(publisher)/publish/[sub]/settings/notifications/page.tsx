import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'
import { Header } from '@/components/layouts/header'
import { Block } from '@/components/containers/block'
import { getFrontendBaseUrl } from '@/lib/url'
import { verifySubRefAccess } from '@/lib/queries'

export const metadata: Metadata = {
  metadataBase: new URL(getFrontendBaseUrl()),
  title: 'Notification Settings',
  description: 'Manage your Notification Settings',
}

export default async function NotificationSettings({ params }: any) {
  const curUser = await currentUser()
  if (!curUser) redirect('/')
  const subRef = params?.sub ? params.sub : null
  const hasAccess = await verifySubRefAccess(curUser, subRef)
  if (!hasAccess) redirect('/')

  return (
    <Block variant="sidebar">
      <Header
        title="Notification Settings"
        description="Manage your Notification Settings"
        size="sm"
      />
      <div className="w-full overflow-hidden">
        Nothing Yet
      </div>
    </Block>
  )
}
