// "use client";

import AboutComp from "@/src/components/AboutComp/AboutComp";
import { LogoutButton } from "@/src/components/AuthButtons/AuthButtons";
import AuthCookie from "@/src/components/AuthCookie";
import LogoutBtn from "@/src/components/Buttons/LogoutBtn/LogoutBtn";
import { GlobalContext } from "@/src/components/GlobalProvider/GlobalProvider";
import Header from "@/src/components/Header/Header";
import ModalBox from "@/src/components/ModalBox";
import ModalLogOut from "@/src/components/ModalLogOut/ModalLogOut";
import ModalSignUp from "@/src/components/ModalSignUp";
import ModalWindow from "@/src/components/ModalWindow/ModalWindow";
import TestCookies from "@/src/components/TestCookies";
import { authOptions } from "@/src/lib/auth";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import Link from "next/link";
import { Suspense, useContext } from "react";
// import { useState } from "react";
import { useServerInsertedHTML } from 'next/navigation';
import { Inter, Fira_Code } from "next/font/google";
 
const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  preload: true
});

export default  function AboutPage() {
  // const { isModalOpen, setIsModalOpen } = useContext(GlobalContext);

  // const session = await getServerSession(authOptions);
  // console.log("AboutPage  session:", session);

  // const cookieStore = cookies();
  // const authToken = cookieStore.get("authToken")?.value;
  // console.log("AboutPage  authToken:", authToken);

  // const onOpenModal = () => {
  //   // document.body.classList.toggle('open-modal')
  //   setIsOpen(true);
  // };

  // console.log("Page re-re");

  return (
    <>
      <main>
        <Link href="/">HOME</Link>
        <Header />
        <h1  >Next Font</h1>
        {/* <button type="button" onClick={() => setIsModalOpen(true)}>Open</button> */}
        {/* <button type="button" onClick={onOpenModal}>
          Open
        </button> */}
        {/* <h1>Cookies{authToken}</h1> */}
        {/* <TestCookies> */}

        {/* <AuthCookie /> */}

        {/* </TestCookies> */}
        {/* <LogoutButton /> */}
        {/* <AboutComp session={session} /> */}
        {/* {isOpen && <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen} />} */}
        <ModalBox modalName="logout">
          <ModalLogOut />
        </ModalBox>

        {/* <ModalBox modalName="signup">
          <ModalSignUp />
        </ModalBox>
        <LogoutBtn modalName="signup" type="exit" /> */}
      </main>
    </>
  );
}
