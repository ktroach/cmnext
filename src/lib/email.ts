"use client"

import { toast } from 'sonner'
import { RootConfig } from '@/config/root-config'
// TODO: Fix issue with deep-email-validator DNS 
// import { validate as validateEmail } from 'deep-email-validator'

export const isEmailValid = async (emailAddress: string) => {
  return true
  // return validateEmail({
  //   email: emailAddress,
  //   validateRegex: false,
  //   validateMx: false,
  //   validateTypo: false,
  //   validateDisposable: false,
  //   validateSMTP: false,
  // })
}

export const sendEmail = async (
  to: string,
  subject: string,
  html: string,
  showAlerts: boolean = false
) => {
  try {
    if (!process) { console.warn('sendEmail function has no access to the current process') }
    const emailProviderUrlEnv: string | undefined = process && process.env && process.env.NEXT_PUBLIC_REACT_EMAIL_URL ? process.env?.NEXT_PUBLIC_REACT_EMAIL_URL : undefined
    const emailProviderUrlConfig: string | undefined = RootConfig && RootConfig?.emailProviderUrl ? RootConfig.emailProviderUrl : undefined
    const emailProviderUrl: string | undefined = emailProviderUrlEnv ? emailProviderUrlEnv : emailProviderUrlConfig

    if (!emailProviderUrl) {
      console.log("Failed to send email >> NEXT_PUBLIC_REACT_EMAIL_URL is missing")
      return
    }

    const emailProviderResponse = await fetch(emailProviderUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to,
        subject,
        html: html,
      }),
    })

    if (emailProviderResponse.status === 429) {
      const { error } = await emailProviderResponse.json()
      if (showAlerts) {
        toast.error(error)
      }
      return
    }

    // TODO: Polish up this message to the User!
    if (showAlerts) {
      toast.success('Email sent')
    }
  } catch (err) {
    console.log('Failed to send email, exception caught: ', err)
    if (showAlerts) {
      toast.error('There was a problem sending the email')
    }
  }
}
