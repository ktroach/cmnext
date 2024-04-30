"use client"

export const getSubRefByIdentifier = async (baseUrl: string, identifier: string | null) => {
    const subsiteEndpoint: string = `${baseUrl}/api/subsite`
    const signInIdentifier: string | undefined = identifier ? identifier : undefined
    if (!signInIdentifier) {
      console.log('Sign In identifier not provided')
      return 
    }
    const response: any = await fetch(subsiteEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        signInIdentifier: signInIdentifier,
      }),
    })
    const subsiteResult = await response.json()
    const subsite = subsiteResult ? subsiteResult : undefined
    const subRef = subsite && subsite?.subRef ? subsite.subRef : undefined
    return subRef    
}