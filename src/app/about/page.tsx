// "use client";

import AboutComp from "@/src/components/AboutComp/AboutComp";
import { LogoutButton } from "@/src/components/AuthButtons/AuthButtons";
import AuthCookie from "@/src/components/AuthCookie";
import LogoutBtn from "@/src/components/Buttons/LogoutBtn/LogoutBtn";
import { GlobalContext } from "@/src/components/GlobalProvider/GlobalProvider";
import Header from "@/src/components/Header/Header";
import ModalBox from "@/src/components/ModalWindow/ModalBox";
import ModalLogOut from "@/src/components/ModalLogOut/ModalLogOut";
import ModalSignUp from "@/src/components/ModalSignUp";
import ModalWindow from "@/src/components/ModalWindow/ModalWindow";
import TestCookies from "@/src/components/TestCookies";
import { authOptions } from "@/src/lib/auth";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import Link from "next/link";
import { Suspense, useContext } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { Inter, Fira_Code } from "next/font/google";
import Navigation from "@/src/components/Navigation/Navigation";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});

export default function AboutPage() {
  // const session = await getServerSession(authOptions);
  // console.log("AboutPage  session:", session);

  // const cookieStore = cookies();
  // const authToken = cookieStore.get("authToken")?.value;
  // console.log("AboutPage  authToken:", authToken);

  return (
    <>
      <main>
        <Header />
        <h1>Next Font</h1>
        <Navigation />

        <AuthCookie />

        {/* </TestCookies> */}
        {/* <AboutComp session={session} /> */}
      </main>

      <ModalBox modalName="logout">
        <ModalLogOut />
      </ModalBox>

      {/* <ModalBox modalName="signup">
          <ModalSignUp />
        </ModalBox>
        <LogoutBtn modalName="signup" type="exit" /> */}
    </>
  );
}
