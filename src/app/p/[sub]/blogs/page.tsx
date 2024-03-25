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

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Blogs",
  description: "Explore the latest updates",
}

export default function BlogPage({ params }: any) {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => dayjs(b.date).unix() - dayjs(a.date).unix())

    const getPostUrl = (postSlug: string) => {
      const baseUrl = getFrontendBaseUrl()
      const subRef = params?.sub ? params.sub : '' 
      return `${baseUrl}/p/${subRef}${postSlug}`
    }

  return (
    <Block className="md:pb-10 my-20">
      <Header
        title="Blogs"
        description="Explore the latest News and Updates"
      />
      <Separator className="mb-2.5" />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post, i) => (
          <Link key={post.slug} href={getPostUrl(post.slug)}>
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
                  {formatDate(post.date)}
                </p>
              ) : null}
            </article>
          </Link>
        ))}
      </div>
    </Block>
  )
}
