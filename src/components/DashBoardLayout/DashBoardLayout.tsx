

import Container from "../Container/Container";
import Header from "../Header/Header";
import stl from "./DashBoardLayout.module.scss";

export default function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className={stl.section}>
        <Container>
          <div className={stl.wrapper}>{children}</div>
        </Container>
      </div>
    </>
  );
}