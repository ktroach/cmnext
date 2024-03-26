import { type Metadata } from 'next'
import { redirect } from 'next/navigation'
import { env } from '@/env.mjs'
import { currentUser } from '@clerk/nextjs/server'
import { AddBlogPostForm } from '@/components/publisher/add-blog-post'
import { Block } from '@/components/containers/block'
import { getFrontendBaseUrl } from '@/lib/url'

export const metadata: Metadata = {
  metadataBase: new URL(getFrontendBaseUrl()),
  title: 'Create Blog',
  description: 'Create a new blog post',
}

export default async function PublisherNewBlog({ params }: any) {
  const user = await currentUser()
  if (!user) redirect('/')

  return (
    <Block variant="sidebar">
      <p>Sub: {params.sub} - Publisher - Create New Blog Post</p>
      <AddBlogPostForm />
    </Block>
  )
}
