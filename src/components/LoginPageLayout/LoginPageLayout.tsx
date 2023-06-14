import Container from "../Container/Container";
import stl from "./LoginPageLayout.module.scss";

export default function LoginPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={stl.section}>
      <Container>
        <div className={stl.wrapper}>
          {children}
        </div>
      </Container>
    </div>
  );


  // return (
  //   <div className="section" >
  //     <Container>
  //       <div className="wrapper" >
  //         {children}
  //       </div>
  //     </Container>
  //   </div>
  // );
}
