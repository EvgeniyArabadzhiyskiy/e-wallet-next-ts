import {
  CategoryName,
  SumText,
} from "../HomeTableDesctop/HomeTableDesctop.styled";
import { StyledItem } from "./TableItemDesktop.styled";

interface IProps {
  operationDate: any;
  typeOperation: any;
  category: any;
  comment: any;
  amount: any;
  itemBalance: any;
}

function TableItemDesktop  ({
  operationDate,
  typeOperation,
  category,
  comment,
  amount,
  itemBalance,
  // isLongAmount, isLongBalance,
  // onContextMenu, isOpenMenu, isDelete, onEdit, onClearId, onDelete
}: 
IProps)  {
  const bodyTransaction = (
    <>
      <CategoryName>
        {/* <SettingBtn onClick={onContextMenu} aria-label="settings"> */}
        I
        {/* </SettingBtn> */}
      </CategoryName>

      <CategoryName>{operationDate}</CategoryName>
      <CategoryName>{typeOperation}</CategoryName>
      <CategoryName>{category}</CategoryName>
      <CategoryName>{comment}</CategoryName>

      <SumText $typeColor={typeOperation}>{amount}</SumText>

      <CategoryName>{itemBalance}</CategoryName>

      {/* <ContextMenu
        isDelete={isDelete}
        isOpenMenu={isOpenMenu}
        
        onEdit={onEdit}
        onDelete={onDelete}
        onClearId={onClearId}
        onContextMenu={onContextMenu}
      /> */}
    </>
  );

  return <StyledItem>{bodyTransaction}</StyledItem>;
};

export default TableItemDesktop;
