import { statisticValidator } from "@/src/helpers/inputSchemas";
import { privateProcedure, router } from "../trpc";
import { getStatistics } from "@/src/apiWallet/statistic";
import { prismaControllerWrapper } from "@/src/helpers/prismaControllerWrapper";

export const statisticRouter = router({
  getStatistic: privateProcedure
    .input(statisticValidator)
    .query(async ({ ctx, input }) => {

      const { userID } = ctx;
      let { month, year } = input;

      return await prismaControllerWrapper(
        async () => await getStatistics(userID, month, year)
      );
    }),
});
