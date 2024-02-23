import { verifyToken } from "@/src/helpers/verifyToken";
import { TRPCError } from "@trpc/server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prismaClient";

export async function POST(req: NextRequest) {
  const nextCookies = cookies();
  const userID = await verifyToken(nextCookies);

  const { page } = await req.json();

  const limit = 10;
  const skip = (page - 1) * limit;

  if (!userID) {
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

  const user = await prisma.user.findFirst({
    where: {
      id: userID,
    },
  });

  if (!user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  // const filtred = transactions.map((el) => {
  //   const { updatedAt, id, ...props } = el;
  //   const result = {
  //     _id: id,
  //     ...props,
  //   };
  //   return result;
  // });

  //   return {
  //     transactions: filtred,
  //     balance: user.balance,
  //   };

  return NextResponse.json({
    transactions,
    balance: user.balance,
  });
}
