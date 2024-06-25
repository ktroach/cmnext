'use client'

import React from 'react'
import { ContentDesigner } from './ContentDesigner'
// import SectionPropertySheet from '@/components/publisher/page-design/SectionPropertySheet'

export interface ContentDesignerContainerProps {
  subTree: any
  pageId: any
  authorId: any
  subsiteId: any
}

const ContentDesignerContainer = ({
  subTree,
  pageId,
  authorId,
  subsiteId,
}: ContentDesignerContainerProps) => {


  return (
    <>
      <ContentDesigner
        subTree={subTree}
        pageId={pageId}
        authorId={authorId}
        subsiteId={subsiteId}
      />
      {/* <SectionPropertySheet selectedSection={null} sectionProperties={[]}  /> */}
    </>
  )
}

export default ContentDesignerContainer
