// import "../../styles/rdt-styles.css";  // обязательно в RootLayout иначе проблема при навигации страница не сразу грузится
import moment from "moment";
import Datetime from "react-datetime";
import { FormikProps } from "formik";
import React, { Dispatch, SetStateAction,  useState } from "react";
import { useGlobalState } from "../GlobalProvider/GlobalProvider";

import {
  DateWrapper,
  ErrorText,
  SumWrapper,
} from "./TransactionFormFields.styled";
import { OptionType } from "@/src/types/optionType";
import { verifyFutureDate } from "@/src/helpers/verifyFutureDate";
import { ITransactionValue } from "@/src/types/transactionValue";

import { Box } from "../Box/Box";
import DateInput from "./DateInput";
import FormInput from "../FormInput/FormInput";
import EnterButton from "../Buttons/EnterButton";
import CancelButton from "../Buttons/CancelButton";
import SwithChecbox from "../SwithChecbox/SwithChecbox";
import CustomSelect from "../CustomSelect/CustomSelect";
import { ButtonWrapper } from "../Buttons/DefaultButton.styled";

interface IProps {
  isIncome: boolean;
  setIsIncome: Dispatch<SetStateAction<boolean>>;
  formik: FormikProps<ITransactionValue>;
}

export default function TransactionFormFields({ formik, isIncome, setIsIncome }: IProps) {
  
  const { setFieldValue, isValid, dirty, isSubmitting } = formik;
  const isDisabled = !(isValid && dirty) || isSubmitting;

  const [value, setValue] = useState<OptionType | null>(null);
  const onChangeSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsIncome(e.target.checked);
    setValue(null);
  };

  const { setModalToggle } = useGlobalState();
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
          enterText="ADD" 
          disabled={isDisabled} 
        />
       
        <CancelButton cancelText="CANCEL" onClick={onCancelClick} /> 
      </ButtonWrapper>           
    </>
  );
}
