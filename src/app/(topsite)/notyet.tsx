import * as React from 'react'
import Link from 'next/link'
import { Block } from '@/components/containers/block'
import { Button } from '@/components/ui/button'
import { ContentSection } from '@/components/containers/content-section'
import { Starfield } from '@/components/animations/starfield'
import { Wavy } from '@/components/animations/wavy'
import { TextGenerator } from '@/components/animations/text-generator'
import {
  FeaturedPosts,
  FeaturedSites,
} from '@/components/templates/featured-content'
import { FloatingNavTemplate } from '@/components/templates/floating-nav'

export default function IndexPage() {
  return (
    <>
      <div className="h-[40rem] relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
        <FloatingNavTemplate className="top-2" />
        <div className="w-full absolute inset-0 h-screen">
          <Starfield
            id="starfield-2"
            background="transparent"
            minSize={1.6}
            maxSize={2.4}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#ffffff"
            speed={0.00}
          ></Starfield>
        </div>

        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          Taking your Content to the Next level
        </h1>

        <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 text-center">
          <TextGenerator
            className="mt-5"
            words="Create Blogs, Create Sites, Create your Dreams"
          />

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10 z-40">
            <Wavy
              animationTimeoutMs={4000}
              backgroundFill="transparent"            
              blur={0.0}
              className="max-w-4xl mt-10"
              colors={[
                "#38bdf8",
                "#818cf8",
                "#c084fc",
                "#e879f9",
                "#22d3ee",
              ]}
              waveOpacity={0.015}
              waveWidth={2}
            >
              <Button asChild>
                <Link href="/product-features" className="mx-[5px]">
                  Learn More...
                  <span className="sr-only">Learn More...</span>
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/get-started">
                  Start Writing
                  <span className="sr-only">Start Creating!</span>
                </Link>
              </Button>
            </Wavy>
          </div>
        </section>
      </div>
      <Block>
        <ContentSection
          title="Featured Blogs"
          description="Explore blogs from featured writers"
          href="/topblogs"
          linkText="View all Blogs"
          className="pt-8 md:pt-10 lg:pt-12"
        >
          <FeaturedPosts takeLimit={4} />
        </ContentSection>
        <ContentSection
          title="Featured Sites"
          description="Explore sites from featured content creators"
          href="/topsites"
          linkText="View all Sites"
          className="py-8 md:py-10 lg:py-12"
        >
          <FeaturedSites takeLimit={4} />
        </ContentSection>
        <ContentSection
          title="Featured Writers"
          description="Explore the works from the top content creators"
          href="/topcreators"
          linkText="View All Writers"
          className="py-8 md:py-10 lg:py-12"
        >
          <FeaturedSites takeLimit={8} />
        </ContentSection>
      </Block>
    </>
  )
}
