// "use client"

import LoginPageLayout from "@/src/components/LoginPageLayout/LoginPageLayout";
import // Section,
// Wrapper,
// Container
"../_components/LoginLayout.styled";
import { Metadata } from "next";
// import { Container } from "@/components/Container/Container";

export const metadata: Metadata = {
  title: "Login Page",
  description: "Generated by Next.js",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LoginPageLayout>{children}</LoginPageLayout>;
  // return <>{children}</>;
}

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <Section>
//       <Container>
//         <Wrapper>{children}</Wrapper>
//       </Container>
//     </Section>
//   );
// }
