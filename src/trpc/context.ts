import { inferAsyncReturnType } from "@trpc/server";
import { NextRequest } from "next/server";

export const createTRPCContext = (req: NextRequest) => {
  return { req };
};

export type TRPCNextContext = inferAsyncReturnType<typeof createTRPCContext>;
