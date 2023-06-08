// export { default } from "next-auth/middleware";

// export const config = {
//   matcher: ["/about"],
// };

// =================================================================

import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    const isLoggedIn = req.nextauth;
    // console.log("========================", isLoggedIn);

  

    // const isLoggedIn = !!req.nextauth.token;
    // console.log("========================", isLoggedIn);

    // if (!isLoggedIn && req.nextUrl.pathname.startsWith("/about")) {
    //   return NextResponse.redirect(new URL("/login", req.url));
    // }

    // if (isLoggedIn && req.nextUrl.pathname.startsWith("/login")) {
    //   return NextResponse.redirect(new URL("/home", req.url));
    // }
  },

  {
    callbacks: {
      authorized: ({ token, req }) => {
        // return !!token

        return true;
      },
    },
  }
);

export const config = { matcher: [
  "/about",
//  "/login"
] };
