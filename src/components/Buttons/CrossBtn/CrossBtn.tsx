import { Button } from "./CrossBtn.styled";
import CrossSvg from "../../SvgComponent/CrossSvg";

interface IProps {
  color?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function CrossBtn({ color, onClick, ...allProps }: IProps) {
  return (
    <Button type="button" onClick={onClick} {...allProps}>
      <CrossSvg width={18} height={18} color={color} />
    </Button>
  );
}

export default CrossBtn;
