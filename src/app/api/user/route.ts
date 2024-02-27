import { auth } from '@clerk/nextjs'

export async function GET(req: Request) {
  const { userId, getToken } = auth()

  if (!userId) {
    return new Response('Unauthorized', { status: 401 })
  }

  try {
    const data = {}
    return Response.json({ data })
  } catch (error) {
    return Response.json(error)
  }
}
