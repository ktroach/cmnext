import { prisma } from '../'

async function main() {
  const userEmail = 'bob.smith@cmnext.io'
  
  const userAccount = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
    include: {
        accounts: true,
    },
  })

  console.log(userAccount)
}

main()
