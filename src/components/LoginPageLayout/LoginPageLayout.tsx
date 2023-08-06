import Container from "../Container/Container";
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
        {/* <div className={[stl.circle, stl.circle__1].join(" ")}></div>
        <div className={[stl.circle, stl.circle__2].join(" ")}></div>
        <div className={[stl.circle, stl.circle__3].join(" ")}></div>
        <div className={[stl.circle, stl.circle__4].join(" ")}></div> */}
      </div>
      <div className={stl.section}>
        <Container>
          <div className={stl.wrapper}>{children}</div>
        </Container>
      </div>
    </>
  );
}
