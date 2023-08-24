import { Dispatch, SetStateAction } from "react";
import DateInput from "./DateInput/DateInput";
import { StyledFilters } from "./FilterDate.styled";

interface IProps {
  month: string;
  year: string;
  setMonth: Dispatch<SetStateAction<string>>;
  setYear: Dispatch<SetStateAction<string>>;
}

function FilterDate({ month, year, setMonth, setYear }: IProps) {
  return (
    <StyledFilters>
      <DateInput date={month} setDate={setMonth} value={"Month"} />
      <DateInput date={year} setDate={setYear} value={"Year"} />
    </StyledFilters>
  );
}

export default FilterDate;
