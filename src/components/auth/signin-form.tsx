"use client"

import * as React from "react"
import { useSignIn } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { z } from "zod"
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

type Inputs = z.infer<typeof authSchema>

export function SignInForm() {
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

    let signInResult: any = null

    startTransition(async () => {
      try {
        signInResult = await signIn.create({
          identifier: data.email,
          password: data.password,
        })

        if (signInResult.status === "complete") {
          await setActive({ session: signInResult.createdSessionId })
        } else {
          console.log(signInResult)
        }
      } catch (err) {
        catchClerkError(err)
      }
    })

    setTimeout(() => {
      const username: any = signInResult && signInResult?.identifier ? signInResult.identifier : null
      if (username) {
        window.location.reload()
      }
    }, 2000)
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
