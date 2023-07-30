"use client";

import { useState } from "react"
import { useBalanceList } from "@/src/hooks/useBalanceList";
import { useLazyTransactions } from "@/src/hooks/useLazyTransactions";
import TransactionItem from "./TransactionItem/TransactionItem";
import { Category, Table, TableBody, TableHeader } from "./TransactionTable.styled";

// interface IProps {
//   balances: number[];
//   transactions: ITransaction[];
//   listElem: React.RefObject<HTMLUListElement>;
//   observerElem: React.RefObject<HTMLDivElement>;
// }

function TransactionTable() {
  const { data: allTransactions = [], listElem, observerElem  } = useLazyTransactions();
  const balanceList = useBalanceList(allTransactions);
  const [deleteId, setDeleteId] = useState<string[]>([]);
  console.log("TransactionItem  deleteId:", deleteId);

  return (
    <Table>
      <TableHeader>
        <Category>I</Category>
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
                deleteId={deleteId}
                setDeleteId={setDeleteId}
                key={transaction._id}
                balance={balance}
                transaction={transaction}
              />
            );
          })}

          <div ref={observerElem} style={{ height: 5 }}></div>
        </TableBody>
      )}
    </Table>
  );
}

export default TransactionTable;
