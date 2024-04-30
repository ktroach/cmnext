import { SignoutOptions } from "@/components/auth/signout-options"
import { Header } from "@/components/layouts/header"
import { Block } from "@/components/containers/block"

// Running out of edge function execution units on vercel free plan
// export const runtime = "edge"

export default function SignOutPage() {
  return (
    <Block className="max-w-xs">
      <Header
        title="Sign out"
        description="Are you sure you want to sign out?"
        size="sm"
        className="text-center"
      />
      <SignoutOptions />
    </Block>
  )
}
