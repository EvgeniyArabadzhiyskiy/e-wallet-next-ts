"use client";

import { useEffect, useState } from "react"
import { useBalanceList } from "@/src/hooks/useBalanceList";
import { useLazyTransactions } from "@/src/apiWallet";

import TransactionItem from "./TransactionItem/TransactionItem";
import ButtonAddTransactions from "../Buttons/ButtonAddTransactions/ButtonAddTransactions";
import { Category, Table, TableBody, TableHeader } from "./TransactionTable.styled";
import ModalBox from "../ModalWindow/ModalBox";
import FlipCard from "../FlipCard/FlipCard";
import SettingsSvg from "../SvgComponent/SettingsSvg";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { signOut, useSession } from "next-auth/react";



function TransactionTable() {
  const { data: allTransactions = [], listElem, observerElem  } = useLazyTransactions();
  const balanceList = useBalanceList(allTransactions);

  const [editId, setEditId] = useState<string>("");
  const [modalKey, setModalKey] = useState<"ADD" | "EDIT">("ADD")

  const { data: session } = useSession()
  console.log("LoginFormFields  data:", session);

  const onSignOut = async () => {
    signOut()
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
                  setEditId={setEditId}
                  key={transaction._id}
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
      <button type="button" onClick={onSignOut}>Sign In with Google</button> 

      <ButtonAddTransactions setModalKey={setModalKey} />

      <ModalBox modalName="transaction">
        <FlipCard modalKey={modalKey} editId={editId} />
      </ModalBox>
    </>
  );
}

export default TransactionTable;
