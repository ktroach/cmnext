import * as React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import { RootConfig } from '@/config/root-config'
import TopSiteTemplate from '@/components/templates/facets/starter'

export default async function TopSitePage() {
  const user = await currentUser()
  return (
    <>
      <TopSiteTemplate
        userName={user?.username}
        line={RootConfig.description}
        words={RootConfig.pitch}
        waves={RootConfig.waveAnimationColors}
        leftAction={RootConfig.leftAction}
        rightAction={RootConfig.rightAction}
        menuConfig={RootConfig.mainNav}
      />
    </>
  )
}
