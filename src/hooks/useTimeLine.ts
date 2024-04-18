import { create } from "zustand";

interface ITimeLineStore {
  timeline: gsap.core.Timeline | undefined;
  setTimeLine: (timeline: gsap.core.Timeline) => void;
}

export const useTimeLine = create<ITimeLineStore>()((set) => ({
  timeline: undefined,
  setTimeLine: (timeline) => set((store) => ({ timeline: timeline })),
}));
