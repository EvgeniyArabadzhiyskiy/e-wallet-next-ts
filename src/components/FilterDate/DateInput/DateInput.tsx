import moment from "moment";
import Datetime from 'react-datetime';
import { ClearButton, Filter, InputWrapper } from "./DateInput.styled";
import CrossSvg from "../../SvgComponent/CrossSvg";

interface IProps {
  setMonth?: any;
  setYear?: any;
  value?: string;
}

function DateInput ({ setMonth, setYear, value = "Month" }: IProps) {
  const changeDate = (e: any) => {
    const currentYear: any = moment(e).format("YYYY");
    const currentMonth = new Date(e).getMonth();

    if (!isNaN(currentYear) && currentYear) {
      setYear && setYear(currentYear);
    }

    if (!isNaN(currentMonth) ?? currentMonth) {
      setMonth && setMonth(String(currentMonth));
    }
  };

  const renderView = (mode: any, renderDefault: any) => {
    if (mode === "months") {
      return <div className="style-month">{renderDefault()}</div>;
    }

    return renderDefault();
  };

  const renderFilterInput = (props: any) => {
    const clear = () => {
      props.onChange({ target: { value: '' } });

      setMonth && setMonth("");
      setYear && setYear("");
    };

    return (
      <InputWrapper>
        <Filter {...props} />
        <ClearButton type='button' onClick={clear}>
          
          <CrossSvg width={18} height={18} color="#a1a1aa"/>
        </ClearButton>
      </InputWrapper>
    );
  };

  return (
    <Datetime
    //   name="date"
      closeOnSelect
      timeFormat={false}
      dateFormat={value === 'Month' ? 'MMMM' : 'YYYY'}
      
      onChange={changeDate}
      renderInput={renderFilterInput}
      renderView={(mode, renderDefault) => renderView(mode, renderDefault)}
      inputProps={{ placeholder: value, onKeyDown: e => e.preventDefault() }}
    />
  );
}

export default DateInput;
