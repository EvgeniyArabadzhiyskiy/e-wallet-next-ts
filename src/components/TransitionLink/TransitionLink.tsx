"use client";

import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import { NavLink } from "./TransitionLink.styled";
import { ReactNode } from "react";
import { usePageTransition } from "@/src/hooks/useTimeLine";
import { useLoading } from "@/src/hooks/useModalWindow";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
  $isActive?: boolean | undefined;
  children: ReactNode;
}

const TransitionLink = ({ href, $isActive, children }: IProps) => {
  const router = useRouter();

  const tl = usePageTransition((state) => state.pageTimeline);

  const { setIsLoading } = useLoading();

  const handleClick = () => {
    // gsap.timeline()
      tl?.set("#transition-element", { translateX: "0%", delay: 0 })
      .to("#transition-element", { translateX: "100%", duration: 0.5 })
      // tl?.reversed(true)
      .then(() => {
        router.push(href);
      });
  };
  return <NavLink $isActive={$isActive} onClick={handleClick}>{children}</NavLink>;
};

export default TransitionLink;
