import * as React from 'react'
import Link from 'next/link'
import { Block } from '@/components/containers/block'
import { Button } from '@/components/ui/button'
import { ContentSection } from '@/components/containers/content-section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Sparkles } from '@/components/animations/sparkles'
import { Wavy } from '@/components/animations/wavy'
import { TextGenerator } from '@/components/animations/text-generator'

export default function IndexPage() {
  return (
    <>
      <div className="h-[40rem] relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <Sparkles
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#38bdf8"
            speed={1.5}
          />
        </div>

        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          Content Management Made Easy
        </h1>

        <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 text-center">
          <TextGenerator
            className="mt-5"
            words="Build sites, build blogs, build your digital dreams without paywalls and the pain"
          />

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10 z-40">
            <Wavy
              className="max-w-4xl mt-10"
              blur={0.0}
              backgroundFill="transparent"
              waveOpacity={0.015}
            >
              <Button asChild>
                <Link href="/demo">
                  View Demo
                  <span className="sr-only">View Demo</span>
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/dashboard/sites">
                  Get Started
                  <span className="sr-only">Get Started</span>
                </Link>
              </Button>
            </Wavy>
          </div>
        </section>
      </div>
      <Block>
        <ContentSection
          title="Featured Blogs"
          description="Explore blogs from around the world"
          href="/blogs"
          linkText="View all Blogs"
          className="pt-8 md:pt-10 lg:pt-12"
        >
          <Link href={`/blogs/slug`}>
            <span className="sr-only">title</span>
            <Card className="relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent transition-colors hover:bg-muted/50">
              <CardHeader>
                <div className="grid size-11 place-items-center rounded-full border-2">
                  {/* <category.icon className="size-5" aria-hidden="true" /> */}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-1.5">
                <CardTitle className="capitalize">title</CardTitle>
                <React.Suspense
                  fallback={<Skeleton className="h-4 w-20" />}
                ></React.Suspense>
              </CardContent>
            </Card>
          </Link>
          <Link href={`/blogs/slug`}>
            <span className="sr-only">title</span>
            <Card className="relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent transition-colors hover:bg-muted/50">
              <CardHeader>
                <div className="grid size-11 place-items-center rounded-full border-2">
                  {/* <category.icon className="size-5" aria-hidden="true" /> */}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-1.5">
                <CardTitle className="capitalize">title</CardTitle>
                <React.Suspense
                  fallback={<Skeleton className="h-4 w-20" />}
                ></React.Suspense>
              </CardContent>
            </Card>
          </Link>
          <Link href={`/blogs/slug`}>
            <span className="sr-only">title</span>
            <Card className="relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent transition-colors hover:bg-muted/50">
              <CardHeader>
                <div className="grid size-11 place-items-center rounded-full border-2">
                  {/* <category.icon className="size-5" aria-hidden="true" /> */}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-1.5">
                <CardTitle className="capitalize">title</CardTitle>
                <React.Suspense
                  fallback={<Skeleton className="h-4 w-20" />}
                ></React.Suspense>
              </CardContent>
            </Card>
          </Link>
          <Link href={`/blogs/slug`}>
            <span className="sr-only">title</span>
            <Card className="relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent transition-colors hover:bg-muted/50">
              <CardHeader>
                <div className="grid size-11 place-items-center rounded-full border-2">
                  {/* <category.icon className="size-5" aria-hidden="true" /> */}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-1.5">
                <CardTitle className="capitalize">title</CardTitle>
                <React.Suspense
                  fallback={<Skeleton className="h-4 w-20" />}
                ></React.Suspense>
              </CardContent>
            </Card>
          </Link>
        </ContentSection>
        <ContentSection
          title="Featured Sites"
          description="Explore sites from around the world"
          href="/sites"
          linkText="View all Sites"
          className="py-8 md:py-10 lg:py-12"
        >
          <Link href={`/blogs/slug`}>
            <span className="sr-only">title</span>
            <Card className="relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent transition-colors hover:bg-muted/50">
              <CardHeader>
                <div className="grid size-11 place-items-center rounded-full border-2">
                  {/* <category.icon className="size-5" aria-hidden="true" /> */}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-1.5">
                <CardTitle className="capitalize">title</CardTitle>
                <React.Suspense
                  fallback={<Skeleton className="h-4 w-20" />}
                ></React.Suspense>
              </CardContent>
            </Card>
          </Link>
          <Link href={`/blogs/slug`}>
            <span className="sr-only">title</span>
            <Card className="relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent transition-colors hover:bg-muted/50">
              <CardHeader>
                <div className="grid size-11 place-items-center rounded-full border-2">
                  {/* <category.icon className="size-5" aria-hidden="true" /> */}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-1.5">
                <CardTitle className="capitalize">title</CardTitle>
                <React.Suspense
                  fallback={<Skeleton className="h-4 w-20" />}
                ></React.Suspense>
              </CardContent>
            </Card>
          </Link>
          <Link href={`/blogs/slug`}>
            <span className="sr-only">title</span>
            <Card className="relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent transition-colors hover:bg-muted/50">
              <CardHeader>
                <div className="grid size-11 place-items-center rounded-full border-2">
                  {/* <category.icon className="size-5" aria-hidden="true" /> */}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-1.5">
                <CardTitle className="capitalize">title</CardTitle>
                <React.Suspense
                  fallback={<Skeleton className="h-4 w-20" />}
                ></React.Suspense>
              </CardContent>
            </Card>
          </Link>
          <Link href={`/blogs/slug`}>
            <span className="sr-only">title</span>
            <Card className="relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent transition-colors hover:bg-muted/50">
              <CardHeader>
                <div className="grid size-11 place-items-center rounded-full border-2">
                  {/* <category.icon className="size-5" aria-hidden="true" /> */}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-1.5">
                <CardTitle className="capitalize">title</CardTitle>
                <React.Suspense
                  fallback={<Skeleton className="h-4 w-20" />}
                ></React.Suspense>
              </CardContent>
            </Card>
          </Link>
        </ContentSection>
      </Block>
    </>
  )
}
