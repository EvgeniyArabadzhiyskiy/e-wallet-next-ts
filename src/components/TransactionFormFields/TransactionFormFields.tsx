// import "../../styles/rdt-styles.css";  // обязательно в RootLayout иначе проблема при навигации страница не сразу грузится
import moment from "moment";
import Datetime from "react-datetime";
// import ReactSelect, { GroupBase, OptionProps } from "react-select";
// import Select from "react-select/dist/declarations/src/Select";

import { Box } from "../Box/Box";
import React, { Dispatch, SetStateAction,  useState } from "react";
import {
  DateWrapper,
  ErrorText,
  SumWrapper,
} from "./TransactionFormFields.styled";
import FormInput from "../FormInput/FormInput";
import EnterButton from "../Buttons/EnterButton/EnterButton";
import { FormikProps } from "formik";
import SwithChecbox from "../SwithChecbox/SwithChecbox";
import { selectStyles } from "@/src/styles/selectStyles";
import DateInput from "./DateInput";
import { verifyFutureDate } from "@/src/helpers/verifyFutureDate";
import { optionsExpense, optionsIncome } from "@/src/constants/selectOptions";
import { ITransactionValue } from "@/src/types/transactionValue";
import { useGlobalState } from "../GlobalProvider/GlobalProvider";
import CustomSelect from "../CustomSelect/CustomSelect";
import { OptionType } from "@/src/types/optionType";
import CancelButton from "../Buttons/CancelButton/CancelButton";



interface IProps {
  isIncome: boolean;
  setIsIncome: Dispatch<SetStateAction<boolean>>;
  formik: FormikProps<ITransactionValue>;
}

export default function TransactionFormFields({
  formik,
  setIsIncome,
  isIncome,
}: IProps) {
  const { setModalToggle } = useGlobalState();

  const { setFieldValue, isValid, dirty, isSubmitting } = formik;
  const isDisabled = !(isValid && dirty) || isSubmitting;

  // const selectInputRef =
  //   useRef<Select<OptionType, false, GroupBase<OptionType>>>(null);

  const currentDate = moment().format("DD.MM.YYYY");
  const [value, setValue] = useState<OptionType | null>(null);


  const onChangeSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsIncome(e.target.checked);
    setValue(null)
    // selectInputRef.current?.clearValue();
  };

  const onCancelClick = () => {
    setModalToggle("transaction")
  }

  
  return (
    <>
      <SwithChecbox isIncome={isIncome} onChangeSwitch={onChangeSwitch} />

      <Box mb={5} position="relative">
        {/* <ReactSelect<OptionType>
          ref={selectInputRef}
          name="category"
          options={isIncome ? optionsIncome : optionsExpense}
          placeholder="Select a category"
          styles={selectStyles}
          onChange={(data) => {
            console.log("data:", data?.value);
            
            setFieldValue("category", data?.label);
          }}
        /> */}

        <CustomSelect
          value={value}
          setValue={setValue}
          isIncome={isIncome}
          setCategory={setFieldValue}
          // selectRef={selectInputRef}
        />
        <ErrorText component="div" name="category" />
      </Box>

      <DateWrapper>
        <SumWrapper>
          <FormInput
            type="number"
            name="amount"
            placeholder="0.00"
            autoComplete="off"
          />
        </SumWrapper>

        <Datetime
          // name="date"
          closeOnSelect
          initialValue={currentDate}
          dateFormat="DD.MM.YYYY"
          timeFormat={false}
          isValidDate={verifyFutureDate}
          //   onChange={(e) => setFieldValue("date", new Date(e).toString())}
          onChange={(evt) => {
            const selectedDate =
              typeof evt === "string" ? new Date(evt) : evt.toDate();
            setFieldValue("date", selectedDate.toString());
          }}
          inputProps={{ onKeyDown: (e) => e.preventDefault() }}
          renderInput={(props, openCalendar) => (
            <DateInput props={props} onOpen={openCalendar} />
          )}
        />
      </DateWrapper>

      <Box mt={5}>
        <FormInput
          type="text"
          name="comment"
          placeholder="Comment"
          autoComplete="off"
        />
      </Box>

      <EnterButton type="submit" enterText="Add" disabled={isDisabled} />
      <CancelButton cancelText="cancel" onClick={onCancelClick} />            
    </>
  );
}
