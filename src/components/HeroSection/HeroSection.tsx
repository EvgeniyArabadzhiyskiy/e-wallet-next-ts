"use client"

import stl from "./HeroSection.module.scss";
import Container from "../Container/Container";
import LinkButton from "../Buttons/LinkButton/LinkButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/auth";
import { useGoogleAuth } from "@/src/hooks/useGoogleAuth";
import { useUser } from "@/src/hooks/useUser";

 function HeroSection() {
  // const session = await getServerSession(authOptions);

  const session = useUser()
  console.log("HeroSection  session:", session);

  useGoogleAuth()

  return (
    <div>
      <Container>
        <div className={stl.hero__flex__wrapper}>
          <div>
            <h1 className={stl.hero__title}>
              The best
              <span className={stl.hero__title__accent}> financial</span>
              <br />
              monitoring service
            </h1>
            <p className={stl.hero__subtitle}>
              Get your financial monitoring
              <span className={stl.hero__title__accent}> totally FREE</span>
            </p>

            {session.user 
             ? <LinkButton href="/home/transactions" text="Wallet" />
             : <LinkButton href="/login" text="Start in 30 seconds" />
            }
          </div>
          <div style={{ minHeight: "100vh" }}>
            <div className={stl.banner}></div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
