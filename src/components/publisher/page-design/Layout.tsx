'use client'

import React, { useState } from 'react'
import PageDesignToolbar from '@/components/publisher/page-design/Toolbar'
import PageDesignSidebar from '@/components/publisher/page-design/Sidebar'
import PageDesignCanvas from '@/components/publisher/page-design/Canvas'

const PageDesignLayout = () => {
  const [selectedElement, setSelectedElement] = useState(null)
  const [elements, setElements] = useState([])

  const alignLeft = () => {

  }

  const alignTop = () => {

  }
  
  const matchSize = () => {

  }  

  return (
    <div className="flex flex-col h-screen">
      <PageDesignToolbar alignLeft={alignLeft} alignTop={alignTop} matchSize={matchSize} />
      <div className="flex flex-grow">
        <PageDesignSidebar type="toolbox" elements={elements} setElements={setElements} selectedElement={undefined} setSelectedElement={undefined} />
        <PageDesignCanvas elements={elements} setElements={setElements} selectedElement={selectedElement} setSelectedElement={setSelectedElement} />
        <PageDesignSidebar type="propertySheet" selectedElement={selectedElement} setElements={setElements} elements={undefined} setSelectedElement={undefined} />
      </div>
    </div>
  )
}

export default PageDesignLayout
