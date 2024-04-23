import { type Metadata } from 'next'
import { redirect } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'
import { Header } from '@/components/layouts/header'
import { AddBlogPostForm } from '@/components/publisher/add-blog-post'
import { Block } from '@/components/containers/block'
import { getFrontendBaseUrl } from '@/lib/url'
import { 
  verifySubRefAccess, 
  getUserSubsite
} from '@/lib/queries'

export const metadata: Metadata = {
  metadataBase: new URL(getFrontendBaseUrl()),
  title: 'Create Blog',
  description: 'Create a new blog post',
}

export default async function PublisherNewBlog({ params }: any) {
  const curUser = await currentUser()
  if (!curUser) redirect('/')
  const subRef = params?.sub ? params.sub : null
  const hasAccess = await verifySubRefAccess(curUser, subRef)
  if (!hasAccess) redirect('/')
  const subsite: any = await getUserSubsite(curUser, subRef)

  return (
    <Block>
      <Header
        title="Add Blog Post"
        description="Create/Add a new Blog Post to your site!"
        size="sm"
      />
      <AddBlogPostForm subsite={subsite} />
    </Block>
  )
}
