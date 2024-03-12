import { walletTheme } from "../styles/theme/theme";
import "styled-components";

export type CustomTheme = typeof walletTheme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
