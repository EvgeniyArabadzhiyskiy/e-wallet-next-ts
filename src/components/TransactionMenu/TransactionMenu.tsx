import { Dispatch, SetStateAction } from "react";

import CrossBtn from "../Buttons/CrossBtn";
import EnterButton from "../Buttons/EnterButton";
import { Menu, WrapperBtn } from "./TransactionMenu.styled";

interface IProps {
  isDisabled: boolean;
  isDelete: boolean;
  isOpenMenu: boolean;
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
  onEdit?: () => void;
  onDelete: () => void;
  onClearId: () => void;
}

function TransactionMenu ({ isDisabled, isOpenMenu, isDelete, setIsOpenMenu, onEdit, onDelete, onClearId }: IProps)  {
  return (
    <Menu $isOpenMenu={isOpenMenu} $isDelete={isDelete}>
     <WrapperBtn>
      <CrossBtn onClick={() => setIsOpenMenu(p => !p)} aria-label="close" />
     </WrapperBtn>
      
      <EnterButton 
        maxWidth="120px"
        height={40} 
        enterText="EDIT" 
        onClick={onEdit} 
      />

      {isDelete 
      ? <EnterButton 
          maxWidth="120px"
          height={40} 
          enterText="DELETE" 
          onClick={onDelete} 
          disabled={isDisabled}
        />
      : <EnterButton 
          maxWidth="120px"
          height={40} 
          enterText="CANCEL" 
          onClick={onClearId} 
        />
      }
    </Menu>
  );
};

export default TransactionMenu;
