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
    const cookies = req.cookies;
    const authToken = cookies.get("authToken")?.value;
    console.log("middleware  authToken:", authToken);
    
    // console.log("========================", isLoggedIn);

    if (!isLoggedIn && req.nextUrl.pathname.startsWith("/home")) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (authToken && req.nextUrl.pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/home", req.url));
    }
  },

  {
    callbacks: {
      authorized: () => {
       return true
      },
    },
  }
);

export const config = { matcher: [
  "/about",
  "/home",
  "/login",
] };
