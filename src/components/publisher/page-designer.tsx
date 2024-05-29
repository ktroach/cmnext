'use client'

import React, { useState, useRef } from 'react'
import { cn } from "@/lib/utils"
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
import { Input } from '@/components/ui/input'
import { Textarea } from '../ui/textarea'

export default function PageDesigner() {
  const [isDraggingBlock, setIsDraggingBlock] = useState(false)
  const [isDraggingPanel, setIsDraggingPanel] = useState(false)
  const [open, setOpen] = useState(false);
  const [blocks, setBlocks] = useState<any>([])
  const [panels, setPanels] = useState<any>([])
  const [textBlockColor, setTextBlockColor] = useState<string>('bg-white dark:bg-gray-900')

  // @ts-ignore
  const handleBlockClick = (blockId) => {
    if (!isDraggingBlock) {
        setOpen(true)
    }
    if (isDraggingPanel) {
      // @ts-ignore
      setPanels([...panels, { blockId, id: panels.length, removed: false }])
      setIsDraggingPanel(false)
    }
  }

  const handleTextAddBlockClick = () => {
    setIsDraggingBlock(true)
    setTextBlockColor('bg-cyan-400 dark:bg-cyan-400')
  }

  const handleRemoveBlock = (blockId: any) => {
    let blockFilter = blocks.filter((block: any) => block.id === blockId)
    let blockElement =
      blockFilter && blockFilter.length > 0 ? blockFilter[0] : null
  }

  const handleMainSectionClick = () => {
    if (isDraggingBlock) {
      // @ts-ignore
      setBlocks([...blocks, { id: blocks.length, panels: [], removed: false }])
      setIsDraggingBlock(false)
      setTextBlockColor('bg-white dark:bg-gray-900')
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className='hidden' variant="outline">Open Modal</Button>
        </DialogTrigger>
        <DialogContent className="fixed left-64 top-64 w-[400px] max-w-[calc(100vw-32px)] rounded-lg shadow-lg md:left-64 md:top-64 ">
          <div className="flex h-full flex-col">
            <DialogHeader className="border-b p-4">
              <DialogTitle>Component Properties</DialogTitle>
              <DialogDescription>
                Customize the properties of your component.
              </DialogDescription>
            </DialogHeader>
            <div className="flex-1 overflow-auto p-4">
              <div className="grid gap-4">
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                  <Label htmlFor="width">Width</Label>
                  <Input defaultValue={200} id="width" type="number" />
                </div>
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                  <Label htmlFor="height">Height</Label>
                  <Input defaultValue={100} id="height" type="number" />
                </div>
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                  <Label htmlFor="backgroundColor">Background Color</Label>
                  <Input
                    defaultValue="#ffffff"
                    id="backgroundColor"
                    type="color"
                  />
                </div>
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                  <Label htmlFor="borderRadius">Border Radius</Label>
                  <Input defaultValue={8} id="borderRadius" type="number" />
                </div>
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                  <Label htmlFor="padding">Padding</Label>
                  <Input defaultValue={16} id="padding" type="number" />
                </div>
              </div>
            </div>
            <DialogFooter className="border-t p-4">
              <Button type="submit">Save</Button>
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
                className={cn("rounded-lg shadow-sm p-4 flex flex-col gap-2b", textBlockColor)}
                onClick={handleTextAddBlockClick}
              >
                <TextIcon
                  className="w-6 h-6 text-gray-500 dark:text-gray-400"
                  onClick={handleTextAddBlockClick}
                />
                <span
                  className="text-sm font-medium"
                  onClick={handleTextAddBlockClick}
                >
                  Text
                </span>
              </div>
            </div>
            <div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4 flex flex-col gap-2 cursor-grab">
                <ImageIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-medium">Image</span>
              </div>
            </div>
            <div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4 flex flex-col gap-2 cursor-grab">
                <BoxIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-medium">Button</span>
              </div>
            </div>
            <div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4 flex flex-col gap-2 cursor-grab">
                <HeadingIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-medium">Heading</span>
              </div>
            </div>
            <div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4 flex flex-col gap-2 cursor-grab">
                <BoxIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-medium">Carousel</span>
              </div>
            </div>
            <div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4 flex flex-col gap-2 cursor-grab">
                <BoxIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-medium">Hero</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-6">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900 overflow-visible">
            <h3 className="mb-4 text-lg font-semibold">Layout</h3>
            <div className="grid grid-cols-1 gap-4">
              <div onClick={handleMainSectionClick}>
                 {blocks.map((block: any, index: number) => (
                    <div
                      key={block.id}
                      className="flex w-full h-1/2 bg-white dark:bg-gray-900 border-2 border-blue-700 border-dashed"
                      style={{ top: `${index * 10}%` }}
                      onClick={() => handleBlockClick(block.id)}
                    >
                        


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

function BoxIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}

function HeadingIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 12h12" />
      <path d="M6 20V4" />
      <path d="M18 20V4" />
    </svg>
  )
}

function ImageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}

function TextIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  )
}
