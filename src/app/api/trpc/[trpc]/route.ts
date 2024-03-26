import { getAuth } from "@clerk/nextjs/server";
import { appRouter } from "@/server/api/router/root";
import { createTRPCContext } from "@/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { type NextRequest } from "next/server";

// You need this to be "edge" runtime for production on vercel so that it can properly resolve the trpc endpoint:
// If this is not set, you will get the following Error: Failed to collect page data for /api/trpc/[trpc]
export const runtime = "edge";

const addCorsHeaders = (res: Response) => {
  res.headers.set("Access-Control-Allow-Origin", "*")
  res.headers.set("Access-Control-Request-Method", "*")
  res.headers.set("Access-Control-Allow-Methods", "OPTIONS, GET, POST")
  res.headers.set("Access-Control-Allow-Headers", "*")  
}

export const OPTIONS = () => {
  const response = new Response(null, {
    status: 204,
  });
  addCorsHeaders(response)
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

  addCorsHeaders(response)
  return response
}

export { handler as GET, handler as POST }