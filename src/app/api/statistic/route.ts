import { verifyToken } from "@/src/helpers/verifyToken";
import { TRPCError } from "@trpc/server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prismaClient";
import { getAllTransactions } from "@/src/apiWallet/transaction";

export async function GET(req: NextRequest) {
  const nextCookies = cookies();
  const userID = await verifyToken(nextCookies);

  if (!userID) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  const statistics = await prisma.transaction.groupBy({
    by: ["category", "typeOperation"],

    where: {
      owner: userID,
    
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

  return NextResponse.json(result);

  // return NextResponse.json({
  //   transactions: serializedTransactions,
  //   // userBalance: user.balance,
  // });
}
