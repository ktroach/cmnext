import { type Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { env } from "@/env.mjs"
import { allPosts } from "contentlayer/generated"
import dayjs from "dayjs"
import { formatDate } from "@/lib/dates"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/layouts/header"
import { Icons } from "@/styles/icons"
import { Block } from "@/components/containers/block"
import { getFrontendBaseUrl } from "@/lib/url"
import { getAllBlogsBySubRef } from '@/lib/queries'

export const metadata: Metadata = {
  metadataBase: new URL(getFrontendBaseUrl()),
  title: "Blogs",
  description: "Explore the latest updates",
}

export default async function BlogPage({ params }: any) {
  const subRef = params?.sub ? params.sub : null
  const blogsData = await getAllBlogsBySubRef(subRef)

  const getPostUrl = (postSlug: string) => {
    const baseUrl = getFrontendBaseUrl()
    return `${baseUrl}/p/${subRef}/blogs/${postSlug}`
  }

  return (
    <Block className="md:pb-10 my-20">
      <Header
        title="Blogs"
        description="Explore the latest News and Updates"
      />
      <Separator className="mb-2.5" />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {blogsData.map((post: any, i: number) => (
          <Link key={post.slug} href={getPostUrl(post.slug)}>
            <article className="flex flex-col space-y-2.5">
              <AspectRatio ratio={4 / 4}>
                {post?.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, (min-width: 640px) 224px, 100vw"
                    className="rounded-lg object-cover"
                    priority={i <= 1}
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
              <h2 className="line-clamp-1 text-xl font-semibold">
                {post.title}
              </h2>
              <p className="line-clamp-2 text-muted-foreground">
                {post.description}
              </p>
              {post.publishedAt ? (
                <p className="text-sm text-muted-foreground">
                  {formatDate(post.publishedAt)}
                </p>
              ) : null}
            </article>
          </Link>
        ))}
      </div>
    </Block>
  )
}
