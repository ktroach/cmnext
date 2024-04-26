import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'
import { humanizeDate } from '@/lib/dates'
import { Header } from '@/components/layouts/header'
import { Block } from '@/components/containers/block'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Icons } from '@/styles/icons'
import { CreateNewPageAction } from '@/components/publisher/create-page-action'
import { PublisherListPages } from '@/components/publisher/site-pages-list'
import { getFrontendBaseUrl } from '@/lib/url'
import { 
  verifySubRefAccess, 
  getUserSubsite, 
  getAllPagesByPublisher, 
} from '@/lib/queries'

export const metadata: Metadata = {
  metadataBase: new URL(getFrontendBaseUrl()),
  title: 'Site Pages',
  description: 'Manage your Site Pages',
}

export default async function PublisherManagePages({ params }: any) {
  const curUser = await currentUser()
  if (!curUser) redirect('/')
  const subRef = params?.sub ? params.sub : null
  const hasAccess = await verifySubRefAccess(curUser, subRef)
  if (!hasAccess) redirect('/')
  const subsite: any = await getUserSubsite(curUser, subRef)
  console.log('allPagesByPublisher >>> subsite >> ', subsite)
  const authorId: number | null = subsite && subsite?.userId? subsite.userId : null
  const subsiteId: number | null = subsite && subsite?.subsiteId? subsite.subsiteId : null
  console.log('allPagesByPublisher >>> authorId >> ', authorId)
  console.log('allPagesByPublisher >>> subsiteId >> ', subsiteId)
  const allPagesByPublisher = await getAllPagesByPublisher(authorId, subsiteId)
  console.log('allPagesByPublisher >>> ', allPagesByPublisher)

  let mostRecentPosts: any = []
  mostRecentPosts = allPagesByPublisher ? allPagesByPublisher.slice(0, 4) : []

  return (
    <Block variant="sidebar">
      <Header
        title="Site Pages"
        description="Manage your Site's Pages"
        size="sm"
      />
      <div className="w-full overflow-hidden">
        <CreateNewPageAction subRef={subRef} />
        <h2 className="py-4 font-bold">Recent Pages</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mostRecentPosts.map((page: any, index: any) => (
            <Link key={page.slug} href={page.slug}>
              <article className="flex flex-col space-y-2.5">
                <AspectRatio ratio={2}>
                  {page?.coverImage ? (
                    <Image
                      src={page.coverImage}
                      alt={page?.title}
                      fill
                      sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, (min-width: 640px) 224px, 100vw"
                      className="rounded-lg object-cover"
                      priority={index <= 1}
                    />
                  ) : (
                    <div
                      aria-label="Placeholder"
                      role="img"
                      aria-roledescription="placeholder"
                      className="flex h-full w-full items-center justify-center rounded-lg bg-secondary"
                    >
                      <Icons.placeholder
                        className="h-9 w-9 text-muted-foreground"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </AspectRatio>
                <h5 className="line-clamp-1 font-semibold">{page.title}</h5>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {page.description}
                </p>
                {page?.createdAt ? (
                  <p className="text-sm text-muted-foreground">
                    {humanizeDate(page.createdAt)}
                  </p>
                ) : null}
              </article>
            </Link>
          ))}
        </div>
        <h2 className="py-4 font-bold">All Site Pages</h2>
        {allPagesByPublisher ? <PublisherListPages allPosts={allPagesByPublisher} /> : <></>}
      </div>
    </Block>
  )
}
