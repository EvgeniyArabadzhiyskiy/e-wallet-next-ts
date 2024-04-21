import { create } from "zustand";

interface ITimeLineStore {
  timeline: gsap.core.Timeline | undefined;
  setTimeLine: (timeline: gsap.core.Timeline) => void;
}

export const useTimeLine = create<ITimeLineStore>()((set) => ({
  timeline: undefined,
  setTimeLine: (timeline) => set((store) => ({ timeline: timeline })),
}));

interface IPageTransitionStore {
  pageTimeline: gsap.core.Timeline | undefined;
  setPageTimeline: (pageTimeline: gsap.core.Timeline) => void;
}

export const usePageTransition = create<IPageTransitionStore>()((set) => ({
  pageTimeline: undefined,
  setPageTimeline: (pageTimeline) => set((store) => ({ pageTimeline: pageTimeline })),
}));
