import { getAuth } from "@clerk/nextjs/server"
import { appRouter } from "@/server/api/router/root"
import { createTRPCContext } from "@/server"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import { type NextRequest } from "next/server"
import { SetCorsHeaders } from '@/lib/cors'

// You need this to be "edge" runtime for production on vercel so that it can properly resolve the trpc endpoint:
// If this is not set, you will get the following Error: Failed to collect page data for /api/trpc/[trpc]
export const runtime = "edge"

export const OPTIONS = () => {
  const response = new Response(null, {
    status: 204,
  });
  SetCorsHeaders(response)
  return response
}

const createContext = async (req: NextRequest) => {
  return createTRPCContext({
    headers: req.headers,
    auth: getAuth(req),
  })
}

const handler = async (req: NextRequest) => {
  const response = await fetchRequestHandler({
    endpoint: "/api/trpc",
    router: appRouter,
    req,
    createContext: () => createContext(req),
    onError:
      process.env.NODE_ENV === "development"
        ? ({ path, error }: any) => {
            console.error(
              `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
            );
          }
        : undefined,
  })

  SetCorsHeaders(response)
  return response
}

export { handler as GET, handler as POST }