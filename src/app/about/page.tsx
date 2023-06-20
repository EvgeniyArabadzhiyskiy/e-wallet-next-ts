import AboutComp from "@/src/components/AboutComp/AboutComp";
import TestCookies from "@/src/components/TestCookies";
import { authOptions } from "@/src/lib/auth";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function AboutPage() {
  // const session = await getServerSession(authOptions);

  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken")?.value;
  // console.log("AboutPage  authToken:", authToken);

  
  return (
    <main>
      <Link href="/">HOME</Link>
      <h1>Cookies{authToken}</h1>
      <TestCookies />
      {/* <AboutComp session={session} /> */}
    </main>
  );
}
