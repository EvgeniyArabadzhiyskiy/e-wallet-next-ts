// "use client";

import Link from "next/link";
import LoginForm from "@/src/components/LoginForm/LoginForm";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

import Statistic from "@/src/components/Statistic/Statistic";
// import { Container } from "@/components/Container/Container.styled";
import WrapperLogin from "@/src/components/WrapperLogin";
import Logo from "@/src/components/Logo/Logo";
import { Media, MediaContextProvider } from "@/src/lib/media";
import LoginPageLayout from "@/src/components/LoginPageLayout/LoginPageLayout";
import { getUser } from "@/src/helpers/getUser";
import { cookies } from "next/headers";
import { AuthRequiredError } from "@/src/lib/authError";
import { parseCookies } from "nookies";
// import { useEffect } from "react";

export default async function LoginPage() {
  // throw new AuthRequiredError("Something Error")
  // const queryUserData = authToken && await getUser(authToken);

  return <LoginForm />;
}

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
