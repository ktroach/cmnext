import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { env } from '@/env.mjs'
import { Header } from '@/components/layouts/header'
import { Block } from '@/components/containers/block'
import { currentUser } from '@clerk/nextjs'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Publisher Dashboard',
  description: 'Publish content to your site',
}

export default async function PublisherDashboard({ params }: any) {
  const user = await currentUser()

  if (!user) {
    redirect('/signin')
  }

  const email = user && user?.emailAddresses ?
    user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
        ?.emailAddress ?? ''
    : ''

  const userName = user && user?.username ? user.username : ''

  return (
    <Block variant="sidebar">
      <Header
        title="Start Creating a Site"
        description="Use the tools in the sidebar to add content to your site"
        size="default"
      />
      <div className="w-full overflow-hidden">
        Sub: {params.sub} - Publisher Dashboard
        <p>{email}</p>
        <p>{userName}</p>
        Here are some shortcuts to get you going... [Show Cards]
      </div>
    </Block>
  )
}
