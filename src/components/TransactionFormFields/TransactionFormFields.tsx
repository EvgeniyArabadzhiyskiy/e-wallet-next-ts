// import "../../styles/rdt-styles.css";  // обязательно в RootLayout иначе проблема при навигации страница не сразу грузится
import moment from "moment";
import Datetime from "react-datetime";
import { FormikProps } from "formik";
import React, { Dispatch, SetStateAction,  useState } from "react";

import {
  DateWrapper,
  ErrorText,
  SumWrapper,
} from "./TransactionFormFields.styled";
import { OptionType } from "@/src/types/optionType";
import { verifyFutureDate } from "@/src/helpers/verifyFutureDate";

import { Box } from "../Box/Box";
import DateInput from "./DateInput";
import FormInput from "../FormInput";
import SwithChecbox from "../SwithChecbox";
import CustomSelect from "../CustomSelect";
import EnterButton from "../Buttons/EnterButton";
import CancelButton from "../Buttons/CancelButton";
import { ButtonWrapper } from "../Buttons/DefaultButton.styled";
import { TTransactionValues } from "@/src/helpers/formValidation";
import { useModalWindow } from "@/src/hooks/useModalWindow";

interface IProps {
  isIncome: boolean;
  setIsIncome: Dispatch<SetStateAction<boolean>>;
  formik: FormikProps<TTransactionValues>;
  modalKey: string;
}

export default function TransactionFormFields({ formik, isIncome, setIsIncome, modalKey }: IProps) {
  
  const { setFieldValue, isValid, dirty, isSubmitting, values } = formik;
  const isDisabled = !(isValid && dirty) || isSubmitting;

  const [value, setValue] = useState<OptionType | null>(null);
  const onChangeSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsIncome(e.target.checked);
    setValue(null);
  };

  const setModalToggle = useModalWindow((state) => state.setModalToggle);
  
  const onCancelClick = () => {
    setModalToggle("transaction")
  }

  const currentDate = moment().format("DD.MM.YYYY");
  return (
    <>
      <SwithChecbox isIncome={isIncome} onChangeSwitch={onChangeSwitch} />

      <Box mb={5} position="relative">
        <CustomSelect
          value={value}
          setValue={setValue}
          isIncome={isIncome}
          setCategory={setFieldValue}
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
            value={values.amount === 0 ? "" : values.amount}
          />
        </SumWrapper>

        <Datetime
          closeOnSelect
          initialValue={currentDate}
          dateFormat="DD.MM.YYYY"
          timeFormat={false}
          isValidDate={verifyFutureDate}
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

      <Box mt={5} mb={5}>
        <FormInput
          type="text"
          name="comment"
          placeholder="Comment"
          autoComplete="off"
        />
      </Box>

      <ButtonWrapper>
        <EnterButton 
          type="submit" 
          height={50} 
          maxWidth="300px" 
          enterText={ modalKey === "ADD" ? "ADD" : "EDIT"} 
          disabled={isDisabled} 
        />
       
        <CancelButton cancelText="CANCEL" onClick={onCancelClick} /> 
      </ButtonWrapper>           
    </>
  );
}
