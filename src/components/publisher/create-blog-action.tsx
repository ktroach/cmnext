'use client'

import * as React from 'react'
import { Button } from '../ui/button'
import { catchError } from '@/lib/errors'
import { getFrontendBaseUrl } from '@/lib/url'

export function CreateNewBlogAction(props: any) {
  const baseUrl = getFrontendBaseUrl()
  const publisherCreateBlogUrl = props?.subRef ? `${baseUrl}/publish/${props?.subRef}/blogs/new` : ''
  const [isPending, startTransition] = React.useTransition()
  const handleSubmit = () => {
    startTransition(() => {
      try {
        window.location.href = publisherCreateBlogUrl
      } catch (err) {
        catchError(err)
      }
    })
  }
  return (
    <>
      <Button className="py-4" onClick={handleSubmit}>
        Create New Blog
      </Button>
    </>
  )
}
