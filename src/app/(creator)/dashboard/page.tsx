import { Block } from '@/components/containers/block'
import PostForm from '@/components/forms/post-form'

export default function IndexPage() {
return (
    <Block as="div" className="gap-12">
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28"
      >
        Creator Dashboard
      </section>
        <PostForm />
    </Block>
  )
}