// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function seed() {
//     await prisma.user.create({
//         data: {
//             name: 'John Doe',
//             email: 'john.doe@example.com',
//         },
//     });
// }

// seed()
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });