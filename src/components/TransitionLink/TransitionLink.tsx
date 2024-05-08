"use client";

import { gsap } from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { NavLink } from "./TransitionLink.styled";
import { ReactNode } from "react";
import { usePageTransition } from "@/src/hooks/useTimeLine";
import { useLoading } from "@/src/hooks/useModalWindow";
import { useAnimation, useAnimate } from "framer-motion";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
  $isActive?: boolean | undefined;
  children: ReactNode;
}

const TransitionLink = ({ href, $isActive, children }: IProps) => {
  const router = useRouter();
  const pathName = usePathname();

  const tl = usePageTransition((state) => state.pageTimeline);
  // const setPageTimeline = usePageTransition(state => state.setPageTimeline);

  const { setIsLoading } = useLoading();
  const controls = useAnimation();
  const [scope, animate] = useAnimate()

  const handleClick = () => {
    // if (pathName === href) {
    //   return;
    // }

    // controls.start({ opacity: 0, transition: { duration: 5 } });

   

    // // tl?.play()
    // //   // gsap.to("#transition-element", { translateX: "100%", duration: 2})
    // //   // gsap.to("#transition-element", { opacity: 0, duration: 1 })

    // // .then(() => {
      // router.push(href);
    // //   tl.pause().clear();
    // // });

    // tl
    // ?.set("#transition-element", { translateX: "0%", delay: 0 })
    // .to("#transition-element", { translateX: "100%", duration: 0.5 })
    // // tl?.reversed(true)
    // .then(() => {
    //   router.push(href);
    // });
  };
  return (
    <NavLink $isActive={$isActive} onClick={handleClick}>
      {children}
    </NavLink>
  );
};

export default TransitionLink;
