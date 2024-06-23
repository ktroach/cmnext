type BaseUrls = {
  development?: string
  preview?: string
  production?: string
}

type Environment = 'development' | 'preview' | 'production'

export const getCurrentEnv = (): Environment => {
  const nodeEnv: Environment = process.env.NODE_ENV as Environment || 'development'
  const vercelEnv: Environment = process.env.VERCEL_ENV as Environment || 'development'
  return vercelEnv || nodeEnv
}

export const getBaseUrls = (): BaseUrls => {
  const cmnextBaseUrlDev = process.env?.CMNEXT_BASE_URL_DEV || 'http://localhost:3000'

  const vercelPreviewUrl = process.env?.VERCEL_URL ?? process.env?.NEXT_PUBLIC_VERCEL_URL
  let cmnextBaseUrlPrev = process.env?.CMNEXT_BASE_URL_PREVIEW || 'https://cmnext-git-subtree-titan-f4a1be16.vercel.app'
  if (vercelPreviewUrl) {
    cmnextBaseUrlPrev = `https://${vercelPreviewUrl}`
  }

  const cmnextBaseUrlProd = process.env?.CMNEXT_BASE_URL_PROD || 'https://cmnext-seven.vercel.app'

  const baseUrls: BaseUrls = {
    development: cmnextBaseUrlDev,
    preview: cmnextBaseUrlPrev,
    production: cmnextBaseUrlProd,
  }

  return baseUrls
}

const getBaseUrl = (currentEnv: 'development' | 'preview' | 'production', baseUrls: BaseUrls) => {
  const envUrls = {
    development: baseUrls?.development,
    preview: baseUrls?.preview,
    production: baseUrls?.production,
  }

  return envUrls[currentEnv]
}

export const getFrontendBaseUrl = () => {
  const currentEnv = getCurrentEnv()
  const baseUrls = getBaseUrls()
  const baseUrl = getBaseUrl(currentEnv, baseUrls)
  
  if (baseUrl) {
    return baseUrl
  }

  return `${window.location.origin}:3000`
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
