import moment from "moment";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { useRemoveTransaction } from "@/src/apiWallet";
import { useGlobalState } from "../../GlobalProvider/GlobalProvider";
import { Category } from "../TransactionTable.styled";
import {
  CategoryName,
  SettingsBtn,
  StyledItem,
  SumColorText,
} from "./TransactionItem.styled";
import { ITransaction } from "@/src/types/transactions";
import { getSymbolType } from "@/src/helpers/getSymbolType";
import SettingsSvg from "../../SvgComponent/SettingsSvg";
import TransactionMenu from "../../TransactionMenu/TransactionMenu";

interface IProps {
  balance: number;
  transaction: ITransaction;
  setModalKey: Dispatch<SetStateAction<"ADD" | "EDIT">>;
  setEditId: Dispatch<SetStateAction<string>>;
}

function TransactionItem({
  transaction,
  balance,
  setModalKey,
  setEditId,
}: IProps) {
  const { _id, date, typeOperation, category, comment, amount } = transaction;
  const operationDate = moment(new Date(date)).format("DD.MM.YYYY");

  const timeoutId = useRef<NodeJS.Timeout>();
  const { setModalToggle } = useGlobalState();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isDelete, setIsDelete] = useState(true);

  const { mutate: removeTransaction, error, isError } = useRemoveTransaction()

  const onDelete = (id: string) => {
    setIsDelete(false);

    timeoutId.current = setTimeout(() => {
      removeTransaction(id);
    }, 2500);
  };

  const onClearId = () => {
    setIsDelete(true);
    clearTimeout(timeoutId.current);
  };

  const onEdit = (id: string) => {
    setModalToggle("transaction")
    setModalKey("EDIT")
    setEditId(id)
    setIsOpenMenu(false)
  }

  if (isError) {
    throw new Error(error.message)
  }

  return (
    <>
      <StyledItem $borders={typeOperation} key={transaction._id}>
        <Category>
          <SettingsBtn type="button" onClick={() => setIsOpenMenu((prev) => !prev)}>
            <SettingsSvg width={14} height={14} />
          </SettingsBtn>
        </Category>

        <Category>
          <CategoryName>Date</CategoryName>
          {operationDate}
        </Category>

        <Category>
          <CategoryName>Type</CategoryName>
          {getSymbolType(typeOperation)}
        </Category>

        <Category>
          <CategoryName>Category</CategoryName>
          {category}
        </Category>

        <Category>
          <CategoryName>Comment</CategoryName>
          {comment}
        </Category>

        <SumColorText $typeColor={getSymbolType(typeOperation)}>
          <CategoryName>Sum</CategoryName>
          {amount}
        </SumColorText>

        <Category>
          <CategoryName>Balance</CategoryName>
          {balance}
        </Category>

        <TransactionMenu
          isDelete={isDelete}
          isOpenMenu={isOpenMenu}
          setIsOpenMenu={setIsOpenMenu}

          onEdit={() => onEdit(_id)}
          onDelete={() => onDelete(_id)}
          onClearId={onClearId}
        />
      </StyledItem>
    </>
  );
}

export default TransactionItem;


