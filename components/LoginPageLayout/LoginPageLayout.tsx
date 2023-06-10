import Container from "../Container/Container";
import stl from "./LoginPageLayout.module.scss";

export default function LoginPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={stl.section}>
      <Container>
        <div className={stl.wrapper}>
          <h1 className={stl.title}>SASS</h1>
          {children}
        </div>
      </Container>
    </div>
  );


  // return (
  //   <div >
  //     <Container>
  //       <div >
  //         {children}
  //       </div>
  //     </Container>
  //   </div>
  // );
}
