import { Dispatch, SetStateAction } from "react";
import { CloseBtn, DeleteBtn, Menu } from "./TransactionMenu.styled";

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
        X
      </CloseBtn>
      <DeleteBtn onClick={onEdit}>EDIT</DeleteBtn>
      {isDelete && <DeleteBtn onClick={onDelete}>DELETE</DeleteBtn>}
      {!isDelete && <DeleteBtn onClick={onClearId}>CANCEL</DeleteBtn>}
    </Menu>
  );
};

export default TransactionMenu;
