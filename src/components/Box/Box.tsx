"use client";

import styled from "styled-components";

import {
  color,
  ColorProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  typography,
  TypographyProps,
} from "styled-system";

type BoxingProps = ColorProps &
  SpaceProps &
  LayoutProps &
  BorderProps &
  FlexboxProps &
  PositionProps &
  TypographyProps;

export const Box = styled.div.withConfig({
  shouldForwardProp: (prop) => {
    return !["mb", "mt", "position"].includes(prop);
  },
})<BoxingProps>(
  color,
  space,
  layout,
  border,
  flexbox,
  position,
  typography
);