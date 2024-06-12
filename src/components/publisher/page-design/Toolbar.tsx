import React from 'react'

const PageDesignToolbar = ({ alignLeft, alignTop, matchSize }) => {
  return (
    <div className="bg-gray-800 text-white flex justify-between p-4">
      <div className="flex space-x-4">
        <button className="btn">Undo</button>
        <button className="btn">Redo</button>
        <button className="btn">Save</button>
        <button className="btn">Publish</button>
        <button className="btn" onClick={alignLeft}>Align Left</button>
        <button className="btn" onClick={alignTop}>Align Top</button>
        <button className="btn" onClick={matchSize}>Match Size</button>
      </div>
    </div>
  )
}

export default PageDesignToolbar
