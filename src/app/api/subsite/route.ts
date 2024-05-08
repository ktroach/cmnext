import { auth } from '@clerk/nextjs'
import { GetSubsiteBySignInIdentifierBackend } from '@/lib/publisherBackend'
import { type NextRequest } from "next/server"
import { SetCorsHeaders } from '@/lib/cors'

const handler = async (req: NextRequest) => {
  try {
    const { userId } = auth()

    if (!userId) {
      return new Response('Unauthorized', { status: 401 })
    }
  
    const body = await req.json()
    const signInIdentifier =
      body && body?.signInIdentifier ? body.signInIdentifier : undefined

    if (!signInIdentifier) {
      return new Response('Unauthorized', { status: 401 })
    }

    const subsiteResult = await GetSubsiteBySignInIdentifierBackend(userId, signInIdentifier)
    const response = Response.json(subsiteResult)
    SetCorsHeaders(response, "POST")
    return response

  } catch (error) {
    return Response.json(error)
  }
}

export { handler as POST }
