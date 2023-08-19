import { Dispatch, SetStateAction } from "react";

import CrossBtn from "../Buttons/CrossBtn";
import EnterButton from "../Buttons/EnterButton/EnterButton";
import { Menu, WrapperBtn } from "./TransactionMenu.styled";

interface IProps {
  isDelete: boolean;
  isOpenMenu: boolean;
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
  onEdit?: () => void;
  onDelete: () => void;
  onClearId: () => void;
}

const TransactionMenu = ({ isOpenMenu, isDelete, setIsOpenMenu, onEdit, onDelete, onClearId }: IProps) => {
  return (
    <Menu $isOpenMenu={isOpenMenu} $isDelete={isDelete}>
     <WrapperBtn>
      <CrossBtn onClick={() => setIsOpenMenu(p => !p)} aria-label="close" />
     </WrapperBtn>
      
      <EnterButton 
        width={{mobile: "45%", desctop: "120px"}} 
        height={40} 
        enterText="EDIT" 
        onClick={onEdit} 
      />

      {isDelete 
      ? <EnterButton 
          width={{mobile: "45%", desctop: "120px"}} 
          height={40} 
          enterText="DELETE" 
          onClick={onDelete} 
        />
      : <EnterButton 
          width={{mobile: "45%", desctop: "120px"}} 
          height={40} 
          enterText="CANCEL" 
          onClick={onClearId} 
        />
      }
    </Menu>
  );
};

export default TransactionMenu;
