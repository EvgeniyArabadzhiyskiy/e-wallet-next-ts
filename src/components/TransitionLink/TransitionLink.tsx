"use client";

import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import { NavLink } from "./TransitionLink.styled";
import { ReactNode } from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
  $isActive: boolean;
  children: ReactNode;
}

const TransitionLink = ({ href, $isActive, children }: IProps) => {
  const router = useRouter();

  const handleClick = () => {
    gsap
      .timeline()
      .set("#transition-element", { translateX: "0%", delay: 0 })
      .to("#transition-element", { translateX: "100%", duration: 0.7 })
      .then(() => {
        router.push(href);
      });
  };
  return <NavLink $isActive={$isActive} onClick={handleClick}>{children}</NavLink>;
};

export default TransitionLink;
