import * as React from 'react'
import Link from 'next/link'
import { Block } from '@/components/containers/block'
import { Button } from '@/components/ui/button'
import { ContentSection } from '@/components/containers/content-section'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function IndexPage() {
  return (
    <div>
      <Block className="max-w-6xl">
        <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 py-24 text-center md:py-32">
          <h1 className="text-balance font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Content Management made easy again.
          </h1>
          <p className="max-w-[42rem] text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Build sites, build blogs, build your digital dreams without paywalls
            and other hassles
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
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
          </div>
        </section>
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
    </div>
  )
}
