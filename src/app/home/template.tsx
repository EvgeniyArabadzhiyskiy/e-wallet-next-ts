"use client";

import { useGSAP } from "@gsap/react";
import { PropsWithChildren, useRef } from "react";
import gsap from "gsap";
import { usePageTransition } from "@/src/hooks/useTimeLine";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useLoading } from "@/src/hooks/useModalWindow";

export default function RootTemplate({ children }: PropsWithChildren) {
  const container = useRef<HTMLDivElement>(null);
 
  

  const setPageTimeline = usePageTransition(state => state.setPageTimeline);
  // const tl = usePageTransition((state) => state.pageTimeline);

  const { setIsLoading } = useLoading();

  // useGSAP(() => {
  //   // gsap.timeline()
    
  //   console.log("Inner");
    


  //   const tl = gsap.timeline();
  //   setPageTimeline(tl);

  //   tl.set("#transition-element", { translateX: "-100%", delay: 0 })
  //     .to("#transition-element", { translateX: "0%", duration: 0.5 })
  //     .then(() => {
  //       // setIsLoading();
  //     });

  // });

  return <>{children}</>;
}
