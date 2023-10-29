"use client";

import React, { useContext, useState } from "react";
import { createContext } from "react";

export interface ModalState  {
  [key: string]: boolean;
};

interface GlobalContextType {
  isModalOpen: ModalState;
  setModalToggle: (key: string) => void;
  
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export default function GlobalProvider({children}: {children: React.ReactNode}) {
  const [theme, setTheme] = useState("light");
  const [isModalOpen, setIsModalOpen] = useState<ModalState>({});

  const setModalToggle = (key: string) => {
    setIsModalOpen((prev: ModalState) => {
      return {
        ...prev,
        [key]: !prev[key],
      };
    });
  }

  return (
    <GlobalContext.Provider value={{ isModalOpen, setModalToggle,  theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalState = () => {
  const context = useContext(GlobalContext);

  if (context === undefined) {
    throw new Error('useGlobalStete must be used within a GlobalProvider');
  }

  return context
};

