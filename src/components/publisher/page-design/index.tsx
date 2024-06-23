'use client'

import React from 'react'
import {ContentDesigner} from './ContentDesigner'

export interface ContentDesignerContainerProps {
  subTree: any
}

const ContentDesignerContainer = ({ subTree }: ContentDesignerContainerProps) => {
  return (
  <>
    <ContentDesigner subTree={subTree} />
  </>
  )
}

export default ContentDesignerContainer