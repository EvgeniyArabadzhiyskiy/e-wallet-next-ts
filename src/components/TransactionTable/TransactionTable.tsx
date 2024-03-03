"use client";

import { useEffect, useState } from "react"
import { useBalanceList } from "@/src/hooks/useBalanceList";
import { useLazyTransactions, useRemoveTransaction, useStatistic } from "@/src/apiWallet";

import FlipCard from "../FlipCard";
import ModalBox from "../ModalWindow";
import SettingsSvg from "../SvgComponent/SettingsSvg";
import ScrollToTop from "../ScrollToTop";
import TransactionItem from "./TransactionItem";
import ButtonAddTransactions from "../Buttons/ButtonAddTransactions";
import { Category, Table, TableBody, TableHeader } from "./TransactionTable.styled";
import { InfiniteData, QueryClient, useQueryClient } from "@tanstack/react-query";
import { ITransactions } from "@/src/types/transactions";
import { trpc } from "@/src/trpc/client";
import getQueryClient from "@/src/lib/getQueryClient";

function TransactionTable() {
  const { data: allTransactions = [], listElem, observerElem, isError, error } = useLazyTransactions();
  const balanceList = useBalanceList(allTransactions);
  
  const [editId, setEditId] = useState<string>("");
  const [modalKey, setModalKey] = useState<"ADD" | "EDIT">("ADD");

  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  // const [isDis, setIsDis] = useState<boolean>(false);

  const queryClient = useQueryClient();
  // const cache = queryClient.getQueryCache()
  // console.log("TransactionTable  cache:", cache.queries);

//   useEffect(() => {
//     (async () => {
//       const res = await fetch(`http://localhost:3000/api/current-user`);

//       const data = await res.json();
// console.log("Data================", data);
//     })()
//   })


  if (isError) {
    throw new Error(error.message)
  }

  return (
    <>
    <ScrollToTop />
      <Table >
        <TableHeader>
          <Category>
            <SettingsSvg width={14} height={14} />
          </Category>
          <Category>Date</Category>
          <Category>Type</Category>
          <Category>Category</Category>
          <Category>Comment</Category>
          <Category>Sum</Category>
          <Category>Balance</Category>
        </TableHeader>

        {allTransactions.length > 0 && (
          <TableBody ref={listElem}>
            {allTransactions.map((transaction, idx) => {
              const balance = balanceList[idx];

              return (
                <TransactionItem
                  isDisabled={isDisabled}
                  setIsDisabled={setIsDisabled}
                  setEditId={setEditId}
                  key={transaction.id}
                  balance={balance}
                  transaction={transaction}
                  setModalKey={setModalKey}
                />
              );
            })}

            <div ref={observerElem} style={{ height: 5 }}></div>
          </TableBody>
        )}
      </Table>
      {/* <button onClick={() => {
        // queryClient.removeQueries({ queryKey: ["Statistic"] });
        // queryClient.removeQueries({ queryKey: [['statisticRouter', 'getStatistic'] ] });
        // queryClient.removeQueries({ queryKey: [['transactionRouter', 'getBalance'] ] });

        // queryClient.invalidateQueries({ queryKey: [['transactionRouter', 'getBalance']] });
        // queryClient.invalidateQueries({ queryKey: [['statisticRouter', 'getStatistic']] });
        // setIsDis(p => !p)
        // console.log("REMOVE BUTTON", cache.queries);
      }}>Delete Cache</button> */}

      <ButtonAddTransactions setModalKey={setModalKey} />

      <ModalBox modalName="transaction">
        <FlipCard modalKey={modalKey} editId={editId} />
      </ModalBox>
    </>
  );
}

export default TransactionTable;
