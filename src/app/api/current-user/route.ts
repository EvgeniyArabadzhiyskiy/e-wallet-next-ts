import { verifyToken } from "@/src/helpers/verifyToken";
import { TRPCError } from "@trpc/server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prismaClient";
import { getAllTransactions } from "@/src/apiWallet/transaction";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  const body = (await req.json()) as { token: string | undefined };
  // console.log("POST  body:", body);
  const { JWT_SECRET_KEY = "" } = process.env;
  const accessToken = body.token;

  if (!accessToken) {
    // throw new TRPCError({ code: "UNAUTHORIZED" });
    return NextResponse.json(null);
  }

  try {
    const data = jwt.verify(accessToken, JWT_SECRET_KEY);

    if (data && typeof data !== "string") {
      const userID = data.id as string;

      const user = await prisma.user.findFirst({
        where: {
          id: userID,
        },
      });

      if (!user) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      return NextResponse.json(!!user.token);
    }

    return data;
  } catch (error) {
    // throw error;
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You need to LOG IN",
    });
  }
}
