"use client";

import Link from "next/link";
import LoginForm from "@/components/LoginForm/LoginForm";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import {
  Section,
  Text,
  Wrapper,
  Container,
} from "../_components/LoginPage.styled";
import Statistic from "@/components/Statistic/Statistic";
// import { Container } from "@/components/Container/Container.styled";
import WrapperLogin from "@/components/WrapperLogin";
import Logo from "@/components/Logo/Logo";
import { Media, MediaContextProvider } from "@/lib/media";
import LoginPageLayout from "@/components/LoginPageLayout/LoginPageLayout";

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

// export default function LoginPage() {
//   // await wait(5000)
//   // const res = await fetch(
//   //   "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
//   // );
//   // const { results } = await res.json();

//   return (
//     <>
//         <Logo  />
//         <Link href="/">HOME</Link>
//         <Statistic pokemons={results} />
//     </>
//   );
// }

export default function LoginPage() {
  const session = useSession()
  // console.log("LoginPage session:", session.data);

  if (session.status === 'loading' ) {
    return <h1>Session loading ...</h1>
  }

  if (session.status === 'authenticated' ) {
    // redirect("/home");
  }

  return (

    <LoginPageLayout>
      <Link href="/">HOME</Link>
      <Text>Login Page</Text>

      <LoginForm />
    </LoginPageLayout>
  );
}
