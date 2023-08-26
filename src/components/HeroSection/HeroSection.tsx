"use client";

import stl from "./HeroSection.module.scss";
import Container from "../Container/Container";
import LinkButton from "../Buttons/LinkButton/LinkButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/auth";
import Image from "next/image";

import Finance from "../../../public/images/ffaa.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 100%;
  height: 300px;

  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url("/images/finance-13.webp");

    /* url("/images/finance-13.webp"); */
    /* url("/images/finance-6.webp"); */
    /* url("/images/finance-9.webp"); */
    /* url("/images/finance-3.webp"); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Wrapper2 = styled.div`
  position: relative;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 100%;
  height: 300px;

  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url("/images/finance-6.webp");

    /* url("/images/finance-13.webp"); */
    /* url("/images/finance-9.webp"); */
    /* url("/images/finance-3.webp"); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Wrapper3 = styled.div`
  position: relative;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 100%;
  height: 300px;

  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url("/images/finance-9.webp");

    /* url("/images/finance-13.webp"); */
    /* url("/images/finance-6.webp"); */
    /* url("/images/finance-3.webp"); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Wrapper4 = styled.div`
  position: relative;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 100%;
  height: 300px;

  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url("/images/finance-3.webp");

    /* url("/images/finance-13.webp"); */
    /* url("/images/finance-6.webp"); */
    /* url("/images/finance-9.webp"); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const InnerWrapper = styled.div`
  width: 200px;
  height: 120px;

  background: url("/images/ffaa.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Item = styled.li`
  width: 100%;
  /* display: flex; */
  /* height: 400px; */
  /* padding: 20px; */

  color: #a1a1aa;

  border: 3px solid #064e3b;
  border-radius: 10px;

  overflow: hidden;

  @media (min-width: 1280px) {
    width: calc(100% / 2 - 50px);
  }

  /* background: url("/images/ffaa.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
`;

async function HeroSection() {
  // const session = await getServerSession(authOptions);

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
              // session
              //  ? <LinkButton href="/home/transactions" text="Wallet" />
              //  :
              <LinkButton href="/login" text="Start in 30 seconds" />
            }
          </div>
          <div>
            <div className={stl.banner}></div>
          </div>

          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              rowGap: 50,
              justifyContent: "space-around",
            }}
          >
            <Item>
              <Wrapper>
                {/* <InnerWrapper> */}
                {/* <Image src={Finance} alt="img" fill style={{objectFit: 'cover'}} /> */}
                {/* </InnerWrapper> */}
              </Wrapper>
              <div style={{ padding: "10px 20px 20px 20px" }}>
                <h1 style={{ fontSize: 20, marginBottom: 10 }}>
                  Your Financial Picture in One Place
                </h1>
                <p>
                  Track your balance, payments, and transfers with the
                  convenience of our app.
                </p>
              </div>
            </Item>

            <Item>
              <Wrapper2></Wrapper2>
              <div style={{ padding: "10px 20px 20px 20px" }}>
                <h1 style={{ fontSize: 20, marginBottom: 10 }}>
                  Manage Your Money Hassle-Free
                </h1>
                <p>
                  Transaction reports and balance always at your fingertips, so
                  you can focus on what truly matters.
                </p>
              </div>
            </Item>

            <Item>
              <Wrapper3></Wrapper3>
              <div style={{ padding: "10px 20px 20px 20px" }}>
                <h1 style={{ fontSize: 20, marginBottom: 10 }}>
                  Control Your Finances with Ease
                </h1>
                <p>
                  Review your transaction history, whether it is payments,
                  transfers, or deposits, all in one place.
                </p>
              </div>
            </Item>

            <Item>
              <Wrapper4></Wrapper4>
              <div style={{ padding: "10px 20px 20px 20px" }}>
                <h1 style={{ fontSize: 20, marginBottom: 10 }}>
                  Real-Time Balance and Funds Movement
                </h1>
                <p>
                  Do not miss a beat – our E-Wallet will help you stay on top of
                  every transaction.
                </p>
              </div>
            </Item>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
