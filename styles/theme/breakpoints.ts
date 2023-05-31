const breakpointsValue = {
    mobile: 320,
    tablet: 768,
    desctop: 1280,
  };
  
  export const breakpoints = {
    small: `(max-width: ${breakpointsValue.tablet - 0.1}px)`,  // max 767
  
    medium: `(min-width: ${breakpointsValue.tablet}px)`,       // min 768
  
    mediumToLarge: `(min-width: ${breakpointsValue.tablet}px) and (max-width: ${breakpointsValue.desctop - 0.1}px)`,   // min 768 max 1279
  
    large: `(min-width: ${breakpointsValue.desctop}px)`,       // min 1280
  };