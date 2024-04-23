"use client";

import { useState } from "react"
import { useBalanceList } from "@/src/hooks/useBalanceList";
import { useLazyTransactions } from "@/src/apiWallet";

import FlipCard from "../FlipCard";
import ModalBox from "../ModalWindow";
import SettingsSvg from "../SvgComponent/SettingsSvg";
import ScrollToTop from "../ScrollToTop";
import TransactionItem from "./TransactionItem";
import ButtonAddTransactions from "../Buttons/ButtonAddTransactions";
import { Category, Table, TableBody, TableHeader } from "./TransactionTable.styled";
import dynamic from "next/dynamic";

// const ModalBox = dynamic(() => import("../ModalWindow"), {
//   ssr: false,
// });

// const FlipCard = dynamic(() => import("../FlipCard"), {
//   ssr: false,
// });

function TransactionTable() {
  const { data: allTransactions = [], listElem, observerElem, isError, error } = useLazyTransactions();
  const balanceList = useBalanceList(allTransactions);
  
  const [editId, setEditId] = useState<string>("");
  const [modalKey, setModalKey] = useState<"ADD" | "EDIT">("ADD");

  const [isDisabled, setIsDisabled] = useState<boolean>(false);

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
      {/* <div style={{width:40, height:40, background: "green", }}></div> */}
      </Table>
      <ButtonAddTransactions setModalKey={setModalKey} />
      {/* <div style={{width:40, height:40, background: "blue", position: "fixed", bottom: "50px", right: 0}}></div> */}

      <ModalBox modalName="transaction">
        <FlipCard modalKey={modalKey} editId={editId} />
      </ModalBox>
    </>
  );
}

export default TransactionTable;
