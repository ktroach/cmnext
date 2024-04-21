'use client'

import React from 'react'
import { api } from '@/trpc/client'
import { redirect, useRouter } from 'next/navigation'
import { ClerkLoading, useSignUp } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'
import { catchClerkError } from '@/lib/clerk'
import { verfifyEmailSchema } from '@/validations/auth'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Icons } from '@/styles/icons'
import { toast } from 'sonner'
import {
  AttemptEmailAddressVerificationParams,
  SignUpResource,
} from '@clerk/types'
import { Skeleton } from '@/components/ui/skeleton'
import { getFrontendBaseUrl } from '@/lib/url'
import { sendEmail } from '@/lib/email'

type Inputs = z.infer<typeof verfifyEmailSchema>

export function VerifyEmailForm() {
  const router = useRouter()
  const { isLoaded, signUp, setActive } = useSignUp()
  const [isPending, startTransition] = React.useTransition()

  const createUserMutation = api.users.create.useMutation({
    onSuccess: (newUser: any) => {
      console.log('onSuccess >>> newUser >>> ', newUser)
    },
    onError: (error: any) =>
      toast('Failed to Create User', {
        duration: 2000,
        description: error.message,
      }),
  })

  const isCreatingUser = createUserMutation.isLoading

  const CreateUser = async (userName: any, userEmail: any) => {
    console.log('Entered: CreateUser')
    return await createUserMutation.mutateAsync({
      name: userName,
      email: userEmail,
    })
  }


  const createAccountMutation = api.accounts.create.useMutation({
    onSuccess: (newAccount) => {
      console.log('onSuccess >>> newAccount >>> ', newAccount)
    },
    onError: (error) =>
      toast('Failed to Create Account', {
        duration: 2000,
        description: error.message,
      }),
  })

  const isCreatingAccount = createAccountMutation.isLoading

  const CreateAccount = async (userName: any, adminId: any) => {
    console.log('Entered: CreateAccount')
    return await createAccountMutation.mutateAsync({
      name: userName,
      adminId: adminId,
    })
  }


  const createSubSiteMutation = api.subsites.create.useMutation({
    onSuccess: (newSubSite) => {
      console.log('onSuccess >>> newSubSite >>> ', newSubSite)
    },
    onError: (error) =>
      toast('Failed to Create Site!', {
        duration: 2000,
        description: error.message,
      }),
  })

  const isCreatingSubSite = createSubSiteMutation.isLoading

  const CreateSubSite = async (name: any, accountId: any) => {
    console.log('Entered: CreateSubSite')
    return await createSubSiteMutation.mutateAsync({
      name: name,
      accountId: accountId,
    })
  }

  const createUserAccount = async (signupResource: SignUpResource) => {
    const userEmail: unknown = signupResource?.emailAddress
      ? signupResource.emailAddress
      : undefined
    const userName: unknown = signupResource?.username
      ? signupResource.username
      : ''

    // we shouldn't run into this scenario
    if (!validateUser(userName, userEmail)) {
      return
    }

    const user = await CreateUser(userName, userEmail)
    console.log('after CreateUser >>> user >>> ', user)

    if (!user) {
      console.log(
        'There was a problem creating the user while signing up user: ',
        userName
      )
      toast('There was a problem signing up. Please try again.')
      return
    }

    /*
     * Now we need to create the account that is associated with the user
     * Account is used for grouping sites and blogs that the user creates.
     * Sites and blogs are hosted within this application on the same server.
     * We also need the Account model to store the subscription information and links to payment systems like stripe
     */
    const userId = user?.id ? user.id : undefined
    if (!userId) {
      console.log('No user.id returned for user ', userEmail)
      return
    }

    const userAccount = await CreateAccount(userName, userId)

    if (!userAccount) {
      console.log(
        'There was a problem creating the account while signing up user: ',
        userName
      )
      toast('There was a problem signing up. Please try again.')
      return
    }

    // TODO: Now create the initial Subsite for this User Account
    // This is where the Subsite Id is initially created for the user
    const userSubSite = await CreateSubSite(userAccount.name, userAccount.id)
    console.log('userSubSite: ', userSubSite)
    if (!userSubSite) {
      console.log(
        'There was a problem creating the Sub-Site while signing up user account: ',
        userAccount
      )
      toast('There was a problem signing up. Please try again.')
      return
    }

    toast('Account created. Thank you for joining!')

    toast.message('Hang tight while we generate your site...', {
      description: "This usually takes a few seconds.",
    })

    const baseUrl = getFrontendBaseUrl()
    const subRef = userSubSite?.subsiteRef ? userSubSite.subsiteRef : undefined
    const creatorUrl: string | undefined = baseUrl && subRef ? `${baseUrl}/publish/${subRef}` : undefined
    // Most likely this would not occur, but we handle this rare scenario as gracefully as we can 
    if (!creatorUrl) {
      // toast.error('There was a problem generating your site. Please check your email for further instructions.')
      toast.error('There was a problem generating your site.', {
        description: "Please check your email for further instructions.",
      })      
      return 
    }

   /***
     * TODO: Send Email to the new user: 
     * thank you for signing up, here is your 
     * Site's URL to start creating, here is 
     * how to get started create a blog, 
     * create a web page, create etc..
     */
    if (userEmail) {
      // TODO: Need Email Templates
      const emailBody = `<div><p>Thank you for joining! Here is </p><a href='${creatorUrl}'>Your Site URL</a></div>`
      console.log('emailBody: ', emailBody)
      await sendEmail(user.email, "Start Creating", emailBody, true)    
    }

    setTimeout(() => {
      // redirect(creatorUrl)
    }, 3000)
  }

  const validateUser = (username: unknown, email: unknown) => {
    if (!username) {
      console.log('Invalid user_name in user signup for ', email)
      return false
    }

    if (!email) {
      console.log('Invalid user_email in user signup for ', username)
      return false
    }
    return true
  }

  const form = useForm<Inputs>({
    resolver: zodResolver(verfifyEmailSchema),
    defaultValues: {
      code: '',
    },
  })

  function onSubmit(data: Inputs) {
    if (!isLoaded) return

    startTransition(async () => {
      try {
        const verificationParams: AttemptEmailAddressVerificationParams = {
          code: data.code,
        }
        const completeSignUp =
          await signUp.attemptEmailAddressVerification(verificationParams)

        if (completeSignUp.status !== 'complete') {
          console.log(JSON.stringify(completeSignUp, null, 2))
          toast.error('Something went wrong, please try again.')
          return
        }

        if (completeSignUp.status === 'complete') {
          await setActive({ session: completeSignUp.createdSessionId })
          const useAccountResult: any = await createUserAccount(completeSignUp)
          if (!useAccountResult) {
            toast.error('Something went wrong, please try again.')
            return
          }

          router.push(`${window.location.origin}/profile`)
        }
      } catch (err) {
        catchClerkError(err)
      }
    })
  }

  const handleGoBack = (ev: any) => {
    ev.stopPropagation()
    router.push(`${window.location.origin}/signup`)
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
          <ClerkLoading>
            <Skeleton className="h-10 w-full animate-pulse rounded-full" />
            <Skeleton className="h-10 w-10 animate-pulse rounded-full" />
          </ClerkLoading>
          <Button disabled={isPending}>
            {isPending ||
              isCreatingUser ||
              (isCreatingAccount && (
                <Icons.spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
              ))}
            Create Account
            <span className="sr-only">Create Account</span>
          </Button>

          <Button disabled={isPending} onClick={handleGoBack}>
            {isPending ||
              isCreatingUser ||
              isCreatingAccount ||
              (isCreatingSubSite && (
                <Icons.spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
              ))}
            Back to Signup
            <span className="sr-only">Back to Signup</span>
          </Button>
        </form>
      </Form>
    </>
  )
}
