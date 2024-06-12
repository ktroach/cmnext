import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import PageDesignToolbar from './Toolbar'

const ItemTypes = {
  ELEMENT: 'element',
}

const DraggableElement = ({ element, onClick, selectedElement, resizeElement }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.ELEMENT,
    item: { id: element.id, left: element.properties.left || 0, top: element.properties.top || 0 },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const handleResize = (e, direction) => {
    e.stopPropagation()
    const startX = e.clientX
    const startY = e.clientY
    const startWidth = element.properties.width || 100
    const startHeight = element.properties.height || 100
    const startLeft = element.properties.left || 0
    const startTop = element.properties.top || 0

    const onMouseMove = (e) => {
      const dx = e.clientX - startX
      const dy = e.clientY - startY

      let newWidth = startWidth
      let newHeight = startHeight
      let newLeft = startLeft
      let newTop = startTop

      if (direction.includes('right')) {
        newWidth = startWidth + dx
      }
      if (direction.includes('left')) {
        newWidth = startWidth - dx
        newLeft = startLeft + dx
      }
      if (direction.includes('bottom')) {
        newHeight = startHeight + dy
      }
      if (direction.includes('top')) {
        newHeight = startHeight - dy
        newTop = startTop + dy
      }

      resizeElement(element.id, newWidth, newHeight, newLeft, newTop)
    }

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }

  return (
    <div
      ref={drag}
      onClick={() => onClick(element)}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        position: 'absolute',
        left: element.properties.left || 0,
        top: element.properties.top || 0,
        width: element.properties.width || 100,
        height: element.properties.height || 'auto',
        border: selectedElement?.id === element.id ? '2px solid purple' : '1px solid gray',
      }}
    >
      {element.type === 'text' && <p>{element.properties.text || 'Text Element'}</p>}
      {element.type === 'image' && (
        <img
          src={element.properties.src || 'https://via.placeholder.com/150'}
          alt="Image Element"
          style={{ width: '100%', height: '100%' }}
        />
      )}
      {selectedElement?.id === element.id && (
        <>
          <div
            className="absolute w-2.5 h-2.5 bg-purple-500 cursor-nwse-resize top-[-5px] left-[-5px]"
            onMouseDown={(e) => handleResize(e, 'top-left')}
          ></div>
          <div
            className="absolute w-2.5 h-2.5 bg-purple-500 cursor-nesw-resize top-[-5px] right-[-5px]"
            onMouseDown={(e) => handleResize(e, 'top-right')}
          ></div>
          <div
            className="absolute w-2.5 h-2.5 bg-purple-500 cursor-nesw-resize bottom-[-5px] left-[-5px]"
            onMouseDown={(e) => handleResize(e, 'bottom-left')}
          ></div>
          <div
            className="absolute w-2.5 h-2.5 bg-purple-500 cursor-nwse-resize bottom-[-5px] right-[-5px]"
            onMouseDown={(e) => handleResize(e, 'bottom-right')}
          ></div>
        </>
      )}
    </div>
  )
}

const DropZone = ({ accept, onDrop, children }) => {
  const [, drop] = useDrop({
    accept,
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round((item.left || 0) + (delta?.x || 0))
      const top = Math.round((item.top || 0) + (delta?.y || 0))

      onDrop(item.id, left, top)
    },
  })

  return (
    <div ref={drop} className="flex-grow w-full h-full bg-white p-4 overflow-auto relative">
      {children}
    </div>
  )
}

const PageDesignCanvas = ({ elements, setElements, selectedElement, setSelectedElement }) => {
  const moveElement = (id, left, top) => {
    setElements((els) =>
      els.map((el) =>
        el.id === id ? { ...el, properties: { ...el.properties, left, top } } : el
      )
    )
  }

  const resizeElement = (id, width, height, left, top) => {
    setElements((els) =>
      els.map((el) =>
        el.id === id ? { ...el, properties: { ...el.properties, width, height, left, top } } : el
      )
    )
  }

  const alignLeft = () => {
    if (!selectedElement) return
    const targetElement = elements.find(el => el.id !== selectedElement.id)
    if (!targetElement) return

    moveElement(selectedElement.id, targetElement.properties.left, selectedElement.properties.top)
  }

  const alignTop = () => {
    if (!selectedElement) return
    const targetElement = elements.find(el => el.id !== selectedElement.id)
    if (!targetElement) return

    moveElement(selectedElement.id, selectedElement.properties.left, targetElement.properties.top)
  }

  const matchSize = () => {
    if (!selectedElement) return
    const targetElement = elements.find(el => el.id !== selectedElement.id)
    if (!targetElement) return

    resizeElement(selectedElement.id, targetElement.properties.width, targetElement.properties.height, selectedElement.properties.left, selectedElement.properties.top)
  }

  return (
    <div className="flex h-full w-full">
      <DropZone accept={ItemTypes.ELEMENT} onDrop={moveElement}>
        {elements.map((element) => (
          <DraggableElement
            key={element.id}
            element={element}
            onClick={setSelectedElement}
            selectedElement={selectedElement}
            moveElement={moveElement}
            resizeElement={resizeElement}
          />
        ))}
      </DropZone>
      {/* Additional drop zones can be added here */}
      {/* <PageDesignToolbar alignLeft={alignLeft} alignTop={alignTop} matchSize={matchSize} /> */}
    </div>
  )
}

export default PageDesignCanvas
