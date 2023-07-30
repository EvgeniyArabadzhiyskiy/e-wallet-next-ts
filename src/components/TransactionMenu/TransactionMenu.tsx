import { CloseBtn, DeleteBtn, Menu } from "./TransactionMenu.styled";

interface IProps {
  isOpenMenu?: boolean;
  isDelete?: boolean;
  onContextMenu?: any;
  onEdit?: any;
  onDelete?: any;
  onClearId?: any;
}

const TransactionMenu = ({ isOpenMenu, isDelete, onContextMenu, onEdit, onDelete, onClearId }: IProps) => {
  return (
    <Menu $isOpenMenu={isOpenMenu} $isDelete={isDelete}>
      <CloseBtn onClick={onContextMenu} aria-label="close">
        X
      </CloseBtn>
      <DeleteBtn onClick={onEdit}>EDIT</DeleteBtn>
      {isDelete && <DeleteBtn onClick={onDelete}>DELETE</DeleteBtn>}
      {!isDelete && <DeleteBtn onClick={onClearId}>CANCEL</DeleteBtn>}
    </Menu>
  );
};

export default TransactionMenu;
