import { Suspense } from "react";
import stl from "./DashBoardLayout.module.scss";
import Currency from "../Currency/Currency";
import Container from "../Container";
import Navigation from "../Navigation";
import BalanceLoader from "../BalanceLoader";
import BalanceComponentWrapper from "../BalanceComponentWrapper";

export default async function DashBoardLayout({ children }: { children: React.ReactNode }) {

  return (
    <section className={stl.section}>
      <Container>
        <div className={stl.wrapper}>
          <aside className={stl.sidebar}>
            <div>
              <Navigation />
              <Suspense fallback={<BalanceLoader />}>
                <BalanceComponentWrapper />
              </Suspense>
            </div>
            <Currency />
          </aside>

          {children}
        </div>
      </Container>
    </section>
  );
}
