import stl from "./HeroSection.module.scss";
import Container from "../Container/Container";
import LinkButton from "../Buttons/LinkButton/LinkButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/auth";

async function HeroSection() {
  const session = await getServerSession(authOptions);

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

            {session 
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
