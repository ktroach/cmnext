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
import { CreateNewBlogAction } from '@/components/publisher/create-blog-action'
import { SiteContentList } from '@/components/publisher/site-content-list'
import { getFrontendBaseUrl } from '@/lib/url'
import {
  verifySubRefAccess,
  getUserSubsite,
  getAllBlogsByPublisher,
} from '@/lib/queries'

export const metadata: Metadata = {
  metadataBase: new URL(getFrontendBaseUrl()),
  title: 'Site Blogs',
  description: 'Manage your Site Blogs',
}

export default async function PublisherManageBlogs({ params }: any) {
  const curUser = await currentUser()
  if (!curUser) redirect('/')
  const subRef = params?.sub ? params.sub : null
  const hasAccess = await verifySubRefAccess(curUser, subRef)
  if (!hasAccess) redirect('/')
  const subsite: any = await getUserSubsite(curUser, subRef)
  console.log('allBlogsByPublisher >>> subsite >> ', subsite)
  const authorId: number | null =
    subsite && subsite?.userId ? subsite.userId : null
  const subsiteId: number | null =
    subsite && subsite?.subsiteId ? subsite.subsiteId : null
  console.log('allBlogsByPublisher >>> authorId >> ', authorId)
  console.log('allBlogsByPublisher >>> subsiteId >> ', subsiteId)
  const allBlogsByPublisher = await getAllBlogsByPublisher(authorId, subsiteId)
  console.log('allBlogsByPublisher >>> ', allBlogsByPublisher)
  let mostRecentPosts: any = []
  mostRecentPosts = allBlogsByPublisher ? allBlogsByPublisher.slice(0, 4) : []
  const baseUrl: string = getFrontendBaseUrl()

  return (
    <Block variant="sidebar">
      <Header
        title="Site Blogs"
        description="Manage your Site's Blogs"
        size="sm"
      />
      <div className="w-full overflow-hidden">
        <CreateNewBlogAction subRef={subRef} />
        <h2 className="py-4 font-bold">Recent Blogs</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mostRecentPosts.map((blog: any, index: any) => {
            const linkUrl: string = `${baseUrl}/publish/${subRef}/blogs/edit/${blog?.slug}`
            return (
              <Link key={blog?.slug ?? index} href={linkUrl}>
                <article className="flex flex-col space-y-2.5">
                  <AspectRatio ratio={2}>
                    {blog?.coverImage ? (
                      <Image
                        src={blog.coverImage}
                        alt={blog?.title}
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
                  <h5 className="line-clamp-1 font-semibold">{blog.title}</h5>
                  {/* <p className="line-clamp-2 text-sm text-muted-foreground">
                    {blog.description}
                  </p> */}
                  {blog?.createdAt ? (
                    <p className="text-sm text-muted-foreground">
                      {humanizeDate(blog.createdAt)}
                    </p>
                  ) : null}
                </article>
              </Link>
            )
          })}
        </div>
        <h2 className="py-4 font-bold">All Site Blogs</h2>
        {allBlogsByPublisher ? (
          <SiteContentList
            publisherContentData={allBlogsByPublisher}
            contentDataType="blogs"
            subsiteRef={subRef}
          />
        ) : (
          <></>
        )}
      </div>
    </Block>
  )
}
