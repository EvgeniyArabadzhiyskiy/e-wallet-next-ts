import { fetcher } from "@/src/helpers/fetcher";
import { getMinAndMaxTimestamps } from "@/src/helpers/getMinAndMaxTimestamps";
import { getQueryString } from "@/src/helpers/getQueryString";
import { IStatPeriod, IStatistic } from "@/src/types/statistics";
import prisma from "../../lib/prismaClient";

export const getStatistics = async (
  userID: string,
  month: string = "",
  year: string = ""
) => {
  if (month && !year) {
    year = "2020";
  }

  const { minTimestamps, maxTimestamps } = getMinAndMaxTimestamps({
    month,
    year,
  });

  const statistics = await prisma.transaction.groupBy({
    by: ["category", "typeOperation"],

    where: {
      owner: userID,
      timestamps: {
        gte: minTimestamps,
        lte: maxTimestamps,
      },
    },

    _sum: {
      amount: true,
    },

    orderBy: {
      category: "asc",
    },
  });

  const result = statistics.map((el) => {
    const { _sum, category, typeOperation } = el;

    return {
      _id: category,
      totalSum: _sum.amount || 0,
      type: typeOperation,
    };
  });

  return result;

  // const statistics = await prisma.transaction.aggregateRaw({
  //   pipeline: [
  //     {
  //       $match: {
  //         owner: { $oid: userID },
  //         timestamps: { $gte: minTimestamps, $lte: maxTimestamps },
  //       },
  //     },

  //     {
  //       $group: {
  //         _id: "$category",
  //         totalSum: { $sum: "$amount" },
  //         type: { $first: "$typeOperation" },
  //       },
  //     },

  //     { $sort: { category: 1 } },
  //   ],
  // });

  // return statistics;
};




// export const getStatistics = async (token: string | undefined, { month, year }: IStatPeriod ) => {
//   const options: RequestInit = {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   return await fetcher<IStatistic[]>(`${getQueryString({ month, year })}`, options);
// };
