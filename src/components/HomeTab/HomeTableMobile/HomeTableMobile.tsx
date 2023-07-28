import { ITransaction } from "@/src/types/transactions";
import { StyledList } from "./HomeTabelMobile.styled";
import HomeTableItem from "../HomeTableItem/HomeTableItem";

interface IProps {
  balances: number[];
  transactions: ITransaction[];
  listElem: React.RefObject<HTMLUListElement>;
  observerElem: React.RefObject<HTMLDivElement>;
}

function HomeTabelMobile ({ listElem, observerElem, balances, transactions }: IProps)  {
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
      <div ref={observerElem} style={{ height: 50, background: "tomato" }}>
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