import { verifyToken } from "@/src/helpers/verifyToken";
import { TRPCError } from "@trpc/server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prismaClient";
import { getAllTransactions } from "@/src/apiWallet/transaction";

export async function POST(req: NextRequest) {
  const nextCookies = cookies();
  const userID = await verifyToken(nextCookies);

  const { page } = await req.json();

  const limit = 10;
  const skip = (page - 1) * limit;

  const result = await getAllTransactions(limit, skip)

  return NextResponse.json(result);

  // if (!userID) {
  //   throw new TRPCError({ code: "UNAUTHORIZED" });
  // }

  // const transactions = await prisma.transaction.findMany({
  //   where: {
  //     owner: {
  //       equals: userID,
  //     },
  //   },
  //   orderBy: [{ timestamps: "desc" }, { createdAt: "desc" }],
  //   skip,
  //   take: limit,
  // });

  // const user = await prisma.user.findFirst({
  //   where: {
  //     id: userID,
  //   },
  // });

  // if (!user) {
  //   throw new TRPCError({ code: "UNAUTHORIZED" });
  // }


  // const serializedTransactions = transactions.map((el) => {
  //   return {
  //     ...el,
  //     timestamps: el.timestamps.toString(),
  //   };
  // });



  // return NextResponse.json({
  //   transactions: serializedTransactions,
  //   // userBalance: user.balance,
  // });
}
