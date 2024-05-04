'use client'

import React, { useState, StrictMode } from 'react'
import parse, { Element } from 'html-react-parser'
import type { DOMNode, HTMLReactParserOptions } from 'html-react-parser'
import markdownit from 'markdown-it'

import Link from 'next/link'
import { Block } from '@/components/containers/block'
import { Button } from '@/components/ui/button'
import { ContentSection } from '@/components/containers/content-section'
import { Wavy } from '@/components/animations/wavy'
import { TextGenerator } from '@/components/animations/text-generator'
import { api } from '@/trpc/client'

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
          className=""
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
    <>
      <Wavy
        animationTimeoutMs={20000}
        backgroundFill="transparent"
        blur={0.5}
        className="max-w-4xl mt-[-400px]"
        colors={waves}
        waveOpacity={0.007}
        waveWidth={2}
      ></Wavy>

      <div className="h-[30rem] mt-[50px] relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          {line}
        </h1>
        <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 text-center">
          <TextGenerator className="mt-5 mb-5" words={words} />
          <div className="flex flex-wrap items-center justify-center gap-4 z-40">
            <Button asChild>
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
            </Button>
          </div>
        </section>
      </div>
      {/* <Block>{sections ? <BuildSections /> : <></>}</Block> */}

      <Block>
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

      <Block className=''>
            <StrictMode>{parse(markdownToRender, options)}</StrictMode>
        </Block>

    </>
  )
}
