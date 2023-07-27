import { SumText } from "../HomeTableDesctop/HomeTableDesctop.styled";
import { StyledList } from "../HomeTableMobile/HomeTabelMobile.styled";

interface IProps {
    operationDate: any;
    typeOperation: any;
    category: any;
    comment: any;
    amount: any;
    itemBalance: any;
  }


function TableItemMobile  ({
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
    const bodyTransaction = 
    <span onClick={() => sendMsg(isLongBalance, itemBalance)}>
        {isLongBalance ? "Click" : itemBalance}
    </span>
          
    const content = <li>Balance {bodyTransaction}</li> ;

    return (
        <StyledList borders={typeOperation}>
        <li><SettingBtn onClick={onContextMenu} aria-label="settings"><GoSettings /></SettingBtn></li>
        <li>Date <span>{operationDate}</span></li>
        <li>Type <span>{typeOperation}</span></li>
        <li>Category <span>{category}</span></li>
        <li>Comment <span>{comment}</span></li>
        
        <li> Sum
            <SumText textColor={typeOperation} onClick={() => sendMsg(isLongAmount, amount)}>
              {isLongAmount ? "Click" : amount}
            </SumText>
        </li>
        {content}
    
        {/* <ContextMenu
            isDelete={isDelete}
            isOpenMenu={isOpenMenu}
            
            onEdit={onEdit}
            onDelete={onDelete}
            onClearId={onClearId}
            onContextMenu={onContextMenu}
        /> */}
    
        </StyledList>
    );


  };
  
  export default TableItemMobile;