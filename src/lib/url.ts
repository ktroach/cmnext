export const getFrontendBaseUrl = () => {
  // This setting takes precedence 
  // NEXT_PUBLIC_APP_URL is used for PRODUCTION environment and for local Development, NOT PREVIEW
  let appUrl = process.env.NEXT_PUBLIC_APP_URL
  if (appUrl) {
    return appUrl
  }

  // This is used by the PREVIEW environment
  // Vercel will automatically create VERCEL_URL and NEXT_PUBLIC_VERCEL_URL, but you have to expose this in the Vercel settings
  // Both of these should be available, but this could change. 
  const vercelUrl = process.env?.VERCEL_URL ?? process.env?.NEXT_PUBLIC_VERCEL_URL
  if (vercelUrl) {
    return `https://${vercelUrl}`
  }

  // If absolutely nothing else is defined, return the localhost:3000 address
  return `https://cmnext-seven.vercel.app`
}

export const getBackendBaseUrl = () => {
  // If this is browser environment, return empty string
  // because we want to use relative path for browser
  if (typeof window !== 'undefined') return ''

  // else return frontend url as we are using nextjs api routes
  return getFrontendBaseUrl()
}

export const getTRPCUrl = () => {
  return getBackendBaseUrl() + '/api/trpc'
}

export function absoluteUrl(path: string) {
  return `${getFrontendBaseUrl()}${path}`
}
