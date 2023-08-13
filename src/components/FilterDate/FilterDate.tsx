import DateInput from "./DateInput/DateInput";
import { StyledFilters } from "./FilterDate.styled";

interface IProps {
  setMonth: any;
  setYear: any;
}

function FilterDate({ setMonth, setYear }: IProps) {
  return (
    <StyledFilters>
      <DateInput setMonth={setMonth} />
      <DateInput setYear={setYear} value={"Year"} />
    </StyledFilters>
  );
}

export default FilterDate;
