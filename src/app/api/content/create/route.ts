import { createContent } from '@/lib/publisherBackend'
import { auth, currentUser } from '@clerk/nextjs'
import { SetCorsHeaders } from '@/lib/cors'

export async function POST(req: Request) {
  const { userId, getToken } = auth()

  if (!userId) {
    return new Response('Unauthorized', { status: 401 })
  }  

  try {
    const data = await req.json()
    const subRef = data?.subRef ? data.subRef : undefined
    if (!subRef) {
        console.log('>>> create content route >>> subRef not found >>> ')
        return new Response(null, { status: 404 })
    }    

    const contentType: string = data?.contentType ? data.contentType : 'blogs'
    const userName: string | undefined = data?.userName ? data.userName : undefined

    if (!userName) {
      console.log('>>> create content route >>> userName not found >>> ')
      return new Response(null, { status: 404 })      
    }

    const responseData = await createContent(contentType, userName, subRef, data)
    const response = Response.json(responseData)
    SetCorsHeaders(response)    
    return response

  } catch (error) {
    return Response.json(error)
  }
}
