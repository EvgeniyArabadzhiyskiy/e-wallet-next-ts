import { AUTH_GOOGLE, BASE_URL } from "@/src/constants/apiPath";
import Link from "next/link";
import styled from "styled-components";
import { baseBtnStyle } from "../DefaultButton.styled";
import GoogleSvg from "../../SvgComponent/GoogleSvg";

export const StyledLink = styled(Link)`
  ${baseBtnStyle}

  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #15275160;
  color: ${p => p.theme.colors.secondaryBtn};
  background-color: ${p => p.theme.colors.primaryBtn};
  border-bottom: 5px solid #15275160;
  transition: all 150ms linear;

  :hover,
  :focus {
    border-color: #31a1cd;
    border-bottom: 1px solid #3187cd;
    color: #3187cd;
  }
`;

export const GoogleLink = styled(StyledLink)`
  span {
    margin-top: 5px;
  }

  svg {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;


const GoogleAuthLink = () => {
    return (
      <GoogleLink as="a" href={`http://localhost:4001/api/auth-google/google`} rel="noreferrer">
        <GoogleSvg /> <span>GOOGLE</span>
      </GoogleLink>
    );
  };
  
  export default GoogleAuthLink;