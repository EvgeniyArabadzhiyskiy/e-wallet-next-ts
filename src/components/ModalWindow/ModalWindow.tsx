"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

import { Overlay } from "./ModalWindow.styled";
import { useTimeLine } from "@/src/hooks/useTimeLine";
import { useAnimatedCloseModal } from "@/src/hooks/useAnimatedCloseModal";

interface IProps {
  modalName: string;
  children: React.ReactNode;
}

function ModalWindow({ children, modalName }: IProps) {
  const modalRoot: HTMLDivElement = document.querySelector("#modal-root")!;

  const setTimeLine = useTimeLine((state) => state.setTimeLine);

  const animatedCloseModal = useAnimatedCloseModal(modalName);

  const { contextSafe } = useGSAP(() => {
    const tl = gsap.timeline();
    setTimeLine(tl);

    tl.set("#overlay-element", { opacity: 0 })
      .set("#modal-element", { scale: 0.9 })
      .to("#overlay-element", { opacity: 1, duration: 0.5 })
      .to("#modal-element", { scale: 1, duration: 0.5 }, "<");
  }, [setTimeLine]);

  const onBackdropClick = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      animatedCloseModal();
    }
  });

  const onEscPress = contextSafe((e: KeyboardEvent) => {
    if (e.code === "Escape") {
      animatedCloseModal();
    }
  });

  useEffect(() => {
    window.addEventListener("keydown", onEscPress);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onEscPress);
      document.body.style.overflow = "unset";
    };
  });

  return createPortal(
    <Overlay id="overlay-element" onClick={onBackdropClick}>
      <div id="modal-element">{children}</div>
    </Overlay>,
    modalRoot
  );
}

export default ModalWindow;
