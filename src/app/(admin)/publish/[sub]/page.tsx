import type { Metadata } from 'next'
import { env } from '@/env.mjs'
import { Header } from '@/components/layouts/header'
import { Block } from '@/components/containers/block'
import { currentUser } from '@clerk/nextjs'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Creator Subsite',
  description: 'Create your Site',
}

export default async function AdminPage() {
  const user = await currentUser()

  const email =
    user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
      ?.emailAddress ?? ''

  const firstName = user?.firstName ? user.firstName : ''

  return (
    <Block variant="sidebar">
      <Header
        title="Start Creating a Site"
        description="Use the tools in the sidebar to add content to your site"
        size="default"
      />

      <div className="w-full overflow-hidden">
        Here are some shortcuts to get you going...
      </div>
    </Block>
  )
}
