import { lightTheme, darkTheme } from "../styles/theme/theme";
import "styled-components";

export type CustomTheme = typeof lightTheme & typeof darkTheme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}

