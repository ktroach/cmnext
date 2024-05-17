'use client'

import React, { startTransition, useState } from 'react'
import Link from 'next/link'
import { Block } from '@/components/containers/block'
import { Button } from '@/components/ui/button'
import { Icons } from '@/styles/icons'
import { ContentSection } from '@/components/containers/content-section'
import { Wavy } from '@/components/animations/wavy'
import { TextGenerator } from '@/components/animations/text-generator'
import {
  DynamicNavMenu,
  MenuItemType,
} from '@/components/templates/dynamic-navmenu'
import { getFrontendBaseUrl } from '@/lib/url'
import { api } from '@/trpc/client'

export interface StarterTemplateProps {
  userName: any
  line: string
  words: string
  waves: any
  leftAction: any
  rightAction: any
  sections: any
  menuConfig: MenuItemType[]
}

// TODO: This Starter Template facet will be used later. This is just a spike.
export default function StarterTemplate({
  userName,
  line,
  words,
  waves,
  leftAction,
  rightAction,
  sections,
  menuConfig,
}: StarterTemplateProps) {
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false)
  const [active, setActive] = useState<string | null>(null)
  const menuItems = menuConfig ? menuConfig : []
  const baseUrl = getFrontendBaseUrl()

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

  let leftActionHref: string = leftAction?.href
  let rightActionHref: string = rightAction?.href
  let leftActionTitle: string = leftAction?.title
  let rightActionTitle: string = rightAction?.title
  if (userName) {
    const { isLoading, data: resultData } = api.users.getUserSubSite.useQuery({
      username: userName,
    })
    if (!isLoading && resultData) {
      console.log('resultData >>> ', resultData)
      
      const subRef: string | undefined = resultData?.subsiteRef
        ? resultData.subsiteRef
        : undefined
      if (subRef) {
        leftActionHref = `${baseUrl}/p/${subRef}`
        rightActionHref = `${baseUrl}/publish/${subRef}`
        leftActionTitle = 'Take me to my Site'
        rightActionTitle = 'Take me to my Dashboard'
      }
    }
  }

  const handleLeftAction = () => {
    if (!leftActionHref) {
      return 
    }
    if (leftActionHref === `${baseUrl}`) {
      return 
    }
    setIsRedirecting(true)
  }

  const handleRightAction = () => {
    if (!rightActionHref) {
      return 
    }
    if (rightActionHref === `${baseUrl}`) {
      return 
    }
    setIsRedirecting(true)
  }

  return (
    <>
      <div className="h-[55rem] relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
        <DynamicNavMenu
          className="top-2"
          menuItems={menuItems}
          active={active}
          setActive={setActive}
        />

        <h1 className="mt-[-130px]  font-bold text-5xl xl:text-6xl text-center  text-black/[0.85] dark:text-white/[0.95] relative z-20">
          {line}
        </h1>
        <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 text-center">
          <TextGenerator
            className="mt-5  text-black/[0.85] dark:text-white/[0.95]"
            words={words}
          />
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
                <Link
                  href={leftActionHref}
                  className="mx-[5px]"
                  onClick={handleLeftAction}
                >
                  {leftActionTitle}
                  <span className="sr-only">{leftActionTitle}</span>
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={rightActionHref} onClick={handleRightAction}>
                  {rightActionTitle}
                  <span className="sr-only">{rightActionTitle}</span>
                </Link>
              </Button>
            </Wavy>
          </div>
        </section>
        {isRedirecting ? (
          <>
            <Icons.spinner
              className="mt-5 mr-2 h-10 w-10 animate-spin"
              aria-hidden="true"
            />
          </>
        ) : (
          <></>
        )}
      </div>
      {/* <Block>{sections ? <BuildSections /> : <></>}</Block> */}
    </>
  )
}
