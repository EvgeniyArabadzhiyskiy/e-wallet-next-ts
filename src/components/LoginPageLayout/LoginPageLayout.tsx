import Container from "../Container";
import stl from "./LoginPageLayout.module.scss";

export default function LoginPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={stl.background}>
        <h1 className={stl.background__title}>Wallet App</h1>
      </div>
      <div className={stl.section}>
        <Container>
          <div className={stl.wrapper}>{children}</div>
        </Container>
      </div>
    </>
  );
}
