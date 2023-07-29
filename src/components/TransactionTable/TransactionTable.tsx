import { ITransaction } from "@/src/types/transactions";
import HomeTableItem from "../HomeTab/HomeTableItem/HomeTableItem";
import { Category, CategoryName, StyleItem, StyleTable, StyleTableBody, StyleTableHeader, SumColorText } from "./TransactionTable.styled";
import moment from "moment";
import { getSymbolType } from "@/src/helpers/getSymbolType";

interface IProps {
  balances: number[];
  transactions: ITransaction[];
  listElem: React.RefObject<HTMLUListElement>;
  observerElem: React.RefObject<HTMLDivElement>;
}

function TransactionTable({ balances, transactions, listElem, observerElem }: IProps) {

  return (
    
    <StyleTable>

        <StyleTableHeader>
            <Category>I</Category>
            <Category>Date</Category>
            <Category>Type</Category>
            <Category>Category</Category>
            <Category>Comment</Category>
            <Category>Sum</Category>
            <Category>Balance</Category>
        </StyleTableHeader>

        {transactions.length > 0 && (
            <StyleTableBody ref={listElem}>
            {transactions.map((transaction, idx) => {
                const itemBalance = balances[idx];
                const { date, typeOperation, category, comment, amount } = transaction;
                const operationDate = moment(new Date(date)).format("DD.MM.YYYY");

                
                return (
                <StyleItem $borders={typeOperation} key={transaction._id}>
                    <Category>I</Category>
                    <Category><CategoryName>Date</CategoryName>{operationDate}</Category>
                    <Category><CategoryName>Type</CategoryName>{getSymbolType(typeOperation)}</Category>
                    <Category><CategoryName>Category</CategoryName>{category}</Category>
                    <Category><CategoryName>Comment</CategoryName>{comment}</Category>
                
                    <SumColorText $typeColor={getSymbolType(typeOperation)}>
                        <CategoryName>Sum</CategoryName>{amount}
                    </SumColorText>
                
                    <Category><CategoryName>Balance</CategoryName>{itemBalance}</Category>
                </StyleItem>
                );
            })}

            <div
                ref={observerElem}
                style={{ height: 5, background: "tomato" }}
            >
                {/* Observer Target */}
            </div>
            </StyleTableBody>
        )}
    </StyleTable>
    
  );
}

export default TransactionTable;
