'use client'

import { useState, useEffect } from 'react'
import { getFrontendBaseUrl } from '@/lib/url'

const useHref = (menuProps: any) => {
  console.log('>>> menuProps.isPage >>> ', menuProps?.isPage)    
  const BaseUrl = getFrontendBaseUrl()
  const [hrefResult, setHrefResult] = useState(BaseUrl)

  useEffect(() => {
    const { sub, href, slug } = menuProps
    const subRef = sub || undefined
    let subPath = subRef ? `${BaseUrl}/p/${subRef}/pages/` : undefined

    const menuItemHref = href || undefined

    let newHrefResult =
      menuItemHref && subPath
        ? menuItemHref.replace('/pages/', subPath)
        : `${BaseUrl}/p/${subRef}`

    if (menuProps?.isPage) {
      newHrefResult = `${BaseUrl}/p/${subRef}/pages${slug}`
    }        

    setHrefResult(newHrefResult)
  }, [menuProps])

  return hrefResult
}

export default useHref
