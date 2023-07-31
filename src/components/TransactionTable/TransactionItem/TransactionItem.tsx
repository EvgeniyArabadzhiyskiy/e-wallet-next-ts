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
  InfiniteData,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { ITransactions, RemoveTransaction } from "@/src/types/transactions";
import { BASE_URL, TRANSACTIONS } from "@/src/constants/apiPath";
import axios from "axios";
import { apiWallet } from "@/src/apiWallet/apiWallet";
import { useUser } from "@/src/hooks/useUser";
import TransactionMenu from "../../TransactionMenu/TransactionMenu";
import { fetcher } from "@/src/helpers/fetcher";
import { useGlobalState } from "../../GlobalProvider/GlobalProvider";

interface IProps {
  transaction: any;
  balance: any;
  deleteId: any;
  setDeleteId: any;
  setModalKey: Dispatch<SetStateAction<"ADD" | "EDIT">>;
  setEditId: Dispatch<SetStateAction<string>>;
}

const deleteTransaction = async (id: string, token: string | undefined) => {
  const options: RequestInit = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
    // body: JSON.stringify(transaction),
  };

  const data = await fetcher<RemoveTransaction>(
    `${BASE_URL}${TRANSACTIONS}/${id}`,
    options
  );

  return data;
};

function TransactionItem({
  transaction,
  balance,
  deleteId,
  setDeleteId,
  setModalKey,
  setEditId,
}: IProps) {
  const { _id, date, typeOperation, category, comment, amount } = transaction;
  const operationDate = moment(new Date(date)).format("DD.MM.YYYY");

  const queryClient = useQueryClient();
  const { token } = useUser();
  const timeoutId = useRef<NodeJS.Timeout>();
  const { setModalToggle } = useGlobalState();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isDelete, setIsDelete] = useState(true);

  const { mutate: removeTransaction } = useMutation<
    RemoveTransaction,
    Error,
    string
  >({
    mutationFn: (id) => deleteTransaction(id, token),

    onSuccess: async (data) => {
      const infiniteData = queryClient.getQueryData<InfiniteData<ITransactions>>([
        "TransactionsList",
      ]);

      if (!infiniteData) {
        return
      }

      const lastPageNumber = infiniteData.pages.length;

      const { transactions } = await apiWallet.getAllTransactions(token, lastPageNumber);

      const lastTransaction = transactions.pop();

      const updatedPages = infiniteData.pages.map((page) => {
        const newCache = page.transactions.filter((item) => item._id !== data._id);

        return {
          ... page,
          transactions: newCache,
        }
      });

      
      
      const lastPagesIdx = updatedPages.length - 1;
      lastTransaction && updatedPages[lastPagesIdx].transactions.push(lastTransaction);


      queryClient.setQueryData<InfiniteData<ITransactions>>(["TransactionsList"],(prev) => {
        if (prev) {
          return {
            ...prev,
            pages: updatedPages,
          };
        }
      });
      
      queryClient.invalidateQueries(["Balance"])
      
    },
  });

  // const onContextMenu = () => {
  //   setIsOpenMenu((prev) => !prev);
  // };

  const onDelete = (id: string) => {
    setIsDelete(false);

    timeoutId.current = setTimeout(() => {
      removeTransaction(id);

      setDeleteId((prev: string[]) => [...prev, id]); // под вопросом 
    }, 100);
  };

  const onClearId = (id: string) => {
    setIsDelete(true);

    setDeleteId((prev: any) => prev.filter((removeID: any) => removeID !== id)); // под вопросом 

    console.log("CANCEL");
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
          onClearId={() => onClearId(_id)}
        />
      </StyledItem>
    </>
  );
}

export default TransactionItem;
