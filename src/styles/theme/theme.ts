import { DefaultTheme } from "styled-components";
import { colors } from "./colors";
import { breakpoints } from "./breakpoints";

const commonTheme = {
  fonts: {
    body: "Circe-Regular, sans-serif",
    bodyBold: "Circe-Bold, sans-serif",
    heading: "Poppins-Regular, sans-serif",
    headingBold: "Poppins-Bold, sans-serif",
  },
  space: [0, 8, 12, 16, 20, 28, 36, 40, 60],
  fontSizes: {
    xs: "12px",
    s: "16px",
    m: "18px",
    ml: "28px",
    l: "30px",
    xl: "40px",
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
  },
  letterSpacings: {
    body: "0.1em",
  },
  borders: {
    none: "none",
    normal: "1px solid",
  },
  radii: {
    none: "0",
    normal: "4px",
    round: "50%",
    btn: "20px",
  },
  media: breakpoints,
};

export const dayTheme: DefaultTheme = {
  ...commonTheme,
  colors: colors.LIGHT,
};

export const nightTheme = {
  ...commonTheme,
  colors: colors.DARK,
};
