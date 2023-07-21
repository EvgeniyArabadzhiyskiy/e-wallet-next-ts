import "../../styles/rdt-styles.css";
import moment from "moment";
import Datetime from "react-datetime";
import  { GroupBase,  OptionProps } from "react-select";
import Select from "react-select/dist/declarations/src/Select";

import { Box } from "../Box/Box";
import { ChangeEvent, useRef, useState } from "react";
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
import CustomSelect from "../SelectComponent/SelectComponent";
import { IOptionData } from "@/src/types/optionData";

interface IProps {
  isIncome: boolean;
  setIsIncome: any;
  formik: FormikProps<ITransactionValue>;
}

interface OptionType {value: string; label: string;}

export default function TransactionFormFields({
  formik,
  setIsIncome,
  isIncome,
}: IProps) {
  const { setModalToggle } = useGlobalState();

  const { setFieldValue, isValid, dirty, isSubmitting, values } = formik;
  const isDisabled = !(isValid && dirty) || isSubmitting;

  
  const selectInputRef =
    useRef<Select<unknown, boolean, GroupBase<unknown>>>(null);

  const currentDate = moment().format("DD.MM.YYYY");

  

  const onChangeSwitch = (e: ChangeEvent<HTMLInputElement>) => {
    setIsIncome(e.target.checked);
    // selectInputRef.current?.clearValue();
  };

  const onSelectChange = (data: any) => {
    
    setFieldValue("category", data?.label);
  };


  

  return (
    <>
      <SwithChecbox isIncome={isIncome} onChangeSwitch={onChangeSwitch} />

      <Box mb={5} position="relative">
        {/* <ReactSelect
          ref={selectInputRef}
          name="category"
          options={isIncome ? optionsIncome : optionsExpense}
          placeholder="Select a category"
          onChange={(data: any) => {
            // setFieldValue("category", data?.label);
          }}
          styles={selectStyles}
        /> */}
        
        <CustomSelect<OptionType, false, GroupBase<OptionType>>
          isIncome={isIncome}
          setFieldValue={setFieldValue}
          // selectRef={selectInputRef}

          // placeholder="Select a category"
          // options={isIncome ? optionsIncome : optionsExpense}
          // styles={selectStyles}
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
      <button type="button" onClick={() => setModalToggle("transaction")}>
        Cancel
      </button>
      {/* <CancelButton cancelText="cancel" onClick={onCancelClick} />             */}
    </>
  );
}
