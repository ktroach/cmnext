"use client"

import { api } from '@/trpc/client'

export const getSubRefByIdentifier = async (identifier: string | null) => {
    const signInIdentifier: string | undefined = identifier ? identifier : undefined
    if (!signInIdentifier) {
      console.log('Sign In identifier not provided')
      return null
    }
    const { isLoading, data: resultData } = api.users.getUserSubSite.useQuery({
      username: signInIdentifier,
    })
    if (!isLoading && resultData) {
      return resultData
    }
    return null 
}