export const getCurrentEnv = () => {
  const nodeEnv = process.env?.NODE_ENV ? process.env.NODE_ENV : 'development'
  const vercelEnv = process.env?.VERCEL_ENV ? process.env.VERCEL_ENV : 'development'
  return vercelEnv ?? nodeEnv
}

export const getBaseUrls = () => {
  const cmnextBaseUrlDev = process.env?.CMNEXT_BASE_URL_DEV ? process.env.CMNEXT_BASE_URL_DEV : 'http://localhost:3000'
  let cmnextBaseUrlPrev = process.env?.CMNEXT_BASE_URL_PREVIEW ? process.env.CMNEXT_BASE_URL_PREVIEW : 'https://cmnext-git-subtree-titan-f4a1be16.vercel.app'
  const vercelPreviewUrl = process.env?.VERCEL_URL ?? process.env?.NEXT_PUBLIC_VERCEL_URL
  console.log('>>> vercelPreviewUrl >>> ', vercelPreviewUrl)
  if (vercelPreviewUrl) {
    cmnextBaseUrlPrev = `https://${vercelPreviewUrl}`
  }
  const cmnextBaseUrlProd = process.env?.CMNEXT_BASE_URL_PROD ? process.env.CMNEXT_BASE_URL_PROD : 'https://cmnext-seven.vercel.app'
  const baseUrls: any = {
    development: cmnextBaseUrlDev, 
    preview: cmnextBaseUrlPrev, 
    production: cmnextBaseUrlProd, 
  }
  return baseUrls
}

export const getFrontendBaseUrl = () => {
  const currentEnv = getCurrentEnv()
  const baseUrls = getBaseUrls()
  console.log('>>> currentEnv >>> ', currentEnv)
  console.log('>>> baseUrls >>> ', baseUrls)
  
  if (currentEnv === 'development') {
    return baseUrls?.development
  }

  if (currentEnv === 'preview') {
    return baseUrls?.preview
  }  

  if (currentEnv === 'production') {
    return baseUrls?.production
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
