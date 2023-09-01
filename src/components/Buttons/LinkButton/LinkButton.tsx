import { StyledLink } from "./LinkButton.styled";

interface IProps {
  href: string;
  text: string;
  maxWidth: string;
}

const LinkButton: React.FC<IProps> = ({ text, href, maxWidth }) => {
  return <StyledLink href={href} $maxWidth={maxWidth} >{text}</StyledLink>;
};

export default LinkButton;
