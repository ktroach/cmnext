import { prisma } from "../";

async function main() {
  // Randomly generated user name, email, and company name 
  const user = await prisma.user.create({
    data: {
      name: 'Lawrence Fishbourne',
      email: 'someuser@example.com',
      accounts: {
        create: [
          {
            name: "NeoTech Solutions",
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
