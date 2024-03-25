'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'

interface PublisherToolbarProps {
  editorValue: any
  isPage?: boolean
}

export const PublisherToolbar = ({
  editorValue,
  isPage,
  ...props
}: PublisherToolbarProps) => {
  // TRPC Call to get the Page
  let statusHeader = 'Draft'
  let allPages: any = []

  allPages.push("Home")
  allPages.push("Me")
  allPages.push("You")
  // if (status.published) {
  //     let publishedDate = getDay()
  //     statusHeader = `Last Published: ${publishedDate} `
  // }

  // TODO: SavePage
  // TODO: PublishPage

  // TODO: Page title validation - the title of the page has to be unique

  const findPage = () => {
    // TODO: Find a page with the same title for the same subref
  }

  const getAllPages = () => {
    // TODO: get all pages for parent menu dropdown
  }

  const PublishPage = () => {
    // TODO: Save the current changes in the editor and Set the Page status to Published
    console.log(">>> PublishPage called >>> editorValue >>> ", editorValue)
  }

  const SaveDraft = () => {
    // TODO: Save the current changes in the editor and the form to the database. Create the MDX
    console.log(">>> SaveDraft called >>> editorValue >>> ", editorValue)
  }

  const CloseEditor = () => {
    // TODO: Go back to all pages

  }

  return (
    <header className="sticky top-0 z-[1000] w-full border-b bg-white dark:bg-transparent">
      <div className="container flex flex-row h-16 items-center">
        <div className="flex flex-1 justify-start items-start">
          Status: {statusHeader}
        </div>
        {/* {isPage && allPages && allPages.length > 0 && (
          <div className="flex flex-1 justify-start items-start">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Parent Page" />
              </SelectTrigger>
              <SelectContent className=" z-50 ">
                {allPages.map((page: any) => {
                  <SelectItem value="light">{page?.name}</SelectItem>
                })}
              </SelectContent>
            </Select>
          </div>
        )} */}
        <div className="flex flex-1 justify-end space-x-4">
          <Button className="" onClick={CloseEditor}>
            Close Editor
          </Button>
          <Button
            className="bg-blue-800 hover:bg-blue-600 text-white"
            onClick={SaveDraft}
          >
            Save Draft
          </Button>
          <Button
            className="bg-green-800 hover:bg-green-600 text-white"
            onClick={PublishPage}
          >
            Publish
          </Button>
        </div>
      </div>
    </header>
  )
}
