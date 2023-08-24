import { Dispatch, SetStateAction } from "react";

import StatItem from "../StatItem";
import FilterDate from "../../FilterDate";
import { IColor, IStatistic } from "@/src/types/statistics";
import { getCategoryColor } from "@/src/helpers/getCategoryColor";
import { FooterText, Table, TableBody, TableFooter, TableFooterItem, TableHeader } from "./StatTable.styled";

interface IProps {
  year: string;
  month: string;
  setMonth: Dispatch<SetStateAction<string>>;
  setYear: Dispatch<SetStateAction<string>>;
  expensesData: IStatistic[];
  expensesTotal: number;
  incomeTotal: number;
}

function StatTable ({ month, year, setMonth, setYear, expensesData, expensesTotal, incomeTotal }: IProps) {
    
  return (
    <Table>

      <FilterDate month={month} year={year} setMonth={setMonth} setYear={setYear} />

      <TableHeader>
        <p>Category</p>
        <p>Sum</p>
      </TableHeader>

      <TableBody>
        {expensesData.map(
          ({ _id, totalSum }: { _id: keyof IColor; totalSum: number }) => {
            return (
              <StatItem
                key={_id}
                id={_id}
                totalSum={totalSum}
                categoryColor={getCategoryColor(_id)}
              />
            );
          }
        )}
      </TableBody>

      <TableFooter>
        <TableFooterItem>
          <p>Expenses:</p>
          <FooterText type="expense">{expensesTotal}</FooterText>
        </TableFooterItem>
        <TableFooterItem>
          <p>Income:</p>
          <FooterText type="income">{incomeTotal}</FooterText>
        </TableFooterItem>
      </TableFooter>
    </Table>
  );
}

export default StatTable;
