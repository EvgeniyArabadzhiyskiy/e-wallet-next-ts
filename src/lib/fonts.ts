import { Inter, Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  variable: "--font-poppins",
  display: "swap",
});
console.log("poppins:", poppins.variable);

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  variable: "--font-inter",
  display: "swap",
});

// const poppin = localFont({
//   src: [
//     {
//       path: "../../../public/fonts/Poppins-Regular.ttf",
//       weight: "400",
//     },
//     {
//       path: "../../../public/fonts/Poppins-Bold.ttf",
//       weight: "700",
//     },
//   ],
//   display: "swap",
// });

// const myFont = localFont({
//   src: "../../../public/fonts/Poppins-Regular.ttf",
//   weight: "400",
//   display: "swap",
// });
