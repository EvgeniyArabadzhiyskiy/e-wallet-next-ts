"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LogoText, LogoWrap, ImgWrapper } from "./Logo.styled";

function Logo() {
  const pathName = usePathname();
  const isLoginPage = pathName === "/login" || pathName === "/register";

  return (
    <Link href="/">
      <LogoWrap>
        <ImgWrapper>
          <Image src="/images/logo.png" alt="logo" width={40} height={40} />
        </ImgWrapper>

        <LogoText $isLoginPage={isLoginPage}>Wallet</LogoText>
      </LogoWrap>
    </Link>
  );
}

export default Logo;
