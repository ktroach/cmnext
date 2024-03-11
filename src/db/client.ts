import { PrismaClient } from "./generated/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  /* eslint-disable-next-line no-var */
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prisma ?? prismaClientSingleton();

// If connection already exists, use existing connection
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

export * from "./generated/client";
