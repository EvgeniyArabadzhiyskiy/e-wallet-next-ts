// import { Container } from "@/components/Container/Container.styled";
import LoginPageLayout from "@/components/LoginPageLayout/LoginPageLayout";
import { Section, Wrapper, 
  Container
 } from "../_components/LoginPage.styled";

// import stl from "./Login.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LoginPageLayout>{children}</LoginPageLayout>;
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

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className={stl.section}>
//       <div className={stl.container}>
//         <div className={stl.wrapper}>{children}</div>
//       </div>
//     </div>
//   );
// }
