import { saveContent } from '@/lib/publisherBackend'
import { auth, currentUser } from '@clerk/nextjs'

export async function POST(req: Request) {
  const { userId, getToken } = auth()

  const data = await req.json()

  try {
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

    const responseData = await saveContent(contentType, userName, subRef, data)

    return Response.json( responseData )
  } catch (error) {
    return Response.json(error)
  }
}
