import { router } from "./trpc";
import { authRouter } from "./routers/auth-router";
import { transactionRouter } from "./routers/transaction-router";
import { statisticRouter } from "./routers/statistic-router";

export const appRouter = router({
  authRouter: authRouter,
  transactionRouter: transactionRouter,
  statisticRouter: statisticRouter,
});

export type AppRouter = typeof appRouter;
