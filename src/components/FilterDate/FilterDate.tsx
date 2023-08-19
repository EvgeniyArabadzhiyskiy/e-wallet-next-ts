import { Dispatch, SetStateAction } from "react";
import DateInput from "./DateInput/DateInput";
import { StyledFilters } from "./FilterDate.styled";

interface IProps {
  setMonth: Dispatch<SetStateAction<string>>;
  setYear: Dispatch<SetStateAction<string>>;
}

function FilterDate({ setMonth, setYear }: IProps) {
  return (
    <StyledFilters>
      <DateInput setDate={setMonth} value={"Month"} />
      <DateInput setDate={setYear} value={"Year"} />
    </StyledFilters>
  );
}

export default FilterDate;
