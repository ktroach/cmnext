import type { AppRouter } from "@/server";
import { createTRPCReact } from "@trpc/react-query";

export const api: ReturnType<typeof createTRPCReact<AppRouter>> = createTRPCReact<AppRouter>();
