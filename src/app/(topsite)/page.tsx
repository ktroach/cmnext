import * as React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import { RootConfig } from '@/config/root-config'
import {
  FeaturedPosts,
  FeaturedSites,
} from '@/components/templates/featured-content'
import StarterTemplate from '@/components/templates/facets/starter'

export default async function IndexPage() {
  const user = await currentUser()
 
  const buildFeaturedSections = (sectionContent: any) => {
    let sections: any = []
    const sectionsConfig = RootConfig.sections ? RootConfig.sections : undefined
    if (!sectionsConfig) return []
    for (let i = 0; i < sectionsConfig.length; i++) {
      const sectionConf = sectionsConfig[i]
      sections.push({
        ...sectionConf,
        content: sectionContent[i],
      })
    }
    return sections
  }

  const mainSections =  buildFeaturedSections([
     <FeaturedPosts takeLimit={RootConfig.featureBlogsLimit} />,
     <FeaturedSites takeLimit={RootConfig.featureSitesLimit} />,
  ])

  return (
    <>
      <StarterTemplate
        userName={user?.username}
        line={RootConfig.description}
        words={RootConfig.pitch}
        waves={RootConfig.waveAnimationColors}
        leftAction={RootConfig.leftAction}
        rightAction={RootConfig.rightAction}
        sections={mainSections}
        menuConfig={RootConfig.mainNav}
      />
    </>
  )
}
