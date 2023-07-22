import ReactSelect, {
  GroupBase,
  SingleValue,
  // Props,
} from "react-select";
import { Props } from "react-select/dist/declarations/src/Select";
// import Select from "react-select/dist/declarations/src/Select";
import { optionsExpense, optionsIncome } from "@/src/constants/selectOptions";
import { selectStyles } from "@/src/styles/selectStyles";
import { Dispatch,  SetStateAction, useMemo, useState } from "react";
import { OptionType } from "@/src/types/optionType";
import { FormikErrors } from "formik";
import { ITransactionValue } from "@/src/types/transactionValue";

interface IProps {
  isIncome: boolean;
  value: OptionType | null;
  setValue: Dispatch<SetStateAction<OptionType | null>>;

  setCategory: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<ITransactionValue<string>>>;

  // selectRef: RefObject<Select<OptionType, false, GroupBase<OptionType>>>;
}

function isOptionData(data: any): data is OptionType {
  return (
    data !== null &&
    typeof data === "object" &&
    typeof data.value === "string" &&
    typeof data.label === "string"
  );
}

// export default function SelectComponent({
//   isIncome,
//   setFieldValue,
//   selectRef,
// }: IProps) {

//   const onSelectChange = (data: unknown, eee) => {
//     console.log("onSelectChange  eee:", eee);

//     if (isOptionData(data)) {
//       setFieldValue("category", data.label);
//     }
//   };

//   return (
//     <ReactSelect
//       ref={selectRef}
//       name="category"
//       options={isIncome ? optionsIncome : optionsExpense}
//       placeholder="Select a category"
//       onChange={onSelectChange}
//       styles={selectStyles}
//     />
//   );
// }

export default function CustomSelect(
  // <Option = OptionType,
  //   IsMulti extends boolean = false,
  //   Group extends GroupBase<Option> = GroupBase<Option>>
  {
    value,
    setValue,
    isIncome,
    setCategory,
    //  setFieldValue, selectRef,
    // ...props
  }: IProps
) {

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
