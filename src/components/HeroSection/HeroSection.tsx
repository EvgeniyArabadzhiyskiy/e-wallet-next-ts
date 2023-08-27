// "use client";

import stl from "./HeroSection.module.scss";
import Container from "../Container/Container";
import LinkButton from "../Buttons/LinkButton/LinkButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/auth";
import Image from "next/image";

// import Finance1 from "@/public/images/finance-6.webp";
// import Finance2 from "@/public/images/finance-9.webp";
// import Finance3 from "@/public/images/finance-17.webp";
// import Finance4 from "@/public/images/finance-18.webp";


// import styled from "styled-components";

const heroCardList = [
  {
    id: "1",
    image: {
      src: "/images/finance-17.webp",
      alt: "image",
    },
    title: "Control Your Finances with Ease",
    description:
      "Review your transaction history, whether it is payments, transfers, or deposits, all in one place.",
  },
  {
    id: "2",
    image: {
      src: "/images/finance-6.webp",
      alt: "image",
    },
    title: "Your Financial Picture in One Place",
    description:
      "Track your balance, payments, and transfers with the convenience of our app.",
  },

  {
    id: "3",
    image: {
      src: "/images/finance-9.webp",
      alt: "image",
    },
    title: "Manage Your Money Hassle-Free",
    description:
      "Transaction reports and balance always at your fingertips, so you can focus on what truly matters.",
  },
  {
    id: "4",
    image: {
      src: "/images/finance-18.webp",
      alt: "image",
    },
    title: "Real-Time Balance and Funds Movement",
    description:
      "Do not miss a beat – our E-Wallet will help you stay on top of every transaction.",
  },
];



// const Wrapper = styled.div`
//   position: relative;
//   width: 100%;
//   padding: 30%;

//   background-image: url("/images/finance-9.webp");
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
// `;

// const Item = styled.li`
//   width: 100%;
//   border: 3px solid #064e3b;
//   border-radius: 10px;
//   color: #a1a1aa;
//   overflow: hidden;

//   @media (min-width: 1280px) {
//     width: calc(100% / 2 - 50px);
//   }
// `;

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

            {
              session
               ? <LinkButton href="/home/transactions" text="Wallet" />
               :
              <LinkButton href="/login" text="Start in 30 seconds" />
            }
          </div>
          <div>
            <div className={stl.banner}></div>
          </div>

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

            {/* <li className={stl.card}>
              <Image src={Finance4} alt="img" />
              <Wrapper></Wrapper>

              <div className={stl.card__title__wrapper}>
                <h1 className={stl.card__title}>
                  Your Financial Picture in One Place
                </h1>
                <p>
                  Track your balance, payments, and transfers with the
                  convenience of our app.
                </p>
              </div>
            </li>

            <li className={stl.card}>
              <Image src={Finance2} alt="img" />
              <Wrapper></Wrapper>

              <div className={stl.card__title__wrapper}>
                <h1 className={stl.card__title}>
                  Manage Your Money Hassle-Free
                </h1>
                <p>
                  Transaction reports and balance always at your fingertips, so
                  you can focus on what truly matters.
                </p>
              </div>
            </li>

            <li className={stl.card}>
              <Image src={Finance1} alt="img" />
              <Wrapper></Wrapper>
              <div className={stl.card__title__wrapper}>
                <h1 className={stl.card__title}>
                  Control Your Finances with Ease
                </h1>
                <p>
                  Review your transaction history, whether it is payments,
                  transfers, or deposits, all in one place.
                </p>
              </div>
            </li>

            <li className={stl.card}>
              <Image src={Finance3} alt="img" />
              <Wrapper></Wrapper>
              <div className={stl.card__title__wrapper}>
                <h1 className={stl.card__title}>
                  Real-Time Balance and Funds Movement
                </h1>
                <p>
                  Do not miss a beat – our E-Wallet will help you stay on top of
                  every transaction.
                </p>
              </div>
            </li> */}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
