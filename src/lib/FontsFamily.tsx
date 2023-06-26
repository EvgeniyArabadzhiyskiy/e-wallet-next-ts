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
        --font-family: '-apple-system',  ${poppins.style.fontFamily}, 'system-ui', 'Segoe UI', sans-serif;
      }
    `,
        }}
      />
    );
  });

  return null;
}
