import { createTRPCRouter } from "../trpc";
import { accountRouter } from "./account";
import { pagesRouter } from "./pages";
import { postRouter } from "./post";
import { subsiteRouter } from "./subsite";
import { userRouter } from "./user";

export const appRouter = createTRPCRouter({
  accounts: accountRouter,
  pages: pagesRouter,
  posts: postRouter,
  subsites: subsiteRouter,  
  users: userRouter,
});

export type AppRouter = typeof appRouter;