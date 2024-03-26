const z = require("zod");

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().optional(),
  DATABASE_URL: z.string().min(1),
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  CLERK_SECRET_KEY: z.string().min(1),
  VERCEL_ENV: z.string().optional(), 
  VERCEL_URL: z.string().optional(),
  NEXT_PUBLIC_VERCEL_URL: z.string().optional(),
});

const env = envSchema.parse({
  NEXT_PUBLIC_APP_URL: process.env?.NEXT_PUBLIC_APP_URL,  
  DATABASE_URL: process.env.DATABASE_URL,
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
  VERCEL_ENV: process.env?.VERCEL_ENV, 
  VERCEL_URL: process.env?.VERCEL_URL, 
  NEXT_PUBLIC_VERCEL_URL: process.env?.VERCEL_URL,   
});

module.exports = { env };