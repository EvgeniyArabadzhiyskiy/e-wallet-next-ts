// "use client";

import stl from "../../../components/TransactionLoader/TransactionLoader.module.scss";
import SettingsSvg from "@/src/components/SvgComponent/SettingsSvg";
import TransactionLoader from "@/src/components/TransactionLoader";
import { StyledItem } from "@/src/components/TransactionTable/TransactionItem/TransactionItem.styled";
import { Category, Table, TableBody, TableHeader } from "@/src/components/TransactionTable/TransactionTable.styled";

export default function Loading() {
  // console.log("LOAADING");

  return (
    <div>
      <TransactionLoader />

      {/* <h1 style={{ color: "yellow", fontSize: 46 }}>Loading...</h1> */}
      
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
                <div
                  style={{ animationDelay: `${i * 0.05}s` }}
                  className={stl.loading}
                ></div>
              </StyledItem>
            );
          })}
        </TableBody>
      </Table> */}
    </div>
  );
}
