import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { Header } from '@/components/layouts/header'
import { Block } from '@/components/containers/block'
import { currentUser } from '@clerk/nextjs/server'
import { getFrontendBaseUrl } from '@/lib/url'

export const metadata: Metadata = {
  metadataBase: new URL(getFrontendBaseUrl()),
  title: 'Publisher Dashboard',
  description: 'Publish content to your site',
}

export default async function PublisherDashboard({ params }: any) {
  const user = await currentUser()

  if (!user) {
    redirect('/signin')
  }

  // Get Owner by SubRef
  // cltyljhuw0003sd3lubvh6ap5
  // Only the owner of the site can access this content

  // TODO: TRPC call to get subsite user 
  // Then compare currentuser (clerk session) with the subref site user 

  // const getUserBySubRef = (subRef: string) => {
  //   let user = null



  //   if (!subRef) {
  //     return null
  //   }

  //   return user
  // }

  // const email = user && user?.emailAddresses ?
  //   user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
  //       ?.emailAddress ?? ''
  //   : ''

  // const userName = user && user?.username ? user.username : ''

  return (
    <Block variant="sidebar">
      <Header
        title="Publisher Dashboard"
        description="Build and Publish Content for your Site"
        size="default"
      />
      {/* <div className="w-full overflow-hidden">
        Sub: {params.sub} - Publisher Dashboard
        <p>{email}</p>
        <p>{userName}</p>
        Here are some shortcuts to get you going... [Show Cards]
      </div> */}
    </Block>
  )
}
