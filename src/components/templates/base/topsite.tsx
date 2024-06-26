'use client'

import React, { startTransition, useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icons } from '@/styles/icons'
import { ColorWaves } from '@/components/animations/color-waves'
import { TextGenerator } from '@/components/animations/text-generator'
import {
  DynamicNavMenu,
  MenuItemType,
} from '@/components/templates/dynamic-navmenu'
import { getFrontendBaseUrl } from '@/lib/url'
import { api } from '@/trpc/client'

export interface TopSiteTemplateProps {
  userName: any
  line: string
  pitches: any
  waves: any
  leftAction: any
  rightAction: any
  menuConfig: MenuItemType[]
}

export default function TopSiteTemplate({
  userName,
  line,
  pitches,
  waves,
  leftAction,
  rightAction,
  menuConfig,
}: TopSiteTemplateProps) {
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false)
  const [active, setActive] = useState<string | null>(null)
  const [pitchIndex, setPitchIndex] = useState(0)
  const menuItems = menuConfig ? menuConfig : []
  const baseUrl = getFrontendBaseUrl()

  useEffect(() => {
    let nextPitch  = 0
    const interval = setInterval(() => {
      setPitchIndex(nextPitch)
      nextPitch = ( pitchIndex + 1 )
      if (nextPitch > pitches.length) nextPitch = 0
    }, 5000)
    return () => clearInterval(interval)
  }, [pitchIndex])

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
            className="mt-10 mb-10 text-black/[0.85] dark:text-white/[0.95]"
            text={pitches[pitchIndex]}
          />
          <div className="flex flex-wrap items-center justify-center gap-4  z-40">
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
      <ColorWaves
        animationTimeoutMs={4000}
        backgroundFill="transparent"
        blur={0.0}
        className="max-w-4xl mt-[10] "
        colors={waves}
        waveOpacity={0.015}
        waveWidth={2}
      ></ColorWaves>
    </>
  )
}
