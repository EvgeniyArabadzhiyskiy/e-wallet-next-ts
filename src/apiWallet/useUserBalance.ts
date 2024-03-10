import { trpc } from "../trpc/client";

export const useUserBalance = () => {
  const queryData = trpc.transactionRouter.getBalance.useQuery(undefined, {
    select: (data) => data.userBalance,
  });

  return queryData;
};
