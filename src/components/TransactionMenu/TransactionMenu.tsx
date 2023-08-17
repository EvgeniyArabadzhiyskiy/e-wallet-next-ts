import { Dispatch, SetStateAction } from "react";
import { CloseBtn, DeleteBtn, Menu } from "./TransactionMenu.styled";
import CrossSvg from "../SvgComponent/CrossSvg";
import EnterButton from "../Buttons/EnterButton/EnterButton";

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
      <CloseBtn onClick={() => setIsOpenMenu(p => !p)} aria-label="close">
        <CrossSvg width={14} height={14} />
      </CloseBtn>
      
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

      {/* <DeleteBtn onClick={onEdit}>EDIT</DeleteBtn> */}
      {/* {isDelete && <DeleteBtn onClick={onDelete}>DELETE</DeleteBtn>} */}
      {/* {!isDelete && <DeleteBtn onClick={onClearId}>CANCEL</DeleteBtn>} */}
    </Menu>
  );
};

export default TransactionMenu;
