'use client'

import { useState, useEffect } from 'react'
import { getFrontendBaseUrl } from '@/lib/url'

const useHref = (menuProps: any) => {
  const BaseUrl = getFrontendBaseUrl()
  const [hrefResult, setHrefResult] = useState(BaseUrl)

  useEffect(() => {
    const { sub, href } = menuProps
    const subRef = sub || undefined
    const subPath = subRef ? `${BaseUrl}/p/${subRef}/pages/` : undefined
    const menuItemHref = href || undefined

    const newHrefResult =
      menuItemHref && subPath
        ? menuItemHref.replace('/pages/', subPath)
        : `${BaseUrl}/p/${subRef}`

    setHrefResult(newHrefResult)
  }, [menuProps])

  return hrefResult
}

export default useHref
