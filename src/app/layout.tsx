import { Metadata } from "next";
import StyledComponentsRegistry from "../lib/registry";
import "../styles/globals.css";
import "../styles/rdt-styles.css"; // Styles React Date Time
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Fonts from "../lib/FontsFamily";
import Providers from "../components/Providers";
import Spiner from "../components/Spiner";

export const metadata: Metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

interface IProps {
  children: React.ReactNode;
}

function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://www.googleapis.com" />
        <link rel="preconnect" href="https://oauth2.googleapis.com" />

        <link rel="dns-prefetch" href="https://www.googleapis.com" />
        <link rel="dns-prefetch" href="https://oauth2.googleapis.com" />
        <Fonts />
      </head>
      <body>
        {/* <Spiner /> */}
        <Providers>
          <StyledComponentsRegistry>
            <div id="transition-element"
            style={{transform: "translateX(-100%)"}}
            >
              {children}
            </div>
          </StyledComponentsRegistry>
        </Providers>
        <div id="modal-root"></div>
        <div id="fixed-button"></div>
      </body>
    </html>
  );
}

export default RootLayout;
