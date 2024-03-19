// Keep this Page here for now. We might need it for a SuperAdmin view

// import type { Metadata } from "next";
// import { env } from "@/env.mjs";

// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// import { Header } from "@/components/layouts/header";
// import { Block } from "@/components/containers/block";

// // import { OrganizationList } from "@/components/admin/org-list";
// import { currentUser } from "@clerk/nextjs";

// export const metadata: Metadata = {
//   metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
//   title: "Publisher Dashboard",
//   description: "Manage your Site",
// }

// export default async function PublisherDashboard() {
//   const user = await currentUser()
//   console.log(">>>> admin page >> user >>>> ", user)

//   const email =
//     user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
//       ?.emailAddress ?? "";

//   console.log(">>>> admin page >>>>  user email >>> ", email);

//   const firstName = user?.firstName ? user.firstName : "" ;
//   console.log(">>>> admin page >>>>  first name >>> ", firstName);

//   // TODO: Render Card Layout
//   return (
//     <Block variant="sidebar">
//       <Header
//         title="Creator Dashboard"
//         description="Manage your Site"
//         size="sm"
//       />

//       <div className="w-full overflow-hidden">
//       <Alert>
//         <AlertTitle>Welcome, {firstName}!</AlertTitle>
//         <AlertDescription>
//           You are currently in the Publisher Dashboard where you can manage the content and settings of your site. 
//         </AlertDescription>
//       </Alert>        
//       </div>
//         {/* List all of their Subsites (they can have multiple) */}
//     </Block>
//   )
// }
