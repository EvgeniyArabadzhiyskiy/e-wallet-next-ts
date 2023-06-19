"use client";

import Link from "next/link";
import LoginForm from "@/src/components/LoginForm/LoginForm";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import {
  Section,
  Text,
  Wrapper,
  Container,
} from "../_components/LoginLayout.styled";
import Statistic from "@/src/components/Statistic/Statistic";
// import { Container } from "@/components/Container/Container.styled";
import WrapperLogin from "@/src/components/WrapperLogin";
import Logo from "@/src/components/Logo/Logo";
import { Media, MediaContextProvider } from "@/src/lib/media";
import LoginPageLayout from "@/src/components/LoginPageLayout/LoginPageLayout";

// import { useEffect } from "react";

// export default  function LoginPage() {
//   //   const res = await fetch(
//   //   "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
//   // );
//   // const { results } = await res.json();

//   // const session = useSession();
//   // console.log("AboutComp  session:", session.status);

//   // if (session.status === "loading") {
//   //   return <h1>Session loading ...</h1>;
//   // }

//   // if (session.status === "authenticated") {
//   //   // redirect("/home");
//   // }

//   return (
//     <Section>
//       <Container>
//         <Wrapper>
//           <Link href="/">HOME</Link>
//           <Text>Login Page</Text>

//           {/* <Statistic pokemons={results} /> */}

//           <LoginForm />
//         </Wrapper>
//       </Container>
//     </Section>
//   );

//   // return  <WrapperLogin pokemons={results} />
// }

const wait = async (time: number) => {
  return new Promise((res) => {
    setTimeout(() => {
      res("WORLD");
    }, time);
  });
};

// export default  function LoginPage() {
//   // await wait(5000)
//   const res = await fetch(
//     "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
//   );
//   const { results } = await res.json();

//   return (
//     <>
//         <Logo  />
//         <Link href="/">HOME</Link>
//         {/* <Statistic pokemons={results} /> */}
//     </>
//   );
// }

export default function LoginPage() {
  const session = useSession();
  // console.log("LoginPage session:", session.status);

  // if (session.status === "loading") {
  //   return <h1>Session loading ...</h1>;
  // }

  // if (session.status === "authenticated") {
  //   // redirect("/home");
  // }

  return <LoginForm />;
}