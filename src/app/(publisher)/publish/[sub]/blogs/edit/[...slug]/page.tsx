import { type Metadata } from 'next'
import { redirect } from 'next/navigation'
import { env } from '@/env.mjs'
import { currentUser } from '@clerk/nextjs/server'
import { EditBlogPostForm } from '@/components/publisher/edit-blog-post'
import { Block } from '@/components/containers/block'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Edit Blog',
  description: 'Edit a new blog post',
}

export default async function PublisherEditBlog({ params }: any) {
  const user = await currentUser()
  if (!user) redirect('/')

  return (
    <Block variant="sidebar">
      <p>Sub: {params.sub} - Publisher - Create Edit Blog Post</p>
      <EditBlogPostForm />
    </Block>
  )
}
