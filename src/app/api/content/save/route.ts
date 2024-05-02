import { updateContent } from '@/lib/publisherBackend'
import { auth, currentUser } from '@clerk/nextjs'

export async function POST(req: Request) {
  console.log('>>> ENTERED: POST Blog route')

  const { userId, getToken } = auth()

  const data = await req.json()
  console.log('>>> data >>>> ', data)

  try {
    const subRef = data?.subRef ? data.subRef : undefined
    if (!subRef) {
        console.log('>>> subRef not found >>> ')
        return new Response(null, { status: 404 })
    }    

    const contentType: string = data?.contentType ? data.contentType : 'blogs'
    const userName: string | undefined = data?.userName ? data.userName : undefined

    if (!userName) {
      console.log('>>> userName not found >>> ')
      return new Response(null, { status: 404 })      
    }

    const responseData = await updateContent(contentType, userName, subRef, data)

    return Response.json( responseData )
  } catch (error) {
    return Response.json(error)
  }
}
