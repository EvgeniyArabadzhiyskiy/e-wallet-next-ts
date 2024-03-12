export const breakpointsValue = {
  sm: 0,
  md: 768,
  lg: 1280,
};

  
export const breakpoints = {
  small: `(max-width: ${breakpointsValue.md - 0.1}px)`,  // max 767

  medium: `(min-width: ${breakpointsValue.md}px)`,       // min 768

  mediumToLarge: `(min-width: ${breakpointsValue.md}px) and (max-width: ${breakpointsValue.lg - 0.1}px)`,   // min 768 max 1279

  large: `(min-width: ${breakpointsValue.lg}px)`,       // min 1280
};
// "styled-components": "6.0.0-beta.2",