"use client";

import styled from "styled-components";

export const PageTitle = styled.h2`
  font-size: 30px;
  font-weight: 400;
  color: white;
  margin: 20px 0;

  @media ${(p) => p.theme.media.large} {
    margin: 32px 0 20px 20px;
  }
`;

export const TableWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const ChartWrapper = styled.div`
  position: relative;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    min-width: 300px;
  }
`;

// "use client";

// import styled from "styled-components";

// export const PageTitle = styled.h2`
//   font-size: 30px;
//   font-weight: 400;
//   color: white;
//   margin: 20px 0;

//   @media ${(p) => p.theme.media.large} {
//     margin: 32px 0 20px 20px;
//   }
// `;

// export const TableWrapper = styled.div`
//   @media screen and (min-width: 768px) {
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-start;
//   }
// `;

// export const ChartWrapper = styled.div`

//   position: relative;
//   margin-bottom: 32px;
//   width: 90%;
//   padding-top: 90%;

//   &::before {
//     content: "";
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     border-radius: 50%;
//     border: 9vw solid #914242b3;
//     z-index: -1;

//     transform: translate(-50%, -50%);
//     top: 50%;
//     left: 50%;
//   }  

//    @media screen and (min-width: 768px) {
//     margin-bottom: 0;
//     width: 300px;
//     height: 300px;

//     &::before {
//       border: 45px solid #645b5b36;
//     }
//   }
  
//    position: relative;
//   margin: 0 auto;
//   margin-bottom: 32px;
//   width: 90%;
//   padding-top: 90%;

//   &::before {
//     content: "";
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     border-radius: 50%;
//     border: 10vw solid blue;

//     transform: translate(-50%, -50%);
//     top: 50%;
//     left: 50%;
//   }


// `;

// export const Circle = styled.div`
//   position: relative;
//   margin: 0 auto;
//   margin-bottom: 32px;
//   width: 90%;
//   padding-top: 90%;

//   &::before {
//     content: "";
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     border-radius: 50%;
//     border: 60px solid #914242b3;
//     z-index: -1;

//     transform: translate(-50%, -50%);
//     top: 50%;
//     left: 50%;
//   } 
// `;


