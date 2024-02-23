import { NextRequest } from "next/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/src/trpc";
import { createTRPCContext } from "@/src/trpc/context";

const handler = (req: NextRequest) => {
  return fetchRequestHandler({
    req,
    endpoint: "/api/trpc",
    router: appRouter,
    createContext: () => createTRPCContext(req),
  });
};

export { handler as GET, handler as POST };
