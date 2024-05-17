import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'
import { Header } from '@/components/layouts/header'
import { Block } from '@/components/containers/block'
import { getFrontendBaseUrl } from '@/lib/url'
import { getSubsiteDetails, verifySubRefAccess } from '@/lib/queries'
import { SiteSettings } from '@/components/publisher/site-settings'

export const metadata: Metadata = {
  metadataBase: new URL(getFrontendBaseUrl()),
  title: 'Site Settings',
  description: 'Manage your Sites Settings',
}

export default async function ProfileSettings({ params }: any) {
  const curUser = await currentUser()
  if (!curUser) redirect('/')
  const subRef = params?.sub ? params.sub : null
  const hasAccess = await verifySubRefAccess(curUser, subRef)
  if (!hasAccess) redirect('/')
  const subsiteDetailsData: any = await getSubsiteDetails(curUser, subRef)

  return (
    <Block variant="sidebar">
      <Header
        title="Site Settings"
        description="Manage your Sites Settings"
        size="sm"
      />
      <div className="w-full overflow-hidden">
        <SiteSettings
          subRef={params?.sub}
          subSiteDetails={subsiteDetailsData}
        />
      </div>
    </Block>
  )
}
