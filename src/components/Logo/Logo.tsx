"use client";

import { usePathname } from "next/navigation";
import { useMedia } from "react-use";

import logo from "../../../public/images/logo.png";
import logoBig from "../../../public/images/logoBig.png";
import { LogoText, LogoWrap, ImgWrapper } from "./Logo.styled";
import Image from "next/image";

import { Media } from "@/src/lib/media";
import Link from "next/link";

function Logo() {
  const pathName = usePathname();
  const isLoginPage = pathName === "/login" || pathName === "/register";

  // const isDesctop = useMedia("(min-width: 768px)", false);
  // const isMobile = useMedia("(max-width: 767px)", false);

  return (
    <Link href="/home">

        <LogoWrap>
          <ImgWrapper>
            <Image  src={logo} alt="logo" fill sizes="(max-width: 1279px) 100vw" style={{objectFit: 'cover'}}   />
            {/* <Image  src={logo} alt="logo" width={30} height={30}   /> */}
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
