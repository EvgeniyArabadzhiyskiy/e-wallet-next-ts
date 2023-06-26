import { Metadata } from "next";
import StyledComponentsRegistry from "../lib/registry";
// import "modern-normalize";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { Providers } from "../components/Providers/Providers";
import AuthMenu from "../components/AuthMenu/AuthMenu";

import { mediaStyles } from "../lib/media";
import AuthProvider from "../components/AuthProvider/AuthProvider";
import GlobalProvider from "../components/GlobalProvider/GlobalProvider";

import { poppins } from "../lib/fonts";
import { Inter } from "next/font/google";
import Fonts from "../lib/FontsFamily";

export const metadata: Metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

interface IProps {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});

async function RootLayout({ children }: IProps) {
  return (
    <html
      lang="en"
      //  className={poppins.variable}
    >
      <head>
        <link rel="icon" href="/vercel.svg" />
        {/* <style type="text/css" dangerouslySetInnerHTML={{ __html: mediaStyles }}/> */}
        <Fonts />
      
      </head>
      <body
      //  className={poppins.className}
      >
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
