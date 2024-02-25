import { type HandleOAuthCallbackParams } from "@clerk/types"

import SSOCallback from "@/components/auth/sso-callback"
import { Block } from "@/components/containers/block"

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
