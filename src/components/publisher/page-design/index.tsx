'use client'

import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import PageDesignLayout from '@/components/publisher/page-design/Layout'

const PageDesign = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <PageDesignLayout />
    </DndProvider>    
  )
}

export default PageDesign