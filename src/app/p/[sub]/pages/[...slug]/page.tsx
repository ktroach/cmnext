import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Block } from '@/components/containers/block'
import { allPages } from 'contentlayer/generated'
import { Mdx } from '@/components/mdx'

interface PageProps {
  params: {
    sub: string, 
    slug: string[] 
  }
}

async function getPageFromSlug(params: PageProps['params']) {
  const slug = params?.slug?.join('/')
  const subRef = params?.sub ? params.sub : ''
  const slugKey = `${subRef}/${slug}`
  const page = allPages.find((page) => page.slugAsParams === slugKey)

  if (!page) {
    console.log("page not found")
    null
  }

  return page
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromSlug(params)

  if (!page) {
    console.log("page not found")
    return {}
  }

  return {
    title: page.title,
    description: page.description,
  }
}

export async function generateStaticParams(): Promise<PageProps['params'][]> {
  // @ts-ignore 
  return allPages.map((page) => ({
    slug: page.slugAsParams.split('/'),
  }))
}

export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromSlug(params)
  if (!page) {
    console.log("page not found: ", params)
    notFound()
  }

  return (
    <Block>
      <div className="w-full overflow-hidden flex flex-col items-center justify-center">
        <article className="py-6 prose dark:prose-invert">
          <h1>{page.title}</h1>
          {page.description && <p className="text-xl">{page.description}</p>}
          <hr />
          <Mdx code={page.body.code} />
        </article>
      </div>
    </Block>
  )
}






