export const breakpointsValue = {
    sm: 0,
    md: 768,
    lg: 1280,
    // xlg:1440,
  };

  // export const breakpoints = {
  //   small: `${breakpointsValue.tablet - 0.1}px`,  // max 767
  
  //   medium: `${breakpointsValue.tablet}px`,       // min 768

  //   large: `${breakpointsValue.desctop}px`,       // min 1280
  // };
  
  export const breakpoints = {
    small: `(max-width: ${breakpointsValue.md - 0.1}px)`,  // max 767
  
    medium: `(min-width: ${breakpointsValue.md}px)`,       // min 768
  
    mediumToLarge: `(min-width: ${breakpointsValue.md}px) and (max-width: ${breakpointsValue.lg - 0.1}px)`,   // min 768 max 1279
  
    large: `(min-width: ${breakpointsValue.lg}px)`,       // min 1280
  };


//   export const LogoWallet = styled.img`
//   margin-right: 16px;

//   @media (min-width: ${props => props.theme.breakpoints.sm}) and (max-width: ${props => props.theme.breakpoints.lg}) {
//     margin-right: 20px;
//   }
// `;