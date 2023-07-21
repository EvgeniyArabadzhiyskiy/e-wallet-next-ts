import ReactSelect, {
  ActionMeta,
  GroupBase,
  OnChangeValue,
  // Props,
} from "react-select";
import { Props } from "react-select/dist/declarations/src/Select";
// import Select from "react-select/dist/declarations/src/Select";
import { optionsExpense, optionsIncome } from "@/src/constants/selectOptions";
import { selectStyles } from "@/src/styles/selectStyles";
import { ITransactionValue } from "@/src/types/transactionValue";
import { FormikErrors } from "formik";
import { RefObject, useRef } from "react";
import { IOptionData } from "@/src/types/optionData";

interface IProps {
  isIncome: boolean;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<ITransactionValue<string>>>;

  // selectRef: RefObject<Select<unknown, boolean, GroupBase<unknown>>>;
}

function isOptionData(data: any): data is IOptionData {
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

interface OptionType {
  value: string;
  label: string;
}

const expense: OptionType[] = [
  { value: "main", label: "Main" },
  { value: "food", label: "Food" },
  { value: "auto", label: "Auto" },
  { value: "development", label: "Development" },
  { value: "children", label: "Children" },
  { value: "house", label: "House" },
  { value: "education", label: "Education" },
  { value: "other", label: "Other expenses" },
];

// Определите тип Group так, чтобы он включал в себя IOptionData
type GroupType = GroupBase<OptionType>;


// export default function CustomSelect<T>


export default function CustomSelect< Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>
// export default function CustomSelect< IsMulti extends boolean = false>
({isIncome, setFieldValue, ...props}: Props<Option, IsMulti, Group>   ) {
console.log("isIncome:", isIncome);


// const onChange = (option: OnChangeValue<Option, IsMulti>, actionMeta: ActionMeta<Option>) => {
// console.log("onChange  option:", option);

// }

  return (
    <ReactSelect
      {...props}
      theme={(theme) => ({ ...theme, borderRadius: 10 })}
      placeholder="Select a category"
      onChange={(option) => {
        console.log("onChange  option:", option?.label);
        
        }}
      options={[{value: "ds", label: "ad", user: 444, age: 34}]}
    />
  );
}
