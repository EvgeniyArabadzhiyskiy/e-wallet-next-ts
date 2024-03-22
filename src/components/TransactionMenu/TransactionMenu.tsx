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
        type="button"
        maxWidth="120px"
        height={40}
        onClick={onEdit} 
      >
        EDIT
      </EnterButton>

      {isDelete 
      ? <EnterButton 
          type="button"
          maxWidth="120px"
          height={40}
          onClick={onDelete} 
          disabled={isDisabled}
        >
          DELETE
        </EnterButton>

      : <EnterButton 
          type="button"
          maxWidth="120px"
          height={40}  
          onClick={onClearId} 
        >
          CANCEL
        </EnterButton>
      }
    </Menu>
  );
};

export default TransactionMenu;
