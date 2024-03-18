import { createTRPCRouter } from "../trpc";
import { accountRouter } from "./account";
import { postRouter } from "./post";
import { userRouter } from "./user";
import { subsiteRouter } from "./subsite";

export const appRouter = createTRPCRouter({
  posts: postRouter,
  accounts: accountRouter,
  users: userRouter,
  subsites: subsiteRouter,
});

export type AppRouter = typeof appRouter;