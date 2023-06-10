import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${p => p.theme.colors.secondaryLightText};

  padding-left: 10px;
`;

export const Input = styled(Field)`
  width: 100%;

  padding: 5px 20px;
  border: ${p => p.theme.borders.none};
  outline: none;
  background-color: inherit;
  color: ${p => p.theme.colors.white};

  ::placeholder {
    color: ${p => p.theme.colors.secondaryText};
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