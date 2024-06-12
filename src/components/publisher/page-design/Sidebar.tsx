'use client'

import React from 'react'

// @ts-ignore
const PageDesignSidebar = ({ type, elements, setElements, selectedElement, setSelectedElement }) => {
    // @ts-ignore
  const handleAddElement = (elementType) => {
    setElements([...elements, { type: elementType, id: elements.length + 1, properties: {} }])
  }

  // @ts-ignore
  const handlePropertyChange = (property, value) => {
    // @ts-ignore
    const updatedElements = elements.map((el) => (el.id === selectedElement.id ? { ...el, properties: { ...el.properties, [property]: value } } : el))
    setElements(updatedElements)
  }

  return (
    <div className="bg-gray-200 w-64 p-4 overflow-y-auto">
      {type === 'toolbox' && (
        <>
          <h2 className="font-bold mb-4">Toolbox</h2>
          <button className="btn mb-2" onClick={() => handleAddElement('text')}>Add Text</button>
          <button className="btn mb-2" onClick={() => handleAddElement('image')}>Add Image</button>
          {/* Add more elements as needed */}
        </>
      )}
      {type === 'propertySheet' && selectedElement && (
        <>
          <h2 className="font-bold mb-4">Properties</h2>
          <div className="mb-2">
            <label className="block">Text</label>
            <input
              className="input"
              type="text"
              value={selectedElement.properties.text || ''}
              onChange={(e) => handlePropertyChange('text', e.target.value)}
            />
          </div>
          {/* Add more properties as needed */}
        </>
      )}
    </div>
  )
}

export default PageDesignSidebar
