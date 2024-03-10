import { StyledLink } from "./LinkButton.styled";

interface IProps {
  href: string;
  text: string;
  maxWidth: string;
}

function LinkButton({ text, href, maxWidth }: IProps) {
  return (
    <StyledLink href={href} $maxWidth={maxWidth}>
      {text}
    </StyledLink>
  );
}

export default LinkButton;
