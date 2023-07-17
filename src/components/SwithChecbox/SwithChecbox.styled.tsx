"use client";

import styled from "styled-components";
import { Field } from "formik";

export const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: ${(p) => p.theme.space[4]}px;
  margin-bottom: ${(p) => p.theme.space[7]}px;

  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 24px;
  font-weight: 600;
`;

export const CheckBoxLabel = styled.label`
  position: relative;
  width: 80px;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
`;

export const CheckBox = styled(Field)`
  width: ${(p) => p.theme.space[4]}px;
  height: ${(p) => p.theme.space[4]}px;
  visibility: hidden;
`;

export const Switch = styled.p<{$isIncome: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -2px;
  left: -2px;

  width: 44px;
  height: 44px;
  border-radius: ${(p) => p.theme.radii.round};
  background-color: ${(p) => p.theme.colors.expense};
  transition: transform 300ms linear;

  background-color: ${(prop) => (prop.$isIncome ? "#24CCA7" : "#FF6596")};
  transform: ${(prop) =>
    prop.$isIncome ? "translateX(0)" : "translateX(40px)"};
`;

export const TextIncome = styled.p<{$isIncome: boolean}>`
  color: ${(prop) => (prop.$isIncome ? "#24CCA7" : "#e0e0e0")};
`;

export const TextExpense = styled.p<{$isExpense: boolean}>`
  color: ${(prop) => (prop.$isExpense ? "#ff6596" : "#e0e0e0")};
`;
