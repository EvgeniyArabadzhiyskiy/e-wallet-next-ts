import { Button } from "./CrossBtn.styled";
import CrossSvg from "../../SvgComponent/CrossSvg";

interface IProps {
  color?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function CrossBtn({ color, onClick, ...props }: IProps) {
  return (
    <Button type="button" onClick={onClick} {...props}>
      <CrossSvg width={18} height={18} color={color} />
    </Button>
  );
}

export default CrossBtn;
