import { MouseEventHandler } from "react";
import { IconWrapper, OpenButton, StyledInput } from "./DateInput.styled";
import CalendarSvg from "../../SvgComponent/CalendarSvg";

interface IProps {
  props: any;
  onOpen: Function;
}

export default function DateInput({ props, onOpen }: IProps) {
  return (
    <IconWrapper>
      <StyledInput {...props} />
      <OpenButton type="button" onClick={onOpen as MouseEventHandler}>
        <CalendarSvg />
      </OpenButton>
    </IconWrapper>
  );
}
