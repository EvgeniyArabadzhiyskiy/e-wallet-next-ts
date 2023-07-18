import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import {
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  Switch,
  TextExpense,
  TextIncome,
} from "./SwithChecbox.styled";

// import { ReactComponent as Plus } from "../../images/plus.svg";
// import { ReactComponent as Minus } from "../../images/minus.svg";

interface IProps {
  isIncome: boolean;
  onChangeSwitch: (e: any) => void;
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
