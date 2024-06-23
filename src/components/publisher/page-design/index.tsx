'use client'

import React from 'react'
import {ContentDesigner} from './ContentDesigner'

export interface ContentDesignerContainerProps {
  subTree: any
  pageId: any
  authorId: any
  subsiteId: any 
}

const ContentDesignerContainer = ({ subTree, pageId, authorId, subsiteId }: ContentDesignerContainerProps) => {
  return (
  <>
    <ContentDesigner subTree={subTree} pageId={pageId} authorId={authorId} subsiteId={subsiteId} />
  </>
  )
}

export default ContentDesignerContainer