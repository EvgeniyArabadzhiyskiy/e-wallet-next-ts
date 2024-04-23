import { create } from "zustand";

interface IModalState {
  [key: string]: boolean;
}

interface IModalStore {
  isModalOpen: IModalState;
  setModalToggle: (key: string) => void;
}

export const useModalWindow = create<IModalStore>()((set) => ({
  isModalOpen: {},
  setModalToggle: (key) =>
    set((store) => {
      return {
        isModalOpen: {
          [key]: !store.isModalOpen[key],
        },
      };
    }),
}));
