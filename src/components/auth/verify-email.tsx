"use client"

import React, { useCallback, useMemo } from "react"
import { useRouter } from "next/navigation"
import { ClerkLoading, useSignUp } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { z } from "zod"
import { catchClerkError } from "@/lib/clerk"
import { verfifyEmailSchema } from "@/validations/auth"
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
import { api } from '@/trpc/client'
import { v4 as uuidv4 } from 'uuid'
import { toast } from "sonner"
import { SignUpResource } from "@clerk/types"

type Inputs = z.infer<typeof verfifyEmailSchema>

export function VerifyEmailForm() {
  const router = useRouter()
  const { isLoaded, signUp, setActive } = useSignUp()
  const [isPending, startTransition] = React.useTransition()

  // this will create the user acccount heirarchy: user --> account --> subsite
  const createUserAccount = async (signupResource: SignUpResource) => {
    const userEmail: string | undefined = signupResource?.emailAddress ? signupResource.emailAddress : undefined;
    const userName: string | undefined = signupResource?.username ? signupResource.username : "";

    if (!userName) {
      throw new Error("Invalid username")
    }

    if (!userEmail) {
      throw new Error("Invalid email")
    }    

    invokeCreateUser(userName, userEmail)
  };

  const createUser = api.users.create.useMutation({
    onSuccess: (newUser) => {
      toast("User created");
    },
    onError: (error) =>
      toast("Failed to create user", {
        duration: 2000,
        description: error.message
      }),
  });

  const isCreatingUser = createUser.isPending;

  const invokeCreateUser = async (userName: string, userEmail: string) => {
    createUser.mutate({
      name: userName,
      email: userEmail, 
    });
  }      

  const form = useForm<Inputs>({
    resolver: zodResolver(verfifyEmailSchema),
    defaultValues: {
      code: "",
    },
  })

  function onSubmit(data: Inputs) {
    if (!isLoaded) return

    startTransition(async () => {
      try {
        const completeSignUp = await signUp.attemptEmailAddressVerification({
          code: data.code,
        })
        
        if (completeSignUp.status !== "complete") {
          console.log(JSON.stringify(completeSignUp, null, 2))
          toast.error("Something went wrong, please try again.")
          return
        }

        if (completeSignUp.status === "complete") {
          await setActive({ session: completeSignUp.createdSessionId })



          const useAccountResult: any = await createUserAccount(completeSignUp)
          if (!useAccountResult) {
            toast.error("Something went wrong, please try again.")
            return
          }

          // redirect the user to the origin page
          router.push(`${window.location.origin}/`)
        }

      } catch (err) {
        catchClerkError(err)
      }
    })
  }

  return (
    <>
    
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Verification Code</FormLabel>
              <FormControl>
                <Input
                  placeholder="Code..."
                  {...field}
                  onChange={(e) => {
                    e.target.value = e.target.value.trim()
                    field.onChange(e)
                  }}
                />
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
          Create Account
          <span className="sr-only">Create Account</span>
        </Button>
      </form>
    </Form>
    </>
  )
}
