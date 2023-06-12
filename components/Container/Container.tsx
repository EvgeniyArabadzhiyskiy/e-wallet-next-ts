import stl from "./Container.module.scss";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className={stl.container}>{children}</div>;
  // return <div className="container" >{children}</div>;
}


// "use client"
// import styled from "styled-components";

// export const Container = styled.div`
//   margin: 0 auto;

//   @media screen and (max-width: 767px) {
//     max-width: 480px;
//   }

//   @media screen and (min-width: 768px) {
//     width: 768px;
//   }

//   @media screen and (min-width: 1280px) {
//     width: 1280px;
//   }
// `;

