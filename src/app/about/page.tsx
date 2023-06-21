import AboutComp from "@/src/components/AboutComp/AboutComp";
import { LogoutButton } from "@/src/components/AuthButtons/AuthButtons";
import AuthCookie from "@/src/components/AuthCookie";
import TestCookies from "@/src/components/TestCookies";
import { authOptions } from "@/src/lib/auth";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";

export default async function AboutPage() {
  // const session = await getServerSession(authOptions);
  // console.log("AboutPage  session:", session);

  // const cookieStore = cookies();
  // const authToken = cookieStore.get("authToken")?.value;
  // console.log("AboutPage  authToken:", authToken);

  
  return (
    <main>
      <Link href="/">HOME</Link>
      {/* <h1>Cookies{authToken}</h1> */}
      {/* <TestCookies> */}
     

        <AuthCookie />
      
      {/* </TestCookies> */}
      <LogoutButton />
      {/* <AboutComp session={session} /> */}
    </main>
  );
}
