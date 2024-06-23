import * as React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import { RootConfig } from '@/config/root-config'
import TopSiteTemplate from '@/components/templates/base/topsite'
import { getFrontendBaseUrl } from '@/lib/url'

export default async function TopSitePage() {
  const user = await currentUser()
  const baseUrl = getFrontendBaseUrl()
  console.log('>>> frontend base url >>> ', baseUrl)

  return (
    <>
      <TopSiteTemplate
        userName={user?.username}
        line={RootConfig.description}
        pitches={RootConfig.pitches}
        waves={RootConfig.waveAnimationColors}
        leftAction={RootConfig.leftAction}
        rightAction={RootConfig.rightAction}
        menuConfig={RootConfig.mainNav}
      />
    </>
  )
}
