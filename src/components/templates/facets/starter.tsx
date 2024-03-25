'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Block } from '@/components/containers/block'
import { Button } from '@/components/ui/button'
import { ContentSection } from '@/components/containers/content-section'
import { Wavy } from '@/components/animations/wavy'
import { TextGenerator } from '@/components/animations/text-generator'
import { DynamicNavMenu, MenuItemType } from '@/components/templates/dynamic-navmenu'

// TODO: pass in this data props from the server component. this data will be stored in the db at the subsite account level
export interface StarterTemplateProps {
  line: string
  words: string
  waves: any
  leftAction: any // TODO: use explicit type
  rightAction: any // TODO: use explicit type
  sections: any // TODO: use explicit type and sections will be stored in the database
  menuConfig: MenuItemType[]
}

// TODO: This Starter Template facet will be used later. This is just a spike.
export default function StarterTemplate({
  line,
  words,
  waves,
  leftAction,
  rightAction,
  sections,
  menuConfig, 
}: StarterTemplateProps) {
  const [active, setActive] = useState<string | null>(null)
  const menuItems = menuConfig ? menuConfig : []

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
        content:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | React.PromiseLikeOfReactNode
          | null
          | undefined
      }) => (
        <ContentSection
          title={section.title}
          description={section.description}
          href={section.href}
          linkText={section.linkText}
          className="pt-8 md:pt-10 lg:pt-12"
        >
          {section.content}
        </ContentSection>
      )
    )
  }

  return (
    <>
      <div className="h-[60rem] relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
        <DynamicNavMenu
          className="top-2"
          menuItems={menuItems}
          active={active}
          setActive={setActive}
        />
        <h1 className="mt-[-150px] md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          {line}
        </h1>
        <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 text-center">
          <TextGenerator className="mt-5" words={words} />
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10 z-40">
            <Wavy
              animationTimeoutMs={4000}
              backgroundFill="transparent"
              blur={0.0}
              className="max-w-4xl mt-[-15px] "
              colors={waves}
              waveOpacity={0.015}
              waveWidth={2}
            >
              <Button asChild>
                <Link href={leftAction.href} className="mx-[5px]">
                  {leftAction.title}
                  <span className="sr-only">{leftAction.title}</span>
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={rightAction.href}>
                  {rightAction.title}
                  <span className="sr-only">{rightAction.title}</span>
                </Link>
              </Button>
            </Wavy>
          </div>
        </section>
      </div>
      <Block>{sections ? <BuildSections /> : <></>}</Block>
    </>
  )
}
