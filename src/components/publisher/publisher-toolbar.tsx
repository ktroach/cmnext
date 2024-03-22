'use client'

import { Button } from '@/components/ui/button'
import { getDay } from 'date-fns'

// flex flex-1 items-center

export const PublisherToolbar = () => {
  // TRPC Call to get the Page
  let statusHeader = 'Draft'
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

  const publishPage = () => {
    // TODO: Save the current changes in the editor and Set the Page status to Published 
  }

  const saveDraft = () => {
    // TODO: Save the current changes in the editor and the form to the database. Create the MDX  
  }  

  const closeEditor = () => {
    // TODO: Go back to all pages 
  }

  return (
    <header className="sticky top-0 z-[1000] w-full border-b bg-white dark:bg-transparent">
      <div className="container flex flex-row h-16 items-center">
        <div className="flex flex-1 justify-start items-start">
          Status: {' '}{statusHeader}
        </div>
        <div className="flex flex-1 justify-start items-start">
          Parent Menu: 
        </div>        
        <div className="flex flex-1 justify-end space-x-4">
          <Button
            className=""
            onClick={() => {
                closeEditor()
            }}
          >
            Close Editor
          </Button>
          <Button
            className="bg-blue-800 hover:bg-blue-600 text-white"
            onClick={() => {
              alert('save draft')
            }}
          >
            Save Draft
          </Button>
          <Button
            className="bg-green-800 hover:bg-green-600 text-white"
            onClick={() => {
              alert('publish')
            }}
          >
            Publish
          </Button>
        </div>
      </div>
    </header>
  )
}
