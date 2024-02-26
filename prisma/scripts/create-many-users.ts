import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // You cannot access relations in a createMany query, which means that you cannot create multiple users and multiple posts in a single nested write.
    // https://www.prisma.io/docs/orm/prisma-client/queries/relation-queries#create-a-single-record-and-multiple-related-records
    const createMany = await prisma.user.createMany({
        data: [
          {
            name: 'bdixon',
            email: 'brittany@cmnext.io',
          },
          {
            name: 'wkelly',
            email: 'wyatt@cmnext.io',
          },
          {
            name: 'acrawford',
            email: 'alfred@cmnext.io',
          }          
        ],
      })
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
