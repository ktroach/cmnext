'use client'

import * as React from 'react'
import { Button } from '../ui/button'
import { catchError } from '@/lib/errors'
import { getFrontendBaseUrl } from '@/lib/url'

export function CreateNewPageAction() {
  const baseUrl = getFrontendBaseUrl()
  const publisherCreatePageUrl = `${baseUrl}/publish/cltyljhuw0003sd3lubvh6ap5/pages/new`
  const [isPending, startTransition] = React.useTransition()
  const handleSubmit = () => {
    startTransition(() => {
      try {
        window.location.href = publisherCreatePageUrl
      } catch (err) {
        catchError(err)
      }
    })
  }
  return (
    <>
      <Button className="py-4" onClick={handleSubmit}>
        Create New Page
      </Button>
    </>
  )
}
