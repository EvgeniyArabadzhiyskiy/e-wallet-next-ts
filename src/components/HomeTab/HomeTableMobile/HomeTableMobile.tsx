import { ITransaction } from "@/src/types/transactions";
import { StyledList } from "./HomeTabelMobile.styled";
import HomeTableItem from "../HomeTableItem/HomeTableItem";
import { useLazyTransactions } from "@/src/hooks/useLazyTransactions";
import { useBalanceList } from "@/src/hooks/useBalanceList";

interface IProps {
  balances: number[];
  transactions: ITransaction[];
  listElem: React.RefObject<HTMLUListElement>;
  observerElem: React.RefObject<HTMLDivElement>;
}

function HomeTabelMobile ()  {
  const {
    data: transactions = [],
    isFetching,
    listElem,
    observerElem,
  } = useLazyTransactions();

  const balances = useBalanceList(transactions);

  return (
    <StyledList ref={listElem}>
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
      <div className="Observer" ref={observerElem} style={{ height: 50, background: "green" }}>
        Observer Target
      </div>
    </StyledList>
  );
};

export default HomeTabelMobile;
{/* <div>
        <ul><li>Word</li><li>999</li><li>Other Info</li></ul>
        <ul><li>Word</li><li>999</li><li>Other Info</li></ul>
        <ul><li>Word</li><li>999</li><li>Other Info</li></ul>
        <ul><li>Word</li><li>999</li><li>Other Info</li></ul>
      </div>

      <ul>
        <div><li><span>Word</span><span>999</span><span>Other Info</span></li></div>
        <div><li><span>Word</span><span>999</span><span>Other Info</span></li></div>
        <div><li><span>Word</span><span>999</span><span>Other Info</span></li></div>
        <div><li><span>Word</span><span>999</span><span>Other Info</span></li></div>
      </ul>  */}