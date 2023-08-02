// export { default } from "next-auth/middleware";

// export const config = {
//   matcher: ["/home", "/about"],
// };

// =================================================================

import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    const isLoggedIn = !!req.nextauth.token;
    // console.log("========================", isLoggedIn);

    const isAuthPage =
      req.nextUrl.pathname.startsWith("/login") ||
      req.nextUrl.pathname.startsWith("/register");

    if (!isLoggedIn && !isAuthPage) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (isLoggedIn && isAuthPage) {
      return NextResponse.redirect(new URL("/home", req.url));
    }
  },

  {
    callbacks: {
      authorized: () => {
        return true;
      },
    },
  }
);

export const config = { matcher: ["/", "/about", "/home/transactions", "/home/statistic", "/login", "/register"] };


// import { NextRequest, NextResponse } from "next/server";

// export async function middleware(req: NextRequest) {
 
// }