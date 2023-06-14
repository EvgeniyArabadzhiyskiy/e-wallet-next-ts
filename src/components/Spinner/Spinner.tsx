import { RotatingLines } from 'react-loader-spinner';
import { SpinnerBox } from './Spinner.styled';

const Spinner = () => {
  return (
    <SpinnerBox>
      <RotatingLines
        strokeColor="#3f51b5"
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
      />
    </SpinnerBox>
  );
};

export default Spinner;