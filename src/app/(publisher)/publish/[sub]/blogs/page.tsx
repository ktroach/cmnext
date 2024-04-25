import type { Metadata } from 'next'
import { Header } from '@/components/layouts/header'
import { Block } from '@/components/containers/block'
import { AddEditContent } from '@/components/publisher/add-edit-content'
import { getFrontendBaseUrl } from '@/lib/url'

export const metadata: Metadata = {
  metadataBase: new URL(getFrontendBaseUrl()),
}

export default async function PublisherManageBlogs({ params }: any) {
  return (
    <Block>
      <Header
        title="Add Blog Post"
        description="Create/Add a new Blog Post to your site!"
        size="sm"
      />
      <AddEditContent />
    </Block>
  )
}
