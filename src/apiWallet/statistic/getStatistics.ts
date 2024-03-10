import prisma from "../../lib/prismaClient";
import { TRPCError } from "@trpc/server";
import { getMinAndMaxTimestamps } from "@/src/helpers/getMinAndMaxTimestamps";

export const getStatistics = async (
  userID: string | null,
  month: string = "",
  year: string = ""
) => {
  if (!userID) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

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
      id: category,
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
  //         id: "$category",
  //         totalSum: { $sum: "$amount" },
  //         type: { $first: "$typeOperation" },
  //       },
  //     },

  //     { $sort: { category: 1 } },
  //   ],
  // });

  // return statistics;
};
