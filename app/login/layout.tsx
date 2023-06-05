import LoginPageLayout from "@/components/LoginPageLayout/LoginPageLayout";
import {
  Section,
  Wrapper,
  // Container
} from "../_components/LoginPage.styled";
// import { Container } from "@/components/Container/Container";

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
