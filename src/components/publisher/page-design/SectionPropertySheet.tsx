import react, { useState } from 'react'
// setText: (id: number, text: string) => void, selectedSection: any

const SectionPropertySheet = (selectedSection: any ) => {
  if (!selectedSection) return null 

  const currentNode = selectedSection && selectedSection?.node ? selectedSection.node : undefined
  const currentProps = currentNode && currentNode?.properties ? currentNode.properties : undefined


  console.log('>>> currentProps >>> ', currentProps)

  if (!currentProps) return null


  const applyChanges = () => {
    // applyPropertyChanges()
  }

    return (
        <>
          {currentProps.map((sectionProperty: any)=>{
            const propertyType = sectionProperty?.propertyType ? sectionProperty.propertyType : 'text'

            
            if (propertyType === 'text') {
              return (
                <>
                  <label className="block mb-2">{`${sectionProperty.propertyName}`}</label>
                  <input
                    type="text"
                    className="w-full p-2 mb-4 border border-gray-400"
                    value={sectionProperty.propertyValue}
                    onChange={(e) => sectionProperty.setPropertyValue(selectedSection.id, e.target.value)}
                  />
                </>
              )
            }
            if (propertyType === 'color') {
              return (
                <>
                  <label className="block mb-2">{`${sectionProperty.propertyName}`}</label>
                  <input
                    type="text"
                    className="w-full p-2 mb-4 border border-gray-400"
                    value={sectionProperty.propertyValue}
                    onChange={(e) => sectionProperty.setPropertyValue(selectedSection.id, e.target.value)}
                  />
                </>
              )
            }
            if (propertyType === 'range') {
              return (
                <>
                  <label className="block mb-2">{`${sectionProperty.propertyName}`}</label>
                  <input
                    type="text"
                    className="w-full p-2 mb-4 border border-gray-400"
                    value={sectionProperty.propertyValue}
                    onChange={(e) => sectionProperty.setPropertyValue(selectedSection.id, e.target.value)}
                  />
                </>
              )
            }

          })}
        </>
      )    
    
}

export default SectionPropertySheet 