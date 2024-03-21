import { toast } from 'sonner'
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
    const emailUrl: string | undefined = process.env?.NEXT_PUBLIC_REACT_EMAIL_URL ? process.env?.NEXT_PUBLIC_REACT_EMAIL_URL : undefined;
    if (!emailUrl) {
      console.log("Failed to send email >> NEXT_PUBLIC_REACT_EMAIL_URL is missing")
      return
    }
    const response = await fetch(emailUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to,
        subject,
        html: html,
      }),
    })

    if (response.status === 429) {
      const { error } = await response.json()
      if (showAlerts) {
        toast.error(error)
      }
      return
    }

    if (showAlerts) {
      toast.success('Email sent')
    }
  } catch (err) {
    console.error(err)
    if (showAlerts) {
      toast.error('There was a problem sending the email')
    }
  }
}
