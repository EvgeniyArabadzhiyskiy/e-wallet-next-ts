"use client";

import { Button } from "./CrossBtn.styled";
import CrossSvg from "../../SvgComponent/CrossSvg";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  width?: number;
  height?: number;
}

function CrossBtn({ color, width = 18, height = 18, ...allProps }: IProps) {
  return (
    <Button type="button" {...allProps}>
      <CrossSvg width={width} height={height} color={color} />
    </Button>
  );
}

export default CrossBtn;
