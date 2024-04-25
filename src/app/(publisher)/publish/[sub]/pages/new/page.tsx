import { type Metadata } from 'next'
import { redirect } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'
import { Header } from '@/components/layouts/header'
import { Block } from '@/components/containers/block'
import { AddEditContent } from '@/components/publisher/add-edit-content'
import { getFrontendBaseUrl } from '@/lib/url'
import { 
  verifySubRefAccess, 
  getUserSubsite
} from '@/lib/queries'


export const metadata: Metadata = {
  metadataBase: new URL(getFrontendBaseUrl()),
  title: 'Create New Page',
  description: 'Create a new page for this site',
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
        title="Create Site Page"
        description="Create a new site Page"
        size="sm"
      />
      <AddEditContent subsite={subsite} isNew={true} isPost={false} />
    </Block>
  )
}
