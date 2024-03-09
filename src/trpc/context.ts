import { inferAsyncReturnType } from "@trpc/server";
import { NextRequest, NextResponse } from "next/server";

export const createTRPCContext = (req: NextRequest, res: NextResponse) => {
  return { req, res };
};

export type TRPCNextContext = inferAsyncReturnType<typeof createTRPCContext>;
