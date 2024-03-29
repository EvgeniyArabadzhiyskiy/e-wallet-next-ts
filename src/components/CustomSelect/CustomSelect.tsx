import { FormikErrors } from "formik";
import { Dispatch,  SetStateAction } from "react";
import ReactSelect, { SingleValue } from "react-select";

import { selectStyles } from "@/src/styles/selectStyles";
import { OptionType } from "@/src/types/optionType";
import { optionsExpense, optionsIncome } from "@/src/constants/selectOptions";
import { TTransactionValues } from "@/src/helpers/formValidation";

interface IProps {
  isIncome: boolean;
  value: OptionType | null;
  setValue: Dispatch<SetStateAction<OptionType | null>>;

  setCategory: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<TTransactionValues>>;
}

export default function CustomSelect({ value, setValue, isIncome, setCategory }: IProps) {

  const onChange = (option: SingleValue<OptionType>) => {
    if (option) {
      setCategory("category", option.label)
      setValue({
        value: option.value,
        label: option.label,
      });
    }
  };

  return (
    <ReactSelect<OptionType>
      value={value}
      styles={selectStyles}
      placeholder="Select a category"
      options={isIncome ? optionsIncome : optionsExpense}
      onChange={onChange}
    />
  );
}
