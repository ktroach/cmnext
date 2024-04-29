'use server'

import { sql } from '@/lib/postgres'
import type { User as ClerkUserType } from '@clerk/backend'
import { EmailAddress } from '@clerk/nextjs/dist/types/server'

const getClerkUserEmail = (user: ClerkUserType) => {
  if (!user) {
    return ''
  }
  const hasEmailAddress: boolean =
    user && user?.emailAddresses && user?.emailAddresses?.length > 0
      ? true
      : false
  const primaryEmail: EmailAddress | undefined = hasEmailAddress
    ? user.emailAddresses[0]
    : undefined
  return primaryEmail && primaryEmail?.emailAddress
    ? primaryEmail?.emailAddress
    : ''
}

const getClerkUserName = (user: ClerkUserType) => {
  if (!user) {
    return ''
  }
  const hasUserName: boolean = user && user?.username ? true : false
  return hasUserName ? user?.username : null
}

export const verifySubRefAccess = async (
  user: ClerkUserType,
  subSiteRef: string | null
): Promise<boolean | undefined> => {
  if (!user) {
    return false
  }
  if (!subSiteRef) {
    return false
  }
  const username: string | null = getClerkUserName(user)
  if (username) {
    const resultData = await sql`SELECT * 
      FROM "User"
      JOIN "Account" ON "User"."id" = "Account"."adminId"
      JOIN "Subsite" ON "Account"."id" = "Subsite"."accountId"
      WHERE "User"."name" = ${username};     
      `
    if (resultData && resultData.length > 0) {
      if (resultData[0]?.subsiteRef === subSiteRef) {
        return true
      }
      console.log('Failed access attempt: ', user)
      return false
    }
  }
  console.log('Subsite Denied - Not Authenticated')
  return false
}

export const getSubsiteBySignInIdentifierQuery = async (userId: string, signInIdentifier: string) => {
  if (!userId) {
    console.log('>>> Unauthorized call to Query Resource: [getSubsiteBySignInIdentifierQuery], Reason: [userId]')
    return null
  }

  if (!signInIdentifier) {
    console.log('>>> Unauthorized call to Query Resource: [getSubsiteBySignInIdentifierQuery], Reason: [signInIdentifier]')
    return null
  }

  const identifierField: string = signInIdentifier.indexOf('@') != -1 ? 'email' : 'name'
  console.log('>>> identifierField >>> ', identifierField)

  const queryResult = await sql`
  SELECT "User"."id" AS "userId", 
         "Subsite"."id" AS "subsiteId", 
         "Subsite"."subsiteRef" AS "subRef"  
    FROM "User"
    JOIN "Account" ON "User"."id" = "Account"."adminId"
    JOIN "Subsite" ON "Account"."id" = "Subsite"."accountId"
    WHERE "User"."email" = ${signInIdentifier};
    `
  console.log('>>> queries >>> getSubsiteBySignInIdentifierQuery >>> resultData >>> ', queryResult)
  if (queryResult && queryResult.length > 0) {
    return queryResult[0]
  }
  return null
}

export const getUserSubsite = async (
  user: ClerkUserType,
  subSiteRef: string | null
): Promise<any | undefined> => {
  if (!user) {
    return null
  }
  if (!subSiteRef) {
    return null
  }
  const username: string | null = getClerkUserName(user)
  if (username) {
    const resultData = await sql`
    SELECT "User"."id" AS "userId", 
           "Subsite"."id" AS "subsiteId", 
           "Subsite"."subsiteRef" AS "subRef"  
      FROM "User"
      JOIN "Account" ON "User"."id" = "Account"."adminId"
      JOIN "Subsite" ON "Account"."id" = "Subsite"."accountId"
      WHERE "User"."name" = ${username};     
      `
    if (resultData && resultData.length > 0) {
      return resultData[0]
    }
  }
  console.log('Subsite Denied - Not Authenticated')
  return null
}

export const getAllPagesByPublisher = async (
  authorId: number | null,
  subsiteId: number | null
): Promise<any | undefined> => {
  if (!authorId) {
    return null
  }
  if (!subsiteId) {
    return null
  }
  const resultData = await sql`
     SELECT "Page".*, "Subsite"."subsiteRef"
       FROM "Page"
       JOIN "Account" ON "Page"."authorId" = "Account"."adminId"
       JOIN "Subsite" ON "Account"."id" = "Subsite"."accountId"       
      WHERE "Page"."authorId" = ${authorId}     
        AND "Page"."subsiteId" = ${subsiteId}  
        AND "Page"."deleted" = false        
      ORDER BY "Page"."createdAt" DESC
    `
  if (resultData && resultData.length > 0) {
    return resultData
  }
  return null
}

export const getAllBlogsByPublisher = async (
  authorId: number | null,
  subsiteId: number | null
): Promise<any | undefined> => {
  if (!authorId) {
    return null
  }
  if (!subsiteId) {
    return null
  }
  const resultData = await sql`
     SELECT *
       FROM "Post"
      WHERE "Post"."authorId" = ${authorId}     
        AND "Post"."subsiteId" = ${subsiteId}  
        AND "Post"."deleted" = false  
      ORDER BY "Post"."createdAt" DESC
    `
  if (resultData && resultData.length > 0) {
    return resultData
  }
  return null
}