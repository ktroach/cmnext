import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'
import { Header } from '@/components/layouts/header'
import { Block } from '@/components/containers/block'
import { getFrontendBaseUrl } from '@/lib/url'
import { verifySubRefAccess } from '@/lib/queries'
import { PublisherProfile } from '@/components/publisher/publisher-profile'
import { humanAndFormattedDateHelper } from '@/lib/dates'

export const metadata: Metadata = {
  metadataBase: new URL(getFrontendBaseUrl()),
  title: 'Profile Settings',
  description: 'Manage your Profile Settings',
}

export default async function ProfileSettings({ params }: any) {
  const curUser = await currentUser()
  if (!curUser) redirect('/')
  const subRef = params?.sub ? params.sub : null
  const hasAccess = await verifySubRefAccess(curUser, subRef)
  if (!hasAccess) redirect('/')

  const userEmail =
    curUser && curUser?.emailAddresses
      ? curUser?.emailAddresses?.find(
          (e) => e.id === curUser.primaryEmailAddressId
        )?.emailAddress ?? ''
      : ''

  const createdAt = curUser?.createdAt ? new Date(curUser.createdAt) : null
  const formattedCreatedAt = createdAt ? humanAndFormattedDateHelper(createdAt, 'MM-DD-YYYY') : ''
  const lastSignInAt = curUser?.lastSignInAt ? new Date(curUser.lastSignInAt) : null
  const formattedLastSignInAtAt = createdAt ? humanAndFormattedDateHelper(lastSignInAt, 'MM-DD-YYYY hh:mm:ss A') : ''

  const profileData: any = {
    userName: curUser?.username,
    userEmail: userEmail,
    userAvatar: curUser?.imageUrl,
    createdAt: formattedCreatedAt,
    lastSignInAt: formattedLastSignInAtAt,
  }

  return (
    <Block variant="sidebar">
      <Header
        title="Profile Settings"
        description="Manage your Profile Settings"
        size="sm"
      />
      <div className="w-full overflow-hidden">
        <PublisherProfile subRef={params?.sub} profileData={profileData} />
      </div>
    </Block>
  )
}
