import { type Metadata } from 'next'
import { redirect } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'
import { Header } from '@/components/layouts/header'
import { Block } from '@/components/containers/block'
import { AddEditContent } from '@/components/publisher/add-edit-content'
import { getFrontendBaseUrl } from '@/lib/url'
import { 
  verifySubRefAccess, 
  getUserSubsite, 
  getPageBySlug, 
} from '@/lib/queries'

export const metadata: Metadata = {
  metadataBase: new URL(getFrontendBaseUrl()),
  title: 'Edit Site Page',
  description: 'Edit site page',
}

export default async function PublisherEditPage({ params }: any) {
  const curUser = await currentUser()
  if (!curUser) redirect('/')
  const subRef = params?.sub ? params.sub : null
  const hasAccess = await verifySubRefAccess(curUser, subRef)
  if (!hasAccess) redirect('/')
  const subsite: any = await getUserSubsite(curUser, subRef)
  
  const slug: any = params?.slug ? `${params.slug.join('/')}` : null
  let pageSlug: string = slug ? slug : ''
  if (pageSlug.indexOf('/') === -1) {
    pageSlug = `/${pageSlug}`
  }  

  const authorId: number | null = subsite && subsite?.userId ? subsite.userId : null
  const subsiteId: number | null = subsite && subsite?.subsiteId ? subsite.subsiteId : null
  const pageResult: any = await getPageBySlug(pageSlug, authorId, subsiteId)
  const pageData: any = pageResult && pageResult.length > 0 ? pageResult[0] : null

  let editParams: any = null
  if (pageData) {
    editParams = {
      editData: pageData, 
    }
  }

  return (
    <Block>
      <Header
        title="Edit Site Page"
        description="Edit your Sites Page"
        size="sm"
      />
      <AddEditContent subsite={subsite} isNew={false} isPost={false} editParams={editParams} />
    </Block>
  )
}
