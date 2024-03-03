import jwt from "jsonwebtoken";
import prisma from "../../../lib/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const { JWT_SECRET_KEY = "" } = process.env;

  if (!authHeader) {
    return NextResponse.json({ isLoggedIn: false });
  }

  const [bearer, accessToken] = authHeader.split(" ");

  try {
    const jwtPayload = jwt.verify(accessToken, JWT_SECRET_KEY);

    if (jwtPayload && typeof jwtPayload !== "string") {
      const userID = jwtPayload.id as string;

      const user = await prisma.user.findFirst({
        where: {
          id: userID,
        },
      });

      if (!user) {
        return NextResponse.json({ isLoggedIn: false });
      }

      return NextResponse.json({ isLoggedIn: true });
    }
  } catch (error) {
    return NextResponse.json({ isLoggedIn: false });
  }
}
