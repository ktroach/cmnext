import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const uniqueUser = await prisma.user.findUnique({
    where: {
      email: 'john.doe@cmnext.io',
    },
  })
  console.log(uniqueUser)

  // By ID
  const userById = await prisma.user.findUnique({
    where: {
      id: 1,
    },
  })
  console.log(userById)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
