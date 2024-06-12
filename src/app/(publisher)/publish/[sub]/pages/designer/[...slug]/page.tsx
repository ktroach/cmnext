import { type Metadata } from 'next'
import { redirect } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'
// import PageDesigner from '@/components/publisher/page-designer'
import PageDesign from '@/components/publisher/page-design'
import { getFrontendBaseUrl } from '@/lib/url'
import { 
  verifySubRefAccess, 
  getUserSubsite, 
  getPageBySlug, 
} from '@/lib/queries'

export const metadata: Metadata = {
  metadataBase: new URL(getFrontendBaseUrl()),
  title: 'Page Designer',
  description: 'Full-Width Page Designer',
}

export default async function PublisherPageDesigner({ params }: any) {
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
    <>
        <PageDesign />
    </>
  )
}
