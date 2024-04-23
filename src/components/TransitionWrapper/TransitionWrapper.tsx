"use client";

import { useGSAP } from "@gsap/react";

import { PropsWithChildren, useRef } from "react";
import gsap from "gsap";

export default function TransitionWrapper({ children }: PropsWithChildren) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap
      .timeline()
      .set("#transition-element", { translateX: "-100%", delay: 0 })
      .to("#transition-element", { translateX: "0%", duration: 0.7 });
  });

  return (
    <div ref={container} className="transition-container">
      <div id="transition-element">{children}</div>
    </div>
  );
}
