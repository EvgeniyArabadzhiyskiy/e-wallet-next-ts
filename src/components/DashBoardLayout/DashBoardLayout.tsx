

import Container from "../Container/Container";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import stl from "./DashBoardLayout.module.scss";

export default function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
      <div className={stl.section}>
        <Container>
          <div className={stl.wrapper}>
             <div className={stl.sidebar}>
              <Navigation />
             </div>
            
            {children}
            </div>
        </Container>
      </div>
    </>
  );
}