import { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import "modern-normalize";
import "../styles/globals.css";

import { Providers } from "@/components/Providers/Providers";
import AuthMenu from "@/components/AuthMenu/AuthMenu";

import { mediaStyles } from "@/lib/media";

export const metadata: Metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

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
        <Providers>
          <AuthMenu />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
