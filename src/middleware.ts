import { NextRequest, NextResponse } from "next/server";

const authPage = ["/login", "/register"];
const protectedPage = [
  "/home",
  "/home/statistic",
  "/home/transactions",
  "/cart",
];

export async function middleware(req: NextRequest) {
  const { cookies, nextUrl } = req;
  const accessToken = cookies.get("accessToken")?.value;

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/current-user`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const { isLoggedIn } = (await res.json()) as { isLoggedIn: boolean };

  const isAuthPage = authPage.includes(nextUrl.pathname);
  const isProtectedPage = protectedPage.includes(nextUrl.pathname);

  if (!isLoggedIn && isProtectedPage) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/login`);
  }

  if (isLoggedIn && isAuthPage) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_URL}/home/transactions`
    );
  }

  return NextResponse.next();
}
