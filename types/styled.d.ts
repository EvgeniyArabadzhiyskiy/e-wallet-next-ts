import { dayTheme } from "@/styles/theme/theme";
import "styled-components";

type CustomTheme = typeof dayTheme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}

// declare module "styled-components" {
//   export interface DefaultTheme {
//     borderRadius: string;

//     colors: {
//       main: string;
//       secondary: string;
//       prymary: string;
//     };
//   }
// }
