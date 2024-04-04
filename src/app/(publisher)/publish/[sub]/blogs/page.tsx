import type { Metadata } from 'next'
import { Header } from '@/components/layouts/header'
import { Block } from '@/components/containers/block'
import { AddBlogPostForm } from '@/components/publisher/add-blog-post'
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
      <AddBlogPostForm />
    </Block>
  )
}
