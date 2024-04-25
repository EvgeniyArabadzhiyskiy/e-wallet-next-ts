import stl from "./TransactionLoader.module.scss";
import SettingsSvg from "../SvgComponent/SettingsSvg";
// import { StyledItem } from "../TransactionTable/TransactionItem/TransactionItem.styled";
// import {
//   Category,
//   Table,
//   TableBody,
//   TableHeader,
// } from "../TransactionTable/TransactionTable.styled";

function TransactionLoader() {
  return (
    <>
      <main className={stl.table}>
        <div className={stl.table__header}>
          <p className={stl.table__category}>
            <SettingsSvg width={14} height={14} />
          </p>
          <p className={stl.table__category}>Date</p>
          <p className={stl.table__category}>Type</p>
          <p className={stl.table__category}>Category</p>
          <p className={stl.table__category}>Comment</p>
          <p className={stl.table__category}>Sum</p>
          <p className={stl.table__category}>Balance</p>
        </div>

        <ul className={stl.table__body}>
          {[...Array(5)].map((_, i) => {
            return (
              <li key={i} className={stl.table__item}>
                <div
                  style={{ animationDelay: `${i * 0.05}s` }}
                  className={stl.loading}
                ></div>
              </li>
            );
          })}
        </ul>
      </main>

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
    </>
  );
}

export default TransactionLoader;
