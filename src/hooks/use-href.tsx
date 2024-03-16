'use client'

import { useState, useEffect } from 'react'

const useHref = (menuProps: any) => {
  // TODO: Fix the base Url
  const [hrefResult, setHrefResult] = useState('http://localhost:3000')

  useEffect(() => {
    const { sub, href } = menuProps

    const subRef = sub || undefined
    const subPath = subRef
      ? `http://localhost:3000/p/${subRef}/pages/`
      : undefined
    const menuItemHref = href || undefined

    const newHrefResult =
      menuItemHref && subPath
        ? menuItemHref.replace('/pages/', subPath)
        : `http://localhost:3000/p/${subRef}`

    setHrefResult(newHrefResult)
  }, [menuProps])

  return hrefResult
}

export default useHref
