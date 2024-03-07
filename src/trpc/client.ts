import type { AppRouter } from "@/server";
import { createTRPCReact } from "@trpc/react-query";

// api is a new instance of a trpc client using react-query
export const api: ReturnType<typeof createTRPCReact<AppRouter>> = createTRPCReact<AppRouter>();
