import { StyledButton } from './PasswordToggleBtn.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface IProps {
  isHidePassword: boolean;
  setIsHidePassword: (value: boolean) => void;

}

const PasswordToggleBtn: React.FC<IProps> = ({ isHidePassword, setIsHidePassword }) => {
  
  return (
    <StyledButton type="button" onClick={() => setIsHidePassword(!isHidePassword)} aria-label="show-pass">
      {isHidePassword 
        ? <FontAwesomeIcon icon={faEye} color="white" /> 
        : <FontAwesomeIcon icon={faEyeSlash} color="white"/>}
    </StyledButton>
  );
};

export default PasswordToggleBtn;