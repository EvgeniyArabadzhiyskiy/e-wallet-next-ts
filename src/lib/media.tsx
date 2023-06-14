"use client";

import { createMedia } from "@artsy/fresnel";
import { breakpointsValue } from "../styles/theme/breakpoints";

const MyAppMedia = createMedia({
  breakpoints: breakpointsValue,
});

export const mediaStyles = MyAppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = MyAppMedia;
