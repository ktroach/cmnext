export const getFrontendBaseUrl = () => {
  const vercelEnv = process.env?.VERCEL_ENV ? process.env.VERCEL_ENV : 'development'
  const cmnextBaseUrlDev = process.env?.CMNEXT_BASE_URL_DEV ? process.env.CMNEXT_BASE_URL_DEV : 'http://localhost:3000'
  const vercelUrl = process.env?.VERCEL_URL ?? process.env?.NEXT_PUBLIC_VERCEL_URL
  const cmnextBaseUrlPrev = process.env?.CMNEXT_BASE_URL_PREVIEW ? process.env.CMNEXT_BASE_URL_PREVIEW : vercelUrl ? `https://${vercelUrl}` : 'https://cmnext-git-subtree-titan-f4a1be16.vercel.app'
  const cmnextBaseUrlProd = process.env?.CMNEXT_BASE_URL_PROD ? process.env.CMNEXT_BASE_URL_PROD : 'https://cmnext-seven.vercel.app'

  if (vercelEnv === 'production') {
    return cmnextBaseUrlProd
  }

  if (vercelEnv === 'preview') {
    return cmnextBaseUrlPrev
  }

  if (vercelEnv === 'development') {
    return cmnextBaseUrlDev
  }

  return `http://localhost:3000`
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
