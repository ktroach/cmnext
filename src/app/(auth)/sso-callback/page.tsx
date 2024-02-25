import { type HandleOAuthCallbackParams } from "@clerk/types"

import SSOCallback from "@/components/auth/sso-callback"
import { Block } from "@/components/containers/block"

// Running out of edge function execution units on vercel free plan
// export const runtime = "edge"

export interface SSOCallbackPageProps {
  searchParams: HandleOAuthCallbackParams
}

export default function SSOCallbackPage({
  searchParams,
}: SSOCallbackPageProps) {
  return (
    <Block className="max-w-lg">
      <SSOCallback searchParams={searchParams} />
    </Block>
  )
}
