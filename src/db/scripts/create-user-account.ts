import { prisma } from "../";

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'bob.smith@cmnext.io',
      name: 'Bob Smith',
      accounts: {
        create: [
          {
            name: "Bob's Auto Paint LLC",
          }
        ]
      },
    },
  });

  const returnUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  console.log(returnUser);
}

main(); 
