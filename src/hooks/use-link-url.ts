'use client'

import { useEffect, useState } from 'react'

const useLinkUrl = (href?: string) => {
  const [linkUrl, setLinkUrl] = useState<URL | null>(null)
  useEffect(() => {
    const updateLinkUrl = () => {
      const isBrowser =
        typeof window !== 'undefined' &&
        window?.location &&
        window?.location?.href
          ? true
          : false
      if (isBrowser) {
        const url = href
          ? new URL(href, window.location.href)
          : new URL(window.location.href)
        setLinkUrl(url)
      }
    }

    updateLinkUrl()
    window.addEventListener('popstate', updateLinkUrl)
    return () => {
      window.removeEventListener('popstate', updateLinkUrl)
    }
  }, [href])
  return linkUrl
}

export default useLinkUrl
