import { TRPCError, initTRPC } from "@trpc/server";
import { TRPCNextContext } from "./context";
import { verifyToken } from "../helpers/verifyToken";

const t = initTRPC.context<TRPCNextContext>().create();

export const router = t.router;
const middleware = t.middleware;

const authMiddleware = middleware(async ({ ctx, next }) => {
  const nextCookies = ctx.req.cookies;

  const userID = await verifyToken(nextCookies);

  if (!userID) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next({
    ctx: {
      userID,
    },
  });
});

export const publicProcedure = t.procedure;
export const privateProcedure = publicProcedure.use(authMiddleware);
