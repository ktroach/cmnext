import { toast } from 'sonner'

export const sendEmail = async (
  to: string,
  subject: string,
  html: string,
  showAlerts: boolean = false
) => {
  try {
    const emailUrl: string = 'https://react.email/api/send/test' //process.env.REACT_MAIL_URL;
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
