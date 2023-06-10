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
  typography,
  TypographyProps,
} from "styled-system";

  type BoxingProps = ColorProps &
    SpaceProps &
    LayoutProps &
    BorderProps &
    FlexboxProps &
    TypographyProps;



// interface BoxingProps {
//   ColorProps: ColorProps;
//   SpaceProps: SpaceProps;
//   LayoutProps: LayoutProps;
//   BorderProps: BorderProps;
//   FlexboxProps: FlexboxProps;
//   TypographyProps: TypographyProps;
// }

export const Box = styled.div<BoxingProps>(
  color,
  space,
  layout,
  border,
  flexbox,
  typography
);
