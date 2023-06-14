import { StyledLink } from "./LinkButton.styled";

interface IProps {
  href: string;
  text: string;
}

const LinkButton: React.FC<IProps> = ({ text, href }) => {
  return <StyledLink href={href}>{text}</StyledLink>;
};

export default LinkButton;
