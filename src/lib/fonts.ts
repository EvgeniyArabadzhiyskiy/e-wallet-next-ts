import { Inter, Poppins, Fira_Code } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  variable: "--font-poppins",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  variable: "--font-inter",
  display: "swap",
});
