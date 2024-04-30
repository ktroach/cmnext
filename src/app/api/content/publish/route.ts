import { publishContent } from '@/lib/publisherBackend'
import { auth } from '@clerk/nextjs'

export async function POST(req: Request) {
  const { userId, getToken } = auth()

  if (!userId) {
    return new Response('Unauthorized', { status: 401 })
  }

  try {
    const data = {}
    publishContent()
    return Response.json({ data })
  } catch (error) {
    return Response.json(error)
  }
}
