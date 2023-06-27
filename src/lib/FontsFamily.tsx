"use client";

import { useServerInsertedHTML } from "next/navigation";
import { poppins } from "./fonts";

export default function Fonts() {
  useServerInsertedHTML(() => {
    return (
      <style
        dangerouslySetInnerHTML={{
          __html: `
      :root {
        --font-family:   ${poppins.style.fontFamily}, system-ui, -apple-system, 
        BlinkMacSystemFont, "Segoe UI", Roboto,  Oxygen, Ubuntu, Cantarell, 
        "Open Sans", "Helvetica Neue", sans-serif;
      }
    `,
        }}
      />
    );
  });

  return null;
}
