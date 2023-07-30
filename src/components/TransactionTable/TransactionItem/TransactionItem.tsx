import moment from "moment";
import { Category } from "../TransactionTable.styled";
import {
  CategoryName,
  StyledItem,
  SumColorText,
} from "./TransactionItem.styled";
import { getSymbolType } from "@/src/helpers/getSymbolType";
import { useRef, useState } from "react";
import {
  InfiniteData,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { ITransactions } from "@/src/types/transactions";
import { BASE_URL, TRANSACTIONS } from "@/src/constants/apiPath";
import axios from "axios";
import { apiWallet } from "@/src/apiWallet/apiWallet";
import { useUser } from "@/src/hooks/useUser";
import TransactionMenu from "../../TransactionMenu/TransactionMenu";

interface IProps {
  transaction: any;
  balance: any;
  deleteId: any;
  setDeleteId: any;
}

const deleteTransaction = async (id: any) => {
  const { data } = await axios.delete(`${BASE_URL}${TRANSACTIONS}/${id}`);
  //   console.log("SecondPage  data:", data);
  return data;
};

function TransactionItem({
  transaction,
  balance,
  deleteId,
  setDeleteId,
}: IProps) {
  const { _id, date, typeOperation, category, comment, amount } = transaction;
  const operationDate = moment(new Date(date)).format("DD.MM.YYYY");

  const queryClient = useQueryClient();
  const { token } = useUser();
  const timeoutId = useRef<NodeJS.Timeout>();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isDelete, setIsDelete] = useState(true);

  const { mutate: removeTransaction } = useMutation({
    mutationFn: deleteTransaction,

    onSuccess: async (data: any) => {
      const { pages } = queryClient.getQueryData<any>(["TransactionsList"]);
      const lastPageNumber = pages.length;

      const { transactions } = await apiWallet.getAllTransactions(
        token,
        lastPageNumber
      );
      const lastTransaction = transactions.pop();

      const updatedPages = pages.map((page: any) =>
        page.filter((item: any) => item._id !== data._id)
      );

      const lastPagesIdx = updatedPages.length - 1;
      updatedPages[lastPagesIdx].push(lastTransaction);

      queryClient.setQueryData<InfiniteData<ITransactions>>(
        ["TransactionsList"],
        (prev) => {
          if (!prev) {
            return undefined;
          }

          return {
            ...prev,
            pages: updatedPages,
          };
        }
      );
    },
  });

  const onContextMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  const onDelete = (id: string) => {
    // console.log("onDelete  id:", id);
    setIsDelete(false);

    timeoutId.current = setTimeout(() => {
      // removeTransaction(id);

      setDeleteId((prev: any) => [...prev, id]);
      // dispatch(setDeletedId(id))
      // dispatch(deleteTransaction())
    }, 300);
  };

  const ddd = (id: any) => {
    const res = deleteId.filter((removedId: any) => removedId !== id);
    return res
  };

  const onClearId = (id: any) => {
    setIsDelete(true);


    setDeleteId(() => ddd(id))

    console.log("CANCEL");
    clearTimeout(timeoutId.current);
  };

  return (
    <>
      <StyledItem $borders={typeOperation} key={transaction._id}>
        <Category>
          <CategoryName>O</CategoryName>
          <button type="button" onClick={onContextMenu}>
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
          // onEdit={onEdit}
          onDelete={() => onDelete(_id)}
          onClearId={() => onClearId(_id)}
          onContextMenu={onContextMenu}
        />
      </StyledItem>
    </>
  );
}

export default TransactionItem;
