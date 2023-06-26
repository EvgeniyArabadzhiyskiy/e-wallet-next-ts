import { colors } from "./colors";
import { breakpoints } from "./breakpoints";
import { poppins } from "@/src/lib/fonts";

const commonTheme = {
  fonts: {
    // heading: "Poppins-Regular, sans-serif",
    headingBold: poppins.style.fontFamily,
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

export const lightTheme = {
  ...commonTheme,
  colors: colors.LIGHT,
  type: "light",
};

export const darkTheme = {
  ...commonTheme,
  colors: colors.DARK,
  type: "dark",
};
