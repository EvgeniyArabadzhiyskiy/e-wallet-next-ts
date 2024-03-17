import moment from "moment";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { useRemoveTransaction } from "@/src/apiWallet";
import { Category } from "../TransactionTable.styled";
import {
  CategoryName,
  SettingsBtn,
  StyledItem,
  SumColorText,
} from "./TransactionItem.styled";
import { ITransaction, ITransactions } from "@/src/types/transactions";
import { getSymbolType } from "@/src/helpers/getSymbolType";
import TransactionMenu from "../../TransactionMenu";
import SettingsSvg from "../../SvgComponent/SettingsSvg";
import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { useModalWindow } from "@/src/hooks/useModalWindow";

interface IProps {
  balance: number;
  transaction: ITransaction;
  setModalKey: Dispatch<SetStateAction<"ADD" | "EDIT">>;
  setEditId: Dispatch<SetStateAction<string>>;
  setIsDisabled: Dispatch<SetStateAction<boolean>>;
  isDisabled: boolean;
}

function TransactionItem({
  transaction,
  balance,
  setModalKey,
  setEditId,
  setIsDisabled,
  isDisabled,
}: IProps) {
  const { id, date, typeOperation, category, comment, amount } = transaction;
  const operationDate = moment(new Date(date)).format("DD.MM.YYYY");

  const timeoutId = useRef<NodeJS.Timeout>();
  const setModalToggle = useModalWindow((state) => state.setModalToggle);

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isDelete, setIsDelete] = useState(true);

  const queryClient = useQueryClient();
  const infiniteData = queryClient
  .getQueryData<InfiniteData<ITransactions>>(
    [["transactionRouter", "getAllTransactions"],{ input: { limit: 10 }, type: "infinite" }]
  );

  const lastPageNumber = infiniteData?.pages.length || 1;

  const { mutate: removeTransaction, error, isError } = useRemoveTransaction(lastPageNumber);

  const onDelete = (transactionID: string) => {
    setIsDisabled(true);
    setIsDelete(false);

    timeoutId.current = setTimeout(() => {
      removeTransaction({ transactionID, lastPageNumber });
      setIsDisabled(false);
    }, 2500);
  };

  const onClearId = () => {
    setIsDisabled(false);
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
      <StyledItem $borders={typeOperation} key={transaction.id}>
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
          isDisabled={isDisabled}
          isDelete={isDelete}
          isOpenMenu={isOpenMenu}
          setIsOpenMenu={setIsOpenMenu}

          onEdit={() => onEdit(id)}
          onDelete={() => onDelete(id)}
          onClearId={onClearId}
        />
      </StyledItem>
    </>
  );
}

export default TransactionItem;


