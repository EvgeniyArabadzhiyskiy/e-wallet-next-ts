import axios from "axios";
import jwt from "jsonwebtoken";
import prisma from "../../../lib/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/`);
  }

  const { data } = await axios({
    url: "https://oauth2.googleapis.com/token",
    method: "POST",
    data: {
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      client_secret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.NEXT_PUBLIC_URL}/api/google-redirect`,
      grant_type: "authorization_code",
      code: code,
    },
  });

  const accessToken = data?.access_token as string;

  const userInfo = await axios
    .get("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((res) => res.data);

  let user = await prisma.user.findFirst({
    where: { email: userInfo.email },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        email: userInfo.email,
        password: "",
        firstName: userInfo.name,
      },
    });
  }

  const payload = { id: user.id };
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY!, {
    expiresIn: "14d",
  });

  await prisma.user.update({
    where: { id: user.id },
    data: { token: token },
  });

  const response = NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_URL}/home/transactions`
  );

  response.headers.set(
    "Set-Cookie",
    `accessToken=${token}; Max-Age=${60 * 60 * 24 * 14}; Path=/`
  );

  return response;
}
