import { colors } from "./colors";
import { breakpoints } from "./breakpoints";
import { inter, poppins } from "@/src/lib/fonts";

// const commonTheme = {
//   fonts: {
//     body: "Circe-Regular, sans-serif",
//     bodyBold: "Circe-Bold, sans-serif",
//     inter: inter.style.fontFamily,
//     poppins: poppins.style.fontFamily,
//   },
//   space: [0, 8, 12, 16, 20, 28, 36, 40, 60],
//   fontSizes: {
//     xs: "var(--font-xs)",
//     s: "var(--font-s)",
//     m: "var(--font-m)",
//     ml: "var(--font-ml)",
//     l: "var(--font-l)",
//     xl: "var(--font-xl)",
//   },
//   fontWeights: {
//     normal: "var(--normal)",
//     bold: "var(--bold)",
//   },
//   lineHeights: {
//     body: 1.5,
//   },
//   letterSpacings: {
//     body: "0.1em",
//   },
//   borders: {
//     none: "none",
//     normal: "1px solid",
//   },
//   radii: {
//     none: "0",
//     normal: "4px",
//     round: "50%",
//     btn: "20px",
//   },
//   media: breakpoints,
// };

export const walletTheme = {
  fonts: {
    body: "Circe-Regular, sans-serif",
    bodyBold: "Circe-Bold, sans-serif",
    inter: inter.style.fontFamily,
    poppins: poppins.style.fontFamily,
  },
  space: [0, 8, 12, 16, 20, 28, 36, 40, 60],
  fontSizes: {
    xs: "var(--font-xs)",
    s: "var(--font-s)",
    m: "var(--font-m)",
    ml: "var(--font-ml)",
    l: "var(--font-l)",
    xl: "var(--font-xl)",
  },
  fontWeights: {
    normal: "var(--normal)",
    bold: "var(--bold)",
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
  colors: colors,

  palette: {
    background: {
      primaryBg: colors.primaryBg,
      secondaryBg: colors.secondaryBg,
      loginPageBg: colors.loginPageBg,
    },

    text: {
      secondaryText: colors.secondaryText,
      secondaryDarkText: colors.secondaryDarkText,
      secondaryLightText: colors.secondaryLightText,
    },
  },
  // type: "light",
};

// export const darkTheme = {
//   ...commonTheme,
//   colors: {
//     ...defaultColors,
//     ...colors.DARK,
//   },
//   palette: {
//     background: {
//       primaryBg: colors.DARK.primaryBg,
//       secondaryBg: colors.DARK.secondaryBg,
//       loginPageBg: colors.DARK.loginPageBg,
//     },
//     text: {
//       secondaryText: colors.DARK.secondaryText,
//       secondaryDarkText: colors.DARK.secondaryDarkText,
//       secondaryLightText: colors.DARK.secondaryLightText,
//     },
//   },
//   type: "dark",
// };
