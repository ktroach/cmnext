import { createTRPCRouter } from "../trpc";
import { accountRouter } from "./account";
import { postRouter } from "./post";
import { userRouter } from "./user";

export const appRouter = createTRPCRouter({
  posts: postRouter,
  accounts: accountRouter,
  users: userRouter,
});

export type AppRouter = typeof appRouter;