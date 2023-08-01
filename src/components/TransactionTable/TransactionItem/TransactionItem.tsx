import moment from "moment";
import { Category } from "../TransactionTable.styled";
import {
  CategoryName,
  StyledItem,
  SumColorText,
} from "./TransactionItem.styled";
import { getSymbolType } from "@/src/helpers/getSymbolType";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import {
  useQueryClient,
} from "@tanstack/react-query";
import { ITransaction } from "@/src/types/transactions";
import { useUser } from "@/src/hooks/useUser";
import TransactionMenu from "../../TransactionMenu/TransactionMenu";
import { useGlobalState } from "../../GlobalProvider/GlobalProvider";
import { useRemoveTransaction } from "@/src/apiWallet";

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

  const { mutate: removeTransaction } = useRemoveTransaction()

  const onDelete = (id: string) => {
    setIsDelete(false);

    timeoutId.current = setTimeout(() => {
      removeTransaction(id);
    }, 100);
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

  return (
    <>
      <StyledItem $borders={typeOperation} key={transaction._id}>
        <Category>
          <CategoryName>O</CategoryName>
          <button type="button" onClick={() => setIsOpenMenu((prev) => !prev)}>
            O
          </button>
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
