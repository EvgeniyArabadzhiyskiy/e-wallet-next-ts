"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logo from "../../../public/images/logo.png";
import { LogoText, LogoWrap, ImgWrapper } from "./Logo.styled";

import { Media } from "@/src/lib/media";

function Logo() {
  const pathName = usePathname();
  const isLoginPage = pathName === "/login" || pathName === "/register";

  return (
    <Link href="/">

        <LogoWrap>
          <ImgWrapper>
            <Image  src="/images/logo.png" alt="logo" width={40} height={40}    />
          </ImgWrapper>

          <LogoText $isLoginPage={isLoginPage}>Wallet</LogoText>
          
        </LogoWrap>
      {/* {isDesctop && (  
        <Image style={{marginRight: 16}} src={logoBig} width={40} height={40} alt="logo" /> 
        <div style={{width: "200px", height: "50px", background: "tomato"}} ></div>
        <Statistic />
        )}   */}

      {/* {isMobile && (
          <Image style={{marginRight: 16}} src={logo} width={30} height={30} alt="logo"  />
          <div style={{width: "200px", height: "50px", background: "blue"}} ></div>
        )} */}

      {/* <Media at="sm">
          <Image style={{marginRight: 16}} src={logo} width={30} height={30} alt="logo"  />
          <div style={{width: "200px", height: "50px", background: "blue"}} ></div>
          <Statistic  />
        </Media> */}

      {/* <Media greaterThan="sm">
          <Image style={{marginRight: 16}} src={logoBig} width={40} height={40} alt="logo" />
          <div style={{width: "200px", height: "50px", background: "tomato"}} ></div>
        </Media> */}
    </Link>
  );
}

export default Logo;
