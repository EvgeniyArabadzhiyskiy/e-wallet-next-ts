import { useGSAP } from "@gsap/react";
import { useModalWindow } from "./useModalWindow";
import { useTimeLine } from "./useTimeLine";

export const useAnimatedCloseModal = (modalName: string) => {
  const timeLine = useTimeLine((state) => state.timeline);
  const setModalToggle = useModalWindow((state) => state.setModalToggle);

  const { contextSafe } = useGSAP();

  return contextSafe(() => {
    timeLine?.reversed(timeLine !== undefined).then(() => {
      setModalToggle(modalName);
    });
  });
};
