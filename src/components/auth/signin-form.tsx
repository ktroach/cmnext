"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useSignIn } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { z } from "zod"
import { api } from '@/trpc/client'
import { catchClerkError } from "@/lib/clerk"
import { authSchema } from "@/validations/auth"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Icons } from "@/styles/icons"
import { PasswordInput } from "@/components/secure/password-input"
import { getFrontendBaseUrl } from '@/lib/url'
import { getSubRefByIdentifier } from '@/lib/subref'

type Inputs = z.infer<typeof authSchema>

export function SignInForm() {
  const router = useRouter()
  const { isLoaded, signIn, setActive } = useSignIn()
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(data: Inputs) {
    if (!isLoaded) return

    startTransition(async () => {
      try {
        const signInResult = await signIn.create({
          identifier: data.email,
          password: data.password,
        })

        if (signInResult.status === "complete") {
          await setActive({ session: signInResult.createdSessionId })
          const baseUrl: string = getFrontendBaseUrl()
          const subRef: string | undefined = await getSubRefByIdentifier(baseUrl, signInResult.identifier)

          if (!subRef) {
            console.log(">>> signin >>> subRef not provided >>> return to origin.") 
            router.push(`${window.location.origin}/`)
            return
          }

          const publisherUrl: string | undefined = baseUrl && subRef ? `${baseUrl}/publish/${subRef}` : undefined     
          console.log('>>> redirecting user ', signInResult.identifier, ' to publisher dashboard: ', publisherUrl)     
          router.push(`${publisherUrl}/`)
        } else {
          console.log(signInResult)
        }
      } catch (err) {
        catchClerkError(err)
      }
    })
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="user@domain.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending}>
          {isPending && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Sign in
          <span className="sr-only">Sign in</span>
        </Button>
      </form>
    </Form>
  )
}
