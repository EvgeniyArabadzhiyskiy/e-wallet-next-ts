import { ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import {
  Switch,
  CheckBox,
  TextIncome,
  TextExpense,
  CheckBoxLabel,
  CheckBoxWrapper,
} from "./SwithChecbox.styled";

interface IProps {
  isIncome: boolean;
  onChangeSwitch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SwithChecbox({ isIncome, onChangeSwitch }: IProps) {
  return (
    <CheckBoxWrapper>
      <TextIncome $isIncome={isIncome}>Income</TextIncome>
      <CheckBoxLabel>
        <CheckBox
          type="checkbox"
          name="typeOperation"
          role="switch"
          checked={isIncome}
          onChange={onChangeSwitch}
        />

        <Switch $isIncome={isIncome}>
          <FontAwesomeIcon icon={isIncome ? faPlus : faMinus} size="xl" color="white" />
        </Switch>
      </CheckBoxLabel>
      <TextExpense $isExpense={!isIncome}>Expense</TextExpense>
    </CheckBoxWrapper>
  );
}
