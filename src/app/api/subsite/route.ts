import { auth, currentUser } from '@clerk/nextjs'
import { GetSubsiteBySignInIdentifierBackend } from '@/lib/publisherBackend'

export async function POST(req: Request) {
  console.log('>>> POST /subsite >>> req >>> ', req)

  const { userId } = auth()

  if (!userId) {
    return new Response('Unauthorized', { status: 401 })
  }

  const data = await req.json()
  console.log('>>> data >>>> ', data)

  try {
    const signInIdentifier =
      data && data?.signInIdentifier ? data.signInIdentifier : undefined

    if (!signInIdentifier) {
      return new Response('Unauthorized', { status: 401 })
    }

    const subsiteResult =
      await GetSubsiteBySignInIdentifierBackend(userId, signInIdentifier)
    console.log('>>> subsiteResult >>>> ', subsiteResult)

    return Response.json(subsiteResult)
  } catch (error) {
    return Response.json(error)
  }
}
