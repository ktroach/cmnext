import { saveContent } from '@/lib/publisherBackend'
import { auth, currentUser } from '@clerk/nextjs'

export async function POST(req: Request) {
  console.log('>>> ENTERED: POST Blog route')

  const { userId, getToken } = auth()

  const data = await req.json()
  console.log('>>> data >>>> ', data)

  if (!userId) {
    return new Response('Unauthorized', { status: 401 })
  }

  try {
    const user = await currentUser()

    if (!user) {
      console.log('>>> Current user not found >>> ')
      return new Response(null, { status: 404 })
    }
   
    const userId = user?.id ? user.id : undefined
    const userName = user?.username ? user.username : ''
    console.log('>>> userId >>> ', userId)
    console.log('>>> userName >>> ', userName)

    // set the default user avatar to the imageUrl from Clerk
    let userAvatar = user?.imageUrl ? user.imageUrl : ''
    // but, if the user is logged in using an external account, use the avatar from the external account, if it exists
    const hasExternalAccounts =
      user?.externalAccounts && user?.externalAccounts?.length > 0
        ? true
        : false
    const externalAccounts = hasExternalAccounts
      ? user.externalAccounts
      : undefined
    if (externalAccounts) {
      for (let i = 0; i < externalAccounts.length; i++) {
        const externalAccount = externalAccounts[i]
        const hasExternalImage = externalAccount?.imageUrl ? true : false
        userAvatar =
          externalAccount && hasExternalImage
            ? externalAccount.imageUrl
            : userAvatar
      }
    }
    console.log('>>> userAvatar: ', userAvatar)

    const subRef = data?.subRef ? data.subRef : undefined
    if (!subRef) {
        console.log('>>> subRef not found >>> ')
        return new Response(null, { status: 404 })
    }    

    const responseData = saveContent(userName, userAvatar, subRef, data)

    return Response.json({ responseData })
  } catch (error) {
    return Response.json(error)
  }
}
