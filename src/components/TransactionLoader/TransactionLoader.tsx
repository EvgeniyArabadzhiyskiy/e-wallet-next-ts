"use client"

import SettingsSvg from "../SvgComponent/SettingsSvg";
import { StyledItem } from "../TransactionTable/TransactionItem/TransactionItem.styled";
import {
  Category,
  Table,
  TableBody,
  TableHeader,
} from "../TransactionTable/TransactionTable.styled";
import { Loader, Test } from "./TransactionLoader.styled";
import stl from "./TransactionLoader.module.scss"

function TransactionLoader() {
  console.log('Client');
  
  return (
    <>
      {/* <Table>
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

        <TableBody>
          {[...Array(5)].map((_, i) => {
            return (
              <StyledItem style={{ borderLeft: "none" }} key={i}>
              
                 <div style={{ animationDelay: `${i * 0.05}s` }}  className={stl.loading}></div>
              </StyledItem>
            );
          })}
        </TableBody>
      </Table> */}

      <Test />
      {/* <div className={stl.loading}></div> */}
    </>
  );
}

export default TransactionLoader;
  {/* <Loader style={{ animationDelay: `${i * 0.05}s` }} /> */}