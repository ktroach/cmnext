import type { Metadata } from 'next'
import { Icons } from '@/styles/icons'
import { Header } from '@/components/layouts/header'
import { Block } from '@/components/containers/block'
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Link from "next/link"
import { getFrontendBaseUrl } from '@/lib/url'
import { allPosts } from "contentlayer/generated"
import dayjs from "dayjs"

export const metadata: Metadata = {
  metadataBase: new URL(getFrontendBaseUrl()),
}

export default async function PublisherManageBlogs({ params }: any) {
  // console.log('params: ', params)
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => dayjs(b.date).unix() - dayjs(a.date).unix())

  return (
    <Block>
      <Header
        title="Manage Blog Posts"
        description="Manage the Blog Post for your Site"
        size="sm"
      />
      <Separator className="mb-2.5" />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post, i) => (
          <Link key={post.slug} href={post.slug}>
            <article className="flex flex-col space-y-2.5">
              <AspectRatio ratio={4 / 4}>
                  {post.image ? (
                    <Image
                      src={post.image}
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
              {post.date ? (
                <p className="text-sm text-muted-foreground">
                 post.date
                </p>
              ) : null}
            </article>
          </Link>
        ))}
      </div>
    </Block>
  )
}
