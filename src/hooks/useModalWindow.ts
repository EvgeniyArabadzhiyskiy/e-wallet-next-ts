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


interface ISpinerStore {
  isLoading: boolean;
  setIsLoading: () => void;
}

export const useLoading = create<ISpinerStore>()((set) => ({
  isLoading: true,
  setIsLoading: () =>
    set((store) => {
      return {
        isLoading: !store.isLoading,
      };
    }),
}));
