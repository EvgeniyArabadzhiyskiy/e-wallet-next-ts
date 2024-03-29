import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
import { TRPCError } from "@trpc/server";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export const verifyToken = async (
  cookies: NextRequest["cookies"] | ReadonlyRequestCookies
) => {
  const { JWT_SECRET_KEY = "" } = process.env;
  const accessToken = cookies.get("accessToken")?.value;

  if (!accessToken) return null;

  try {
    const jwtPayload = jwt.verify(accessToken, JWT_SECRET_KEY);

    if (jwtPayload && typeof jwtPayload !== "string") {
      return jwtPayload.id as string;
    }

    return jwtPayload;
  } catch (error) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You need to LOG IN",
    });
  }
};
