import { notFound } from 'next/navigation'
import { allAuthors, allPosts } from 'contentlayer/generated'
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
// import { env } from '@/env.mjs'
import { formatDate } from '@/lib/dates'
import { cn } from '@/lib/utils'
import { absoluteUrl, getFrontendBaseUrl } from '@/lib/url'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Icons } from '@/styles/icons'
import { Mdx } from '@/components/mdx'
import { Block } from '@/components/containers/block'

interface PostPageProps {
  params: {
    slug: string[]
  }
}

// eslint-disable-next-line @typescript-eslint/require-await
// async function getPostFromParams(params: PostPageProps['params']) {
//   const slug = params?.slug?.join('/')
//   const post = allPosts.find((post) => post.slugAsParams === slug)

//   if (!post) {
//     null
//   }

//   return post
// }

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug
  // console.log("slug >>> ", slug)  
  const postPage = allPosts.find((post) => post.slugAsParams === slug)

  if (!postPage) {
    console.log("page not found")
    null
  }

  return postPage
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  const baseUrl = getFrontendBaseUrl()
  // const url = env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${baseUrl}/api/og`)
  ogUrl.searchParams.set('title', post.title)
  ogUrl.searchParams.set('type', 'Blog Post')
  ogUrl.searchParams.set('mode', 'dark')

  return {
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

// export async function generateStaticParams(): Promise<any> {
//   return allPosts.map((post) => ({
//     slug: post.slugAsParams.split('/'),
//   }))
// }

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)
  const baseUrl = getFrontendBaseUrl()

  if (!post) {
    notFound()
  }

  const authors = post.authors.map((author) =>
    allAuthors.find((a) => a.title === author?.replace(/\r$/, ''))
  )

  const subRef = params?.sub ? params.sub : ''
  const allPostsUrl = `${baseUrl}/p/${subRef}/blogs`

  return (
    <Block as="article" variant="markdown">
      <Link
        href={allPostsUrl}
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-[-200px] top-14 hidden xl:inline-flex'
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        See all Posts
      </Link>
      <div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          {post.date && (
            <time dateTime={post.date} className="block">
              Published on {formatDate(post.date)}
            </time>
          )}
          {post.date ? <div>•</div> : null}
          <div>{post.readingTime}min</div>
        </div>
        <h1 className="mt-2 inline-block text-4xl font-bold leading-tight lg:text-5xl">
          {post.title}
        </h1>
        {authors?.length ? (
          <div className="mt-4 flex space-x-4">
            {authors.map((author) =>
              author ? (
                <Link
                  key={author._id}
                  href={author?.url ?? baseUrl}
                  className="flex items-center space-x-2 text-sm"
                >
                  <Image
                    src={author.avatar}
                    alt={author.title}
                    width={42}
                    height={42}
                    className="rounded-full bg-white"
                  />
                  <div className="flex-1 text-left leading-tight">
                    <p className="font-medium">{author.title}</p>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        ) : null}
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      <Mdx code={post.body.code} />
      <Separator className="my-10" />
      <div className="flex justify-center py-5">
        <Link href={allPostsUrl} className={cn(buttonVariants({ variant: 'ghost' }))}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          See all Posts
          <span className="sr-only">See all Posts</span>
        </Link>
      </div>
    </Block>
  )
}
