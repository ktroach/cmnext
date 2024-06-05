import React from 'react'
import { getPageByTitle, getSubsiteBySubsiteRef } from '@/lib/queries'
import DynamicPageGenerator from '@/components/generators/dynamic-page-generator'

export default async function SubsiteHomePage({ params }: any) {
  const subRef: string | undefined = params?.sub ? params.sub : undefined
  let parsedSubTree: any = null
  if (subRef) {
    const subsite = await getSubsiteBySubsiteRef(subRef)
    const subsiteId = subsite && subsite?.id ? subsite.id : undefined
    if (subsiteId) {
      const page = await getPageByTitle('Home', subsiteId)
      const pageDesignData: string = page && page?.layoutTemplate ? page.layoutTemplate : undefined
      if (pageDesignData) {
        parsedSubTree = JSON.parse(pageDesignData)
      }
    }
  }
 
  return (
    <>
      {parsedSubTree ? (
        <>
          <DynamicPageGenerator jsonData={parsedSubTree} />
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  )
}
