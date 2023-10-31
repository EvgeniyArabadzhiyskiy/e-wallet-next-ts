import stl from "./HeroSection.module.scss";
import Container from "../Container";
import LinkButton from "../Buttons/LinkButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/auth";
import Image from "next/image";
import { heroCardList } from "@/src/helpers/heroCardList";

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

            <div className={stl.link__wrapper}>
              {session
                ? <LinkButton href="/home/transactions" text="WALLET" maxWidth="300px" />
                : <LinkButton href="/login" text="START IN 30 SECONDS" maxWidth="300px" />
              }
            </div>
          </div>

          <div className={stl.banner}></div>

          <ul className={stl.card__list}>
            {heroCardList.map((item) => {
              return (
                <li className={stl.card} key={item.id}>
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={600}
                    height={375}
                  />

                  <div className={stl.card__title__wrapper}>
                    <h1 className={stl.card__title}>{item.title}</h1>
                    <p>{item.description}</p>
                  </div>
                </li>
              );
            })}     
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
