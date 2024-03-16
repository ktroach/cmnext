import { NextResponse } from "next/server"
import { type UserRole } from "@/types"
import { clerkClient } from "@clerk/nextjs"
import { authMiddleware } from "@clerk/nextjs/server"

export default authMiddleware({

  publicRoutes: [
    "/",
    "/products(.*)",
    "/features(.*)",
    "/pricing(.*)",
    "/resources(.*)",
    "/get-started(.*)",
    "/dashboard(.*)",
    "/signin(.*)",
    "/signup(.*)",
    "/sso-callback(.*)",
    "/blog(.*)",
    "/about(.*)",
    "/contact(.*)",
    "/terms(.*)",
    "/privacy(.*)",
    "/api/(.*)",
  ],
  async afterAuth(auth, req) {
    // Ignore public routes 
    if (auth.isPublicRoute) {
      return NextResponse.next();
    }

    const url = new URL(req.nextUrl.origin);

    if (!auth.userId) {
      url.pathname = "/signin";
      return NextResponse.redirect(url);
    }

    // Get the user Role 
    const user = await clerkClient.users.getUser(auth.userId)

    if (!user) {
      throw new Error("User not found.")
    }

    if (!user.privateMetadata.role) {
      await clerkClient.users.updateUserMetadata(auth.userId, {
        privateMetadata: {
          role: "user" satisfies UserRole,
        },
      })
    }
  },
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
