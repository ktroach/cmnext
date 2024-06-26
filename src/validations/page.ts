import * as z from "zod"

export const pageSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters long",
  }),
  description: z.string(),
  image: z.string(),
  body: z.string(),
  parentPage: z.string(),
})

