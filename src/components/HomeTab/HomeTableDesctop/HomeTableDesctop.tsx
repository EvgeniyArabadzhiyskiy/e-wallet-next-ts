import { ITransaction } from "@/src/types/transactions";
import {
  CategoryName,
  StyledTable,
  StyledTableBody,
  StyledTableHeader,
} from "./HomeTableDesctop.styled";
import HomeTableItem from "../HomeTableItem/HomeTableItem";
import { useBalanceList } from "@/src/hooks/useBalanceList";
import { useLazyTransactions } from "@/src/apiWallet";

interface IProps {
  balances: number[];
  transactions: ITransaction[];
  listElem:  React.RefObject<HTMLUListElement>;
  observerElem: React.RefObject<HTMLDivElement>;
}

function HomeTableDesctop() {

  const {
    data: transactions = [],
    isFetching,
    listElem,
    observerElem,
  } = useLazyTransactions();


  const balances = useBalanceList(transactions);
  return (
    <StyledTable>
      <StyledTableHeader>
        <CategoryName>I</CategoryName>
        <CategoryName>Date</CategoryName>
        <CategoryName>Type</CategoryName>
        <CategoryName>Category</CategoryName>
        <CategoryName>Comment</CategoryName>
        <CategoryName>Sum</CategoryName>
        <CategoryName>Balance</CategoryName>
      </StyledTableHeader>

      {transactions.length > 0 && (
        <StyledTableBody ref={listElem}>
          {transactions.map((transaction, idx) => {
            const itemBalance = balances[idx];

            return (
              <HomeTableItem
                key={transaction._id}
                transaction={transaction}
                itemBalance={itemBalance}
              />
            );
          })}

          <div ref={observerElem} style={{ height: 50, background: "tomato" }}>
            Observer Target
          </div>
        </StyledTableBody>
      )}
    </StyledTable>
  );
}

export default HomeTableDesctop;
