import z from "zod";
import { privateProcedure, router } from "../trpc";
import { getStatistics } from "@/src/apiWallet/statistic";

export const statisticRouter = router({
  getStatistic: privateProcedure
    .input(
      z.object({
        month: z.string(),
        year: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { userID } = ctx;
      let { month, year } = input;
      return await getStatistics(userID, month, year);
    }),
});
