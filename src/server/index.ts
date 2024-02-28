import { AppRouter } from "./api/router/root";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

export type { AppRouter } from "./api/router/root";
export { createTRPCContext } from "./api/trpc";

/**
 * Inference helpers for input types
 **/
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helpers for output types
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>;
