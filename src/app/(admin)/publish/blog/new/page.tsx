import { type Metadata } from "next"
import { redirect } from "next/navigation"
import { env } from "@/env.mjs"
import { currentUser } from "@clerk/nextjs"
import { AddBlogPostForm } from "@/components/creator/add-blog-post"
import { Block } from "@/components/containers/block"

// http://localhost:3000/p/2222/blogs/1704226991729f44

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Create Blog",
  description: "Create a new blog post",
}

export default async function AdminBlogNew() {
    const user = await currentUser();
    if (!user) redirect("/");

    return (
        <Block className="max-w-lg111">
          <AddBlogPostForm />
        </Block>
      )    
}