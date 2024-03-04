import { prisma } from "../";

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'Jim.Smith@cmnext.io',
      name: 'Jim Smith',
      accounts: {
        create: [
          {
            name: "Jim's Discount Kaiju Cages",
          }
        ]
      },
    },
  })

  const returnUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  })

  console.log(returnUser)
}

main(); 
