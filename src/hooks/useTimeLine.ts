import { create } from "zustand";
import gsap from "gsap"
import React from "react";

interface IModalTransitionStore {
  timeline: gsap.core.Timeline | undefined;
  setTimeLine: (timeline: gsap.core.Timeline) => void;
}

export const useTimeLine = create<IModalTransitionStore>()((set) => ({
  timeline: undefined,
  setTimeLine: (timeline) => set((store) => ({ timeline: timeline })),
}));

interface IPageTransitionStore {
  // pageTimeline: gsap.core.Timeline | undefined;
  pageTimeline: gsap.core.Timeline;
  setPageTimeline: (pageTimeline: gsap.core.Timeline) => void;
}

export const usePageTransition = create<IPageTransitionStore>()((set) => ({
  pageTimeline:  gsap.timeline({paused: true}),
  // pageTimeline: undefined,
  setPageTimeline: (pageTimeline) => set((store) => ({ pageTimeline: pageTimeline })),
}));


interface IMountedStore {
  isMounted: boolean;
  setIsMounted: (isMounted: boolean) => void;
}

export const usePageMounted = create<IMountedStore>()((set) => ({
  isMounted: false,
  setIsMounted: (isMounted) => set((store) => ({ isMounted: isMounted })),
}));

interface IDisplayChildrenStore {
  displayChildren: React.ReactNode;
  setDisplayChildren: (displayChildren: React.ReactNode) => void;
}

export const usesetDisplayChildren = create<IDisplayChildrenStore>()((set) => ({
  displayChildren: null,
  setDisplayChildren: (displayChildren) => set((store) => ({ displayChildren: displayChildren })),
}));