'use client'

import { useState, useCallback, useRef } from 'react'
import { DndProvider, useDrag, useDrop, XYCoord } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Icons } from '@/styles/icons'
import HeroSectionCentredWithImage from '@/components/templates/heros/HeroSectionCentredWithImage'

const ItemTypes = {
  SECTION: 'section',
}

interface SectionProps {
  id: number
  text: string
  index: number
  moveSection: (dragIndex: number, hoverIndex: number) => void
  removeSection: (id: number) => void
  selectSection: (id: number) => void
  isSelected: boolean
  color: string
}

interface SectionData {
  id: number
  text: string
  color: string
}

interface DragItem {
  index: number
  id: string
  type: string
}

const Section: React.FC<SectionProps> = ({ id, text, index, moveSection, removeSection, selectSection, isSelected, color }) => {
  const ref = useRef<HTMLDivElement>(null)

  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
    accept: ItemTypes.SECTION,
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
    }),
    hover: (item, monitor) => {
      if (!ref.current) return
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) return

      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return

      moveSection(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag, preview] = useDrag({
    type: ItemTypes.SECTION,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))

  return (
    <div
      ref={ref}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className={`relative p-4 mb-4 ${color} ${isSelected ? 'border-2 border-solid border-cyan-500' : 'border border-dashed border-gray-400'}`}
      onClick={() => selectSection(id)}
      data-handler-id={handlerId}
    >
      <div ref={preview} className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-grab">
        <Icons.menu className="w-5 h-5 text-gray-600" />
      </div>
      <div className="absolute top-2 right-2">
        <Icons.trash className="w-5 h-5 text-red-500 cursor-pointer" onClick={(e) => { e.stopPropagation(); removeSection(id); }} />
      </div>
      <HeroSectionCentredWithImage header={text} subHeader={text} imgSrc='https://placehold.co/1024x480' />
      {/* <div className="text-center">{text}</div> */}
    </div>
  )
}

const PropertySheet: React.FC<{ selectedSection: SectionData | null, setText: (id: number, text: string) => void, isCollapsed: boolean, toggleCollapse: () => void }> = ({ selectedSection, setText, isCollapsed, toggleCollapse }) => {
  if (isCollapsed) return (
    <div className="w-10 h-full p-2 bg-gray-200 cursor-pointer" onClick={toggleCollapse}>
      <Icons.chevronLeft className="w-5 h-5 mx-auto" />
    </div>
  )

  if (!selectedSection) return null

  return (
    <div className="w-1/4 h-full p-4 bg-gray-200">
      <div className="flex justify-end mb-2 cursor-pointer" onClick={toggleCollapse}>
        <Icons.chevronRight className="w-5 h-5" />
      </div>
      <h2 className="mb-4 text-xl">Property Sheet</h2>
      <label className="block mb-2">Text:</label>
      <input
        type="text"
        className="w-full p-2 mb-4 border border-gray-400"
        value={selectedSection.text}
        onChange={(e) => setText(selectedSection.id, e.target.value)}
      />
    </div>
  )
}

const Sidebar: React.FC<{ addSection: (color: string) => void, isCollapsed: boolean, toggleCollapse: () => void }> = ({ addSection, isCollapsed, toggleCollapse }) => {
    if (isCollapsed) return (
      <div className="w-10 h-full p-2 bg-gray-200 cursor-pointer" onClick={toggleCollapse}>
        <Icons.chevronRight className="w-5 h-5 mx-auto" />
      </div>
    )
  
    return (
      <div className="w-1/4 h-full p-4 bg-gray-200">
        <div className="flex justify-end mb-2 cursor-pointer" onClick={toggleCollapse}>
          <Icons.chevronLeft className="w-5 h-5" />
        </div>
        <div className='flex flex-col p-2'>
          <button onClick={() => addSection('bg-blue-500')} className="px-4 py-2 mb-4 text-white bg-blue-500 rounded">Add Blue Section</button>
          <button onClick={() => addSection('bg-red-500')} className="px-4 py-2 mb-4 text-white bg-red-500 rounded">Add Red Section</button>
          <button onClick={() => addSection('bg-yellow-500')} className="px-4 py-2 mb-4 text-white bg-yellow-500 rounded">Add Yellow Section</button>
          <button onClick={() => addSection('bg-green-500')} className="px-4 py-2 mb-4 text-white bg-green-500 rounded">Add Green Section</button>
        </div>
      </div>
    )
  }

export const ContentDesigner: React.FC = () => {
  const [sections, setSections] = useState<SectionData[]>([{ id: 1, text: 'Initial Section', color: 'bg-white' }])
  const [selectedSectionId, setSelectedSectionId] = useState<number | null>(1)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isPropertySheetCollapsed, setIsPropertySheetCollapsed] = useState(false)

  const addSection = (color: string) => {
    const newId = sections.length > 0 ? sections[sections.length - 1].id + 1 : 1
    setSections([...sections, { id: newId, text: `${color}`, color }])
    setSelectedSectionId(newId)
  }

  const moveSection = useCallback((dragIndex: number, hoverIndex: number) => {
    setSections((prevSections) => {
      const newSections = [...prevSections]
      const [draggedSection] = newSections.splice(dragIndex, 1)
      newSections.splice(hoverIndex, 0, draggedSection)
      return newSections
    })
  }, [])

  const removeSection = (id: number) => {
    setSections((prevSections) => prevSections.filter((section) => section.id !== id))
    if (selectedSectionId === id) {
      setSelectedSectionId(null)
    }
  }

  const selectSection = (id: number) => {
    setSelectedSectionId(id)
  }

  const setText = (id: number, text: string) => {
    setSections((prevSections) =>
      prevSections.map((section) => (section.id === id ? { ...section, text } : section))
    )
  }

  const selectedSection = sections.find((section) => section.id === selectedSectionId) || null

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="relative flex p-4">
        <Sidebar addSection={addSection} isCollapsed={isSidebarCollapsed} toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
        <div className="flex-grow pr-4">
          <div className="h-screen overflow-y-auto">
            {sections.map((section, index) => (
              <Section
                key={section.id}
                id={section.id}
                text={section.text}
                index={index}
                moveSection={moveSection}
                removeSection={removeSection}
                selectSection={selectSection}
                isSelected={section.id === selectedSectionId}
                color={section.color}
              />
            ))}
          </div>
        </div>
        <PropertySheet selectedSection={selectedSection} setText={setText} isCollapsed={isPropertySheetCollapsed} toggleCollapse={() => setIsPropertySheetCollapsed(!isPropertySheetCollapsed)} />
      </div>
    </DndProvider>
  )
}
