import { type Metadata } from 'next'
import { redirect } from 'next/navigation'
import { env } from '@/env.mjs'
import { currentUser } from '@clerk/nextjs/server'
import { EditSitePageForm } from '@/components/publisher/edit-site-page'
import { Block } from '@/components/containers/block'
import { getFrontendBaseUrl } from '@/lib/url'

export const metadata: Metadata = {
  metadataBase: new URL(getFrontendBaseUrl()),
  title: 'Edit Site Page',
  description: 'Edit site page',
}

export default async function PublisherEditBlog({ params }: any) {
  const user = await currentUser()
  if (!user) redirect('/')

  return (
    <Block variant="sidebar">
      <p>Sub: {params.sub} - Publisher - Edit Site Page</p>
      <EditSitePageForm />
    </Block>
  )
}
