import react from 'react'

export const HeroSectionCentredWithImageSectionProperties = (setText: (id: number, text: string) => void, selectedSection: any) => {

    return (
        <>
          <label className="block mb-2">Header:</label>
          <input
            type="text"
            className="w-full p-2 mb-4 border border-gray-400"
            value={selectedSection.text}
            onChange={(e) => setText(selectedSection.id, e.target.value)}
          />
    
          <label className="block mb-2">Sub Header:</label>
          <input
            type="text"
            className="w-full p-2 mb-4 border border-gray-400"
            value={selectedSection.text}
            onChange={(e) => setText(selectedSection.id, e.target.value)}
          />      

        </>
      )    
    
}