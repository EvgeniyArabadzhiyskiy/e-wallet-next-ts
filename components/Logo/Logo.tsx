// "use client";

import { usePathname } from "next/navigation";
import { useMedia } from "react-use";

import logo from "../../public/images/logo.png";
import logoBig from "../../public/images/logoBig.png";
import Link from "next/link";
import { LogoBox, LogoLink, LogoText } from "./Logo.styled";
import Image from "next/image";

import stl from "./Logo.module.scss";
import MobileOnly from "../MobileOnly/MobileOnly";
import DesctopOnly from "../DesctopOnly/DesctopOnly";
import Statistic from "../Statistic/Statistic";
import { Media } from "@/lib/media";



function Logo() {
    const pathName = usePathname();
  //   console.log("Logo  pathName:", pathName);

  const isDesctop = useMedia("(min-width: 768px)", false);
  const isMobile = useMedia("(max-width: 767px)", false);

    const isLoginPage = pathName === "/login" || pathName === "/register";
    console.log("Logo  isLoginPage:", isLoginPage);

  return (
    <LogoBox>
     

      {/* <MobileOnly>
        <div style={{width: "200px", height: "50px", background: "blue"}} ></div>
        <Image src={logo} width={30} height={30} alt="logo" />
      </MobileOnly> */}

      {/* <DesctopOnly mediaQuery={1280} >
        <Statistic />
        <div style={{width: "200px", height: "50px", background: "tomato"}} ></div>
        <Image src={logoBig} width={40} height={40} alt="logo" />
      </DesctopOnly> */}
      
      {/* <div className={stl.mobile}>
        <Image src={logo} width={30} height={30} alt="logo" />
        <div style={{width: "200px", height: "50px", background: "blue"}} ></div>
      </div> */}

      {/* <div className={stl.desctop}>
        <Image src={logoBig} width={40} height={40} alt="logo" />
        <div style={{width: "200px", height: "50px", background: "tomato"}} ></div>
      </div> */}
      
      <LogoLink href="/">
        {/* {isDesctop && (  
        <Image style={{marginRight: 16}} src={logoBig} width={40} height={40} alt="logo" /> 
        <div style={{width: "200px", height: "50px", background: "tomato"}} ></div>
        <Statistic />
        )}   */}

        {/* {isMobile && (
          <Image style={{marginRight: 16}} src={logo} width={30} height={30} alt="logo"  />
          <div style={{width: "200px", height: "50px", background: "blue"}} ></div>
        )} */}


        <Media at="mobile">
          <Image style={{marginRight: 16}} src={logo} width={30} height={30} alt="logo"  />
          {/* <div style={{width: "200px", height: "50px", background: "blue"}} ></div> */}
        </Media>

        <Media greaterThan="mobile">
          <Image style={{marginRight: 16}} src={logoBig} width={40} height={40} alt="logo" />
          {/* <div style={{width: "200px", height: "50px", background: "tomato"}} ></div> */}
        </Media>
        <LogoText isloginpage={'red'}>Wallet</LogoText>
      </LogoLink>

      {/* <style jsx>{`
        @media (max-width: 767px) {
          .mobile {
            display: block;
          }
          .desctop {
            display: none;
          }
        }

        @media (min-width: 768px) {
          .mobile {
            display: none;
          }
          .desctop {
            display: block;
          }
        }
      `}</style> */}
    </LogoBox>
  );

  // return <h1>LOGO</h1>
}

export default Logo;
