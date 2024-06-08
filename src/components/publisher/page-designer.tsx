'use client'

import React, { useState, useRef } from 'react'
import { cn } from '@/lib/utils'
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '../ui/textarea'
import { Icons } from '@/styles/icons'

export default function PageDesigner() {
  const [isDraggingBlock, setIsDraggingBlock] = useState(false)
  const [isDraggingSubBlock, setIsDraggingSubBlock] = useState(false)
  const [open, setOpen] = useState(false)
  const [blocks, setBlocks] = useState<any>([])
  const [subBlocks, setSubBlocks] = useState<any>([])
  const [curBlockId, setCurBlockId] = useState<number>(-1)
  const [textBlockColor, setTextBlockColor] = useState<string>('bg-white dark:bg-gray-900')

  const handleMainSectionClick = () => {
    if (isDraggingBlock) {
      // @ts-ignore
      setBlocks([...blocks, { id: blocks.length, subBlocks: [], removed: false }])
      setIsDraggingBlock(false)
      setTextBlockColor('bg-white dark:bg-gray-900')
    }
  }

  // @ts-ignore
  const handleBlockClick = (blockId) => {
    if (!isDraggingBlock) {
      setOpen(true)
      setCurBlockId(blockId)
    }
    if (isDraggingSubBlock) {
      // @ts-ignore
      setSubBlocks([...subBlocks, { blockId, id: subBlocks.length, removed: false }])
      setIsDraggingSubBlock(false)
    }
    setTextBlockColor('bg-white dark:bg-gray-900')
  }

  const handleAddBlockClick = () => {
    setIsDraggingBlock(true)
    setTextBlockColor('bg-cyan-400 dark:bg-cyan-400')

    if (isDraggingSubBlock) {
		// @ts-ignore	
        setSubBlocks([...subBlocks, { blockId, id: subBlocks.length, removed: false }])
        setIsDraggingSubBlock(false)
    }    
  }
  
  const handleAddSubBlockClick = () => {
    setTextBlockColor('bg-cyan-400 dark:bg-cyan-400')
    setIsDraggingSubBlock(true)
    setIsDraggingBlock(false)
  }


  const handleSubBlockClick = (subBlockId: any) => {
    if (isDraggingSubBlock) {
        setIsDraggingSubBlock(false)
	}
    setTextBlockColor('bg-white dark:bg-gray-900')
  }

  const handleRemoveSubBlock = (blockId: any) => {
    let blockFilter = blocks.filter((block: any) => block.id === blockId)
    let blockElement =
      blockFilter && blockFilter.length > 0 ? blockFilter[0] : null
  }

  const getPropertiesByBlockType = () => {
    const selectedBlock = blocks.filter((block: any) => block.id === curBlockId)
    if (selectedBlock && selectedBlock?.blockType === 'text') {
        return getTextBlockProperties()
    }    
  }

  const getTextBlockProperties = () => {
    return (
        <div className="flex-1 overflow-auto p-4">
            <div className="grid gap-4">
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                    <Label htmlFor="textFld">Text</Label>
                    <Textarea id="textFld" placeholder="Type your text here."></Textarea>
                </div>
            </div>
      </div>
    )
  }

  const updateProperties = () => {
    // TODO: Update the layout subtree
    setOpen(false)
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="hidden" variant="outline">
            Open Modal
          </Button>
        </DialogTrigger>
        <DialogContent className="fixed left-64 top-64 w-[400px] max-w-[calc(100vw-32px)] rounded-lg shadow-lg md:left-64 md:top-64 ">
          <div className="flex h-full flex-col">
            <DialogHeader className="border-b p-4">
              <DialogTitle>Component Properties</DialogTitle>
              <DialogDescription>
                Customize the properties of your component.
              </DialogDescription>
            </DialogHeader>
            {getTextBlockProperties()}
            <DialogFooter className="border-t p-4">
              <Button type="submit" onClick={updateProperties}>Save</Button>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
      <div className="flex h-screen w-full overflow-hidden">
        <div className="bg-gray-100 dark:bg-gray-950 w-64 p-4 border-r border-gray-200 dark:border-gray-800 flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Blocks</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div
                className={cn(
                  'rounded-lg shadow-sm p-4 flex flex-col gap-2b',
                  textBlockColor
                )}
                onClick={handleAddBlockClick}
              >
                <Icons.boxIcon
                  className="w-6 h-6 text-gray-500 dark:text-gray-400"
                  onClick={handleAddBlockClick}
                />
                <span
                  className="text-sm font-medium"
                  onClick={handleAddBlockClick}
                >
                  Block
                </span>
              </div>
            </div>

            <div>
              <div className={cn(
                  'rounded-lg shadow-sm p-4 flex flex-col gap-2b',
                  textBlockColor
                )} onClick={handleAddSubBlockClick}>
                <Icons.boxIcon className="w-6 h-6 text-green-500 dark:text-gray-400" onClick={handleAddSubBlockClick} />
                <span className="text-sm font-medium" onClick={handleAddSubBlockClick}>Sub Block</span>
              </div>
            </div>


            <div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4 flex flex-col gap-2 cursor-grab">
                <Icons.imageIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-medium">Image</span>
              </div>
            </div>

            <div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4 flex flex-col gap-2 cursor-grab">
                <Icons.headingIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-medium">Heading</span>
              </div>
            </div>
            <div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4 flex flex-col gap-2 cursor-grab">
                <Icons.boxIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-medium">Carousel</span>
              </div>
            </div>
            <div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4 flex flex-col gap-2 cursor-grab">
                <Icons.boxIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-medium">Hero</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-1">
          <div className="rounded-lg  border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900 overflow-visible">
            <h3 className="mb-4 text-lg font-semibold">Layout</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex-1 relative cursor-pointer" onClick={handleMainSectionClick}>
                {blocks.map((block: any, index: number) => (
                  <div
                    key={block.id}
                    className="absolute flex h-[200px] w-full rounded-md border-2 border-dashed border-gray-500 dark:border-gray-700 hover:border-4 hover:border-gray-400 mb-5"
                    style={{ top: `${index * 100}%` }}
                    onClick={() => handleBlockClick(block.id)}
                  >
                    {subBlocks.filter((subBlock: any) => subBlock.blockId === block.id).map((subBlock: any) => (
                        <div
                            key={subBlock.id}
                            className="panel w-1/2 h-full border-r-2 border-blue-700 flex flex-wrap bg-green-400"
                            onClick={() => handleSubBlockClick(subBlock.id)}
                        >
                            Work in Progress

                        </div>
                    ))}

                  </div>
                ))}

                <div
                  className="flex flex-col h-[200px] w-full items-center justify-center rounded-md border-2 border-dashed border-gray-400 dark:border-gray-700 hover:border-4 hover:border-gray-100"
                  onClick={handleMainSectionClick}
                >
                  <span
                    className="text-gray-500 dark:text-gray-400"
                    onClick={handleMainSectionClick}
                  >
                    Drag and drop blocks here
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}