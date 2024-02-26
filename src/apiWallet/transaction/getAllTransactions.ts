import { fetcher } from "../../helpers/fetcher";
import { TRANSACTIONS } from "../../constants/apiPath";
import { ITransactions } from "../../types/transactions";
import { isITransactions } from "../../helpers/isITransactions";
import { cookies } from "next/headers";
import { verifyToken } from "@/src/helpers/verifyToken";
import { TRPCError } from "@trpc/server";
import prisma from "../../lib/prismaClient";

export const getAllTransactions = async (
  limit: number = 10,
  skip: number = 0
) => {
  const nextCookies = cookies();
  const userID = await verifyToken(nextCookies);

  if (!userID) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  const user = await prisma.user.findFirst({
    where: {
      id: userID,
    },
  });

  if (!user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  const transactions = await prisma.transaction.findMany({
    where: {
      owner: {
        equals: userID,
      },
    },
    orderBy: [{ timestamps: "desc" }, { createdAt: "desc" }],
    skip,
    take: limit,
  });

  const serializedTransactions = transactions.map((el) => {
    return {
      ...el,
      timestamps: el.timestamps.toString(),
    };
  });

  return {
    transactions: serializedTransactions,
  };

  // const filtred = transactions.map((el) => {
  //   const { updatedAt, id, ...props } = el;
  //   const res = {
  //     _id: id,
  //     ...props,
  //   };
  //   return res;
  // });

  // return {
  //   transactions: filtred,
  //   balance: user.balance,
  // };
};

// export const getAllTransactions =
// async (token: string | undefined, pageNum: number) => {
//   // await new Promise((res) => setTimeout(() => res(console.log("Promise resolve")), 1000));

//   const options: RequestInit = {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`
//     },
//     // cache: "no-store",
//   };

//   try {
//     const data = await fetcher<ITransactions>
//     (`${TRANSACTIONS}?page=${pageNum}&limit=10`, options);

//     if (!isITransactions(data)) {
//       throw new Error("Invalid data format");
//     }

//     return data;

//   } catch (error) {
//     console.log("Error:", (error as Error).message);
//     throw error
//   }
// }
