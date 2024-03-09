import { Block } from '@/components/containers/block'

interface SubsitePageProps {
  params: {
    slug: string[]
  }
}

export default function SubsiteHome({params}: SubsitePageProps) {
  const slug = params?.slug?.join("/")
  // const subsiteId = Number(params.subsiteId);
  const siteTitle = `Subsite ${slug}`

  return (
    <Block as="div" className="gap-12">
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28"
      >
        {siteTitle}
      </section>
    </Block>
  )
}
