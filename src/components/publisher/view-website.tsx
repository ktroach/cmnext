'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { catchError } from '@/lib/errors'
import { getFrontendBaseUrl } from '@/lib/url'

export function ViewWebsite(props: any) {
  const baseUrl = getFrontendBaseUrl()
  const viewWebsiteUrl = props?.subRef ? `${baseUrl}/p/${props?.subRef}/pages` : ''
  const [isPending, startTransition] = React.useTransition()

  const handleSubmit = () => {
    startTransition(() => {
      try {
        window.open(viewWebsiteUrl, '_blank')
      } catch (err) {
        catchError(err)
      }
    })
  }

  return (
    <>
      <div className="mb-5 ">
        <Button className="py-4" onClick={handleSubmit}>
          View Website
        </Button>

      </div>
    </>
  )
}
