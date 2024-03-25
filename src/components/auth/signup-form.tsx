'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { useSignUp } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { z } from 'zod'
import { catchClerkError } from '@/lib/clerk'
import { authSchema } from '@/validations/auth'
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
import { PasswordInput } from '@/components/secure/password-input'
import { SignUpResource } from '@clerk/types'
import { useUserSignUpStore } from '@/stores/user'
import { UserSignUpType } from '@/types'
import { generateFromEmail } from 'unique-username-generator'
// import { isEmailValid } from '@/lib/email'

type Inputs = z.infer<typeof authSchema>

export function SignUpForm() {
  const router = useRouter()
  const { isLoaded, signUp } = useSignUp()
  const [isPending, startTransition] = React.useTransition()
  const [isError, setIsError] = React.useState(false)

  const signUpStore = useUserSignUpStore()

  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleEmailChange = (ev: any) => {
    setIsError(false)
  }

  const handlePasswordChange = (ev: any) => {
    setIsError(false)
  }

  function onSubmit(data: Inputs) {
    if (!isLoaded) return

    startTransition(async () => {
      try {
        const email: string | undefined = data?.email ? data.email : undefined

        if (!email) {
          console.log('email is required')
          return
        }

        // const { valid, reason, validators } = await isEmailValid(email)
        // console.log('valid: ', valid)
        // console.log('reason: ', reason)
        // console.log('validators: ', validators)
        // const validatorResults: any = validators ? validators : undefined 
        // if (!valid && reason && validatorResults) {
        //   const emailFailedMsg: string = validatorResults[reason] ? validatorResults[reason] : ""
        //   if (emailFailedMsg) {
        //     toast.error('Please provide a valid email address.', {description: emailFailedMsg, important: true})
        //     return
        //   }
        //   toast.error('Please provide a valid email address.', {description: emailFailedMsg, important: true})
        //   return
        // }

        const username = generateFromEmail(email)
        const signUpReturn: SignUpResource = await signUp.create({
          emailAddress: data.email,
          password: data.password,
          username: username,
        })

        const userSignUp: UserSignUpType = {
          username: signUpReturn.username,
          emailAddress: signUpReturn.emailAddress,
          createdSessionId: signUpReturn.createdSessionId,
          createdUserId: signUpReturn.createdUserId,
        }

        signUpStore.setUserSignUp(userSignUp)

        await signUp.prepareEmailAddressVerification({
          strategy: 'email_code',
        })

        router.push('/signup/verify-email')
        toast.message('Check your email', {
          description: 'We sent you a 6-digit verification code.',
        })
        setIsError(false)
      } catch (err) {
        setIsError(true)
        catchClerkError(err)
      }
    })
  }

  const disableButton = isError === true || isPending === true ? true : false

  return (
    <>
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
                  <Input
                    placeholder="example@domain.com"
                    {...field}
                    onChangeCapture={handleEmailChange}
                  />
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
                  <PasswordInput
                    placeholder="**********"
                    {...field}
                    onChangeCapture={handlePasswordChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={disableButton}>
            {isPending && (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Continue
            <span className="sr-only">Continue to email verification step</span>
          </Button>
        </form>
      </Form>
    </>
  )
}
