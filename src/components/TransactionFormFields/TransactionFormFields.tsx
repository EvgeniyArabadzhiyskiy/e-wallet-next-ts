import moment from "moment";
import Select from 'react-select';
import Datetime from 'react-datetime';
import { Box } from "../Box/Box";
import { MouseEventHandler, useRef } from "react";
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

interface IProps {
  isIncome: boolean;
  setIsIncome: any;
  formik: FormikProps<ITransactionValue>;
}

export default function TransactionFormFields({
  formik,
  setIsIncome,
  isIncome,
}: IProps) {
  const { setFieldValue, isValid, dirty, isSubmitting, values } = formik;
  const isDisabled = !(isValid && dirty) || isSubmitting;

  // const dispatch = useDispatch();
  const selectInputRef = useRef<any>(null);

  const currentDate = moment().format("DD.MM.YYYY");

  const onChangeSwitch = (e: any) => {
    setIsIncome(e.target.checked);
    selectInputRef.current.clearValue();
  };

  const onCancelClick = () => {
    // dispatch(modalClose(false));
  };

  const onSelectChange = (data: any) => {
    setFieldValue("category", data?.label)
  };

  return (
    <>
      <SwithChecbox isIncome={isIncome} onChangeSwitch={onChangeSwitch} />

      <Box mb={5} position="relative">
        <Select
          ref={selectInputRef}
          name="category"
          options={isIncome ? optionsIncome : optionsExpense}
          placeholder="Select a category"
          onChange={onSelectChange}
          styles={selectStyles}
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
          //   onChange={(e) => setFieldValue("date", new Date(e).toString())}
          onChange={(evt) => {
            const selectedDate = typeof evt === 'string' ? new Date(evt) : evt.toDate();
            setFieldValue("date", selectedDate.toString());
          }}
          inputProps={{ onKeyDown: (e) => e.preventDefault() }}
          renderInput={(p, openCalendar) => (
            <DateInput  props={p} onOpen={openCalendar} />
          )}
        />
      </DateWrapper>

      <Box mb={5}>
        <FormInput
          type="text"
          name="comment"
          placeholder="Comment"
          autoComplete="off"
        />
      </Box>

      <EnterButton type="submit" enterText="Add" disabled={isDisabled} />
      {/* <CancelButton cancelText="cancel" onClick={onCancelClick} />             */}
    </>
  );
}
