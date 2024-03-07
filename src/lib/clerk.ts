import { isClerkAPIResponseError } from "@clerk/nextjs"
import { toast } from "sonner"
import * as z from "zod"

export function catchClerkError(err: unknown) {
    const unknownErr = "Something went wrong, please try again later."
    console.log("Catch Clerk Error :>  ", err);
  
    if (err instanceof z.ZodError) {
      const errors = err.issues.map((issue) => {
        return issue.message
      })
      return toast(errors.join("\n"))
    } else if (isClerkAPIResponseError(err)) {
      console.log("Clerk API Response Error");

      const hasErrors = err && err?.errors ? err.errors?.length > 0 : false
      const firstError = hasErrors ? err.errors[0] : undefined
      const message = firstError && firstError?.message ? firstError.message : undefined
      const longMessage = firstError && firstError?.longMessage ? firstError.longMessage : undefined
      const errMessage = longMessage ? longMessage : message ?? unknownErr

      return toast.error(errMessage)
    } else {
      console.log("Uknown Error");      
      return toast.error(unknownErr)
    }
  }
  