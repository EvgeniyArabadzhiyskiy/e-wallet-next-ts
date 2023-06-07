"use client";

import { usePathname } from "next/navigation";
import { useEffectOnce, useMedia } from "react-use";

import logo from "../../public/images/logo.png";
import logoBig from "../../public/images/logoBig.png";
import Link from "next/link";
import { LogoBox, LogoLink, LogoText, Wrapper } from "./Logo.styled";
import Image from "next/image";
import { useState, useEffect } from "react";

import stl from "./Logo.module.scss";
import MobileOnly from "../MobileOnly/MobileOnly";
import DesctopOnly from "../DesctopOnly/DesctopOnly";
import Statistic from "../Statistic/Statistic";

import { Media } from "@/lib/media";

interface IProps {
  width: number;
  height: number;
}

function Logo() {
  const pathName = usePathname();
  const isLoginPage = pathName === "/login" || pathName === "/register";

  // const isDesctop = useMedia("(min-width: 768px)", false);
  // const isMobile = useMedia("(max-width: 767px)", false);

  return (
    <LogoBox>
      
      <LogoLink href="/">

        <Wrapper>
          <Image  src={logo} alt="logo" fill sizes="(max-width: 1279px) 100vw" style={{objectFit: 'cover'}}   />
        </Wrapper>

        <LogoText $isLoginPage={isLoginPage}>Wallet</LogoText>
        


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
        
      </LogoLink>
    </LogoBox>
  );
}

export default Logo;
