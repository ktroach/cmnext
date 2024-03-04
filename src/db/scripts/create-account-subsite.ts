// import { prisma } from "../";

// async function main() {

//     const newaccount = await prisma.account.create({
//         data: {
//             name: "Alex Shop",
//         }        
//       }
//     );

//     const alex = await prisma.user.upsert({
//         where: { email: 'alex.smith@cmnext.io' },
//         update: {},
//         create: {
//           email: 'alex.smith@cmnext.io',
//           name: 'Alex Smith',
//           accounts: [newaccount]
//           posts: {
//             create: {
//               title: 'Check out Prisma with Next.js',
//               content: 'https://www.prisma.io/nextjs',
//               published: true,
//             },
//           },
//         },
//       });


//     //   const jimsAccount = await prisma.account.upsert({
//     //     where: { users: alex.id },
//     //     update: {},
//     //     create: {
//     //       name: "Jim's Discount Kaiju Cages",
//     //     },
//     //   })




//   const user = await prisma.account.create({
//     data:           {
//         name: "Jim's Discount Kaiju Cages",
//         users: {
//             create: [
//                 {

//                 }
//             ]
//         },
//         subsites: {
//           create: [
//             {
//               name: "Kaiju Cage Shop",
//               slug: "/discountkaijucages", 
//               domainName: "www.discountkaijucages.com", 
//               domainStatus: "pending",
//               config: {
//                 create: [
//                   {
//                     name: "Discount Kaiju Cage Shop",
//                     siteVisibility: "draft",
//                     siteLanguage: "en",
//                   }
//                 ]
//               }

//             }
//           ]
//         }
//       },
//   })

//   const returnUser = await prisma.user.findUnique({
//     where: {
//       id: user.id,
//     },
//     include: {
//       accounts: {
//         include: {
//           subsites: true,
//         },
//       },
//     },
//   })

//   console.log(returnUser)
// }

// main(); 
