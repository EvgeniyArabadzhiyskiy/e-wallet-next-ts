// import { NextResponse } from "next/server";
// import { withAuth } from "next-auth/middleware";

import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./helpers/verifyToken";
import { TRPCError } from "@trpc/server";

// export default withAuth(
//   function middleware(req) {
//     const isLoggedIn = !!req.nextauth.token;
//     console.log("middleware  isLoggedIn:", isLoggedIn);
//     console.log("middleware  req.nextUrl.pathname:", req.nextUrl.pathname);

//     const isAuthPage =
//       req.nextUrl.pathname.startsWith("/login") ||
//       req.nextUrl.pathname.startsWith("/register");

//     if (!isLoggedIn && !isAuthPage) {
//       return NextResponse.redirect(new URL("/login", req.url));
//     }

//     if (isLoggedIn && isAuthPage) {
//       return NextResponse.redirect(new URL("/", req.url));
//     }
//   },

//   {
//     callbacks: {
//       authorized: () => {
//         return true;
//       },
//     },
//   }
// );

// export const config = {
//   matcher: [
//     "/about",
//     "/home/transactions",
//     "/home/statistic",
//     "/login",
//     "/register",
//   ],
// };
const protectedPage = ["/home", "/home/statistic", "/home/transactions", "/cart"];

export async function middleware(req: NextRequest) {
  const { cookies, nextUrl } = req;
  const nextCookies = cookies.get("accessToken")?.value;

  const res = await fetch(`http://localhost:3000/api/current-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ token: nextCookies }),
  });

  const isLoggedIn = (await res.json()) as boolean | null;
  // console.log("Data================", nextUrl.pathname);

  // if (isLoggedIn && ["/login", "/register"].includes(nextUrl.pathname)) {
  //   return NextResponse.redirect(`http://localhost:3000/home/transactions`);
  // }


  const isAuthPage = ["/login", "/register"].includes(nextUrl.pathname);
  const isProtectedPage = protectedPage.includes(nextUrl.pathname);


  if (!isLoggedIn && isProtectedPage) {
    return NextResponse.redirect(`http://localhost:3000/login`);
    // return NextResponse.redirect(new URL("/login", url));
  }

  if (isLoggedIn && isAuthPage) {
    return NextResponse.redirect(`http://localhost:3000/home/transactions`);
    // return NextResponse.redirect(new URL("/home", url));
  }

  return NextResponse.next();
}
