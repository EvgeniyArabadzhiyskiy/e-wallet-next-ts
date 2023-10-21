import moment from "moment";
import Datetime from "react-datetime";
import { Dispatch, SetStateAction } from "react";

import CrossBtn from "../../Buttons/CrossBtn";
import { Filter, InputWrapper, WrapperBtn } from "./DateInput.styled";
import { getFormattedMonth } from "@/src/helpers/getFormattedMonth";

interface IProps {
  value: string;
  date: string;
  setDate: Dispatch<SetStateAction<string>>;
}

function DateInput({ value, date, setDate }: IProps) {
  const monthName = getFormattedMonth(date, value);

  const changeDate = (dateEvent: string | moment.Moment) => {
    if (!dateEvent) return;

    switch (value) {
      case "Month":
        const currentMonth = Number(moment(dateEvent).format("M")) - 1;
        setDate(currentMonth.toString());
        return;

      case "Year":
        const currentYear = moment(dateEvent).format("YYYY");
        setDate(currentYear);
        return;

      default:
        console.log("Invalid value");
        return;
    }
  };

  const renderView = (
    mode: string,
    renderDefaultCalendar: Function
  ): JSX.Element => {
    if (mode === "months") {
      return <div className="style-month">{renderDefaultCalendar()}</div>;
    }

    return <>{renderDefaultCalendar()}</>;
  };

  const renderFilterInput = (props: any): JSX.Element => {
    const clear = () => {
      props.onChange({ target: { value: "" } });

      setDate("");
    };

    return (
      <InputWrapper>
        <Filter {...props} />
        <WrapperBtn>
          <CrossBtn onClick={clear} color="#a1a1aa" aria-label="clear" />
        </WrapperBtn>
      </InputWrapper>
    );
  };

  return (
    <Datetime
      value={value === "Month" ? monthName : date}
      closeOnSelect
      timeFormat={false}
      dateFormat={value === "Month" ? "MMMM" : "YYYY"}
      onChange={changeDate}
      renderInput={renderFilterInput}
      renderView={(mode, renderDefaultCalendar) =>
        renderView(mode, renderDefaultCalendar)
      }
      inputProps={{ 
        
        placeholder: value, onKeyDown: (e) => e.preventDefault() 
      }}
      
    />
  );
}

export default DateInput;
