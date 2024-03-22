import { type Metadata } from 'next'
import { redirect } from 'next/navigation'
import { env } from '@/env.mjs'
import { currentUser } from '@clerk/nextjs'
import { Block } from '@/components/containers/block'
import { AddNewSitePageForm } from '@/components/publisher/add-new-site-page'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Create New Page',
  description: 'Create a new page for this site',
}

export default async function PublisherNewBlog({ params }: any) {
  const user = await currentUser()
  if (!user) redirect('/')

  return (
    <Block variant="sidebar">
      {/* <p>Sub: {params.sub} - Publisher - Create New Site Page</p> */}
      <AddNewSitePageForm />
    </Block>
  )
}
