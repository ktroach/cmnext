'use client'

import React, { useState, StrictMode } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Block } from '@/components/containers/block'
import { Button } from '@/components/ui/button'
import { ContentSection } from '@/components/containers/content-section'
import { TextGenerator } from '@/components/animations/text-generator'
import { ColorWaves } from '@/components/animations/color-waves'

import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import parse, { Element } from 'html-react-parser'
import type { DOMNode, HTMLReactParserOptions } from 'html-react-parser'
import markdownit from 'markdown-it'

import { api } from '@/trpc/client'
import { Skeleton } from '@/components/ui/skeleton'

export interface SubsiteHomeProps {
  subRef: any
  line: string
  words: string
  waves: any
  leftAction: any
  rightAction: any
  sections: any
  markupTest: string
  markdownTest: string
}

export default function SubsiteHomeTemplate({
  subRef,
  line,
  words,
  waves,
  leftAction,
  rightAction,
  sections,
  markupTest,
  markdownTest,
}: SubsiteHomeProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const markdownParser = markdownit()
  const markdownToRender: string = markdownParser.render(markdownTest)

  const [active, setActive] = useState<string | null>(null)

  const BuildSections = () => {
    if (!sections) {
      return
    }
    return sections.map(
      (section: {
        title: string
        description: string | undefined
        href: string
        linkText: string | undefined
        content: any
      }) => (
        <ContentSection
          title={section.title}
          description={section.description}
          href={section.href}
          linkText={section.linkText}
          className="mb-10"
        >
          {section.content}
        </ContentSection>
      )
    )
  }

  let leftActionHref: string = leftAction?.href
  let rightActionHref: string = rightAction?.href
  let leftActionTitle: string = leftAction?.title
  let rightActionTitle: string = rightAction?.title
  if (subRef) {
    const { isLoading, data: resultData } = api.subsites.getByRef.useQuery({
      subsiteRef: subRef,
    })
    if (!isLoading && resultData) {
      console.log('resultData >>> ', resultData)
      if (subRef) {
        leftActionHref = `/p/${subRef}/${leftActionHref}`
        rightActionHref = `/p/${subRef}/${rightActionHref}`
      }
    }
  }

  const options: HTMLReactParserOptions = {
    replace(domNode: DOMNode) {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.class === 'remove'
      ) {
        return <></>
      }
    },
  }

  return (
    <div className='mt-5'>
      <div className="w-full h-[500px] flex flex-col items-center justify-center overflow-hidden text-center  ">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent transition-colors ">
                    <CardHeader>
                      <div className="grid place-items-center">
                        <React.Suspense
                          fallback={
                            <Skeleton className="h-[1000px] w-[800px]" />
                          }
                        >
                          <Image
                            className="inset-0 rounded-xl"
                            src={`https://picsum.photos/id/${233+index}/800/1000`}
                            alt="image"
                            objectFit="fill"
                            width={800}
                            height={1000}
                          />
                        </React.Suspense>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

<>This is a Block</>
      <div className="h-[55rem] relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="mt-[-130px] md:text-7xl text-3xl lg:text-6xl font-bold text-center  text-black/[0.85] dark:text-white/[0.95] relative z-20">
          {line}
        </h1>
        <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 text-center">
          {/* <TextGenerator
            className="mt-5  text-black/[0.85] dark:text-white/[0.95]"
            pitch={[words]}
          /> */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10 z-40">
            <ColorWaves
              animationTimeoutMs={4000}
              backgroundFill="transparent"
              blur={0.0}
              className="max-w-4xl mt-[-15px] "
              colors={waves}
              waveOpacity={0.015}
              waveWidth={2}
            >
              {/* <Button asChild>
                <Link href={leftActionHref} className="mx-[5px]">
                  {leftActionTitle}
                  <span className="sr-only">{leftActionTitle}</span>
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={rightActionHref}>
                  {rightActionTitle}
                  <span className="sr-only">{rightActionTitle}</span>
                </Link>
              </Button> */}
            </ColorWaves>
          </div>
        </section>
      </div>
<>This is the End of the Block</>      

      <Block className="relative top-[-360px]">
        {sections ? <BuildSections /> : <></>}
      </Block>

      {/* <Block>
        <StrictMode>{parse(markupTest, options)}</StrictMode>
      </Block>

      <Block>
        <ContentSection
          title="lorem ipsum"
          description="yada yada yada yada"
          showButton={true}
          href="/p/qwdqwedqwd"
          linkText="link"
          className=""
        >
          <Block>
            <StrictMode>{parse(markupTest, options)}</StrictMode>
          </Block>
        </ContentSection>
      </Block>

      <Block>
        <ContentSection
          title="lorem ipsum"
          description="yada yada yada yada"
          showButton={true}
          href="/p/qwdqwedqwd"
          linkText="link"
          className=""
        >
          <Block>
            <StrictMode>{parse(markdownToRender, options)}</StrictMode>
          </Block>
        </ContentSection>
      </Block>

      <Block className="">
        <StrictMode>{parse(markdownToRender, options)}</StrictMode>
      </Block> */}
    </div>
  )
}
