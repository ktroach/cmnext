import { type Metadata } from "next"
import { env } from "@/env.mjs"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import { ResetPasswordForm } from "@/components/forms/reset-password-form"
import { Block } from "@/components/containers/block"
import { getFrontendBaseUrl } from "@/lib/url"

export const metadata: Metadata = {
  metadataBase: new URL(getFrontendBaseUrl()),
  title: "Reset Password",
  description: "Enter your email to reset your password",
}

export default function ResetPasswordPage() {
  return (
    <Block className="max-w-lg">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Reset password</CardTitle>
          <CardDescription>
            Enter your email address and we will send you a verification code
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* <ResetPasswordForm /> */}
        </CardContent>
      </Card>
    </Block>
  )
}
