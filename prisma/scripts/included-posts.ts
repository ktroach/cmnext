/**
 * The following query uses nested create to create:
 * One user
 * Two posts
 * One post category
 * The example uses a nested include to include all posts and post categories.
 * 
 */

// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function main() {
//   const result = await prisma.user.create({
//     data: {
//       email: 'yvette@prisma.io',
//       name: 'Yvette',
//       posts: {
//         create: [
//           {
//             title: 'How to make an omelette',
//             categories: {
//               create: {
//                 name: 'Easy cooking',
//               },
//             },
//           },
//           { title: 'How to eat an omelette' },
//         ],
//       },
//     },
//     include: {
//       // Include posts
//       posts: {
//         include: {
//           categories: true, // Include post categories
//         },
//       },
//     },
//   })
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
