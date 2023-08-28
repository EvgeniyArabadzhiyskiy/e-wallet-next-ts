import styled from "styled-components";
import { Field, ErrorMessage } from "formik";

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 10px;

  border-bottom: 1px solid ${(p) => p.theme.palette.text.secondaryLightText};
`;

export const Input = styled(Field)`
  width: 80%;
  margin: 0 auto;

  padding: 5px 20px;
  border: ${(p) => p.theme.borders.none};
  outline: none;
  background-color: inherit;
  color: ${(p) => p.theme.colors.white};

  &::placeholder {
    color: ${(p) => p.theme.colors.secondaryText};
  }

  @media ${(p) => p.theme.media.medium} {
    width: 100%;
  }
`;

export const ErrorText = styled(ErrorMessage)`
  position: absolute;
  top: -20px;
  left: 2px;
  font-size: 14px;
  letter-spacing: 0.05em;
  color: #29ffd0;
  white-space: nowrap;
`;
