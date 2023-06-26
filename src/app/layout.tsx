import { Metadata } from "next";
import StyledComponentsRegistry from "../lib/registry";
import "modern-normalize";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { Providers } from "../components/Providers/Providers";
import AuthMenu from "../components/AuthMenu/AuthMenu";

import { mediaStyles } from "../lib/media";
import AuthProvider from "../components/AuthProvider/AuthProvider";
import GlobalProvider from "../components/GlobalProvider/GlobalProvider";
import { Inter, Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

// const poppi = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   display: "swap",
//   variable: "--global-font"
//   // preload: true
// });
// console.log("poppi:", poppi);

interface IProps {
  children: React.ReactNode;
}

async function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/vercel.svg" />
        {/* <style type="text/css" dangerouslySetInnerHTML={{ __html: mediaStyles }}/> */}
      </head>
      <body>
        <div id="modal-root"></div>
        <GlobalProvider>
          <Providers>
            {/* <AuthMenu /> */}
            {/* <AuthProvider> */}
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            {/* </AuthProvider> */}
          </Providers>
        </GlobalProvider>
      </body>
    </html>
  );
}

export default RootLayout;
