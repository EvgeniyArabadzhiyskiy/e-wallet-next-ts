"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { LogoText, LogoWrap, ImgWrapper } from "./Logo.styled";
import { usePageTransition } from "@/src/hooks/useTimeLine";
import gsap from "gsap";

function Logo() {
  const pathName = usePathname();
  const isLoginPage = pathName === "/login" || pathName === "/register";

  const router = useRouter();
  const tl = usePageTransition((state) => state.pageTimeline);

  const handleClick = () => {
    tl?.play()
   .then(() => {
     router.push("/");
    });

    // tl?.set("#transition-element", { translateX: "0%", delay: 0 })
    //   .to("#transition-element", { translateX: "100%", duration: 0.5 })
    //   // tl?.reversed(true)
    //   .then(() => {
    //     router.push("/");
    //   });
  };

  return (
    // <Link href="/">
    <button onClick={handleClick} style={{backgroundColor: "transparent"}}>
      <LogoWrap>
        <ImgWrapper>
          <Image src="/images/logo.png" alt="logo" width={40} height={40} loading="eager"/>
        </ImgWrapper>

        <LogoText $isLoginPage={isLoginPage}>Wallet</LogoText>
      </LogoWrap>
    </button>
    // </Link>
  );
}

export default Logo;
