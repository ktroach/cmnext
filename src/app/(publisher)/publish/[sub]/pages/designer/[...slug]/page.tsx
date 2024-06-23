import { type Metadata } from 'next'
import { redirect } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'
import ContentDesignerContainer from '@/components/publisher/page-design'
import { getFrontendBaseUrl } from '@/lib/url'
import { 
  verifySubRefAccess, 
  getUserSubsite, 
  getPageBySlug, 
  getPageByTitle
} from '@/lib/queries'

export const metadata: Metadata = {
  metadataBase: new URL(getFrontendBaseUrl()),
  title: 'Content Designer',
  description: 'Content Designer',
}

export default async function PublisherPageDesigner({ params }: any) {
  const curUser = await currentUser()
  if (!curUser) redirect('/')
  const subRef = params?.sub ? params.sub : null
  const hasAccess = await verifySubRefAccess(curUser, subRef)
  if (!hasAccess) redirect('/')
  const subsite: any = await getUserSubsite(curUser, subRef)
  const subsiteId = subsite && subsite?.subsiteId ? subsite.subsiteId : undefined

  let parsedSubTree: any = null
  let page: any = null
  let pageId: any = null
  if (subsiteId) {
    page = await getPageByTitle('Home', subsiteId)
    pageId = page && page?.id ? page.id : undefined
    const pageDesignData: string = page && page?.layoutTemplate ? page.layoutTemplate : undefined
    if (pageDesignData) {
      parsedSubTree = JSON.parse(pageDesignData)
    }
  }  
  
  const slug: any = params?.slug ? `${params.slug.join('/')}` : null
  let pageSlug: string = slug ? slug : ''
  if (pageSlug.indexOf('/') === -1) {
    pageSlug = `/${pageSlug}`
  }  

  const authorId: number | null = subsite && subsite?.userId ? subsite.userId : null
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
        <ContentDesignerContainer subTree={parsedSubTree} pageId={pageId} authorId={authorId} subsiteId={subsiteId} />
    </>
  )
}
