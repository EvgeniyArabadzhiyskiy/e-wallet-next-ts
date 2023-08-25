"use client";

import stl from "./StatisticLoader.module.scss";
import {
  PageTitle,
  TableWrapper,
  ChartWrapper,
} from "../Statistics/Statistics.styled";
import {
  Table,
  TableBody,
  TableHeader,
} from "../Statistics/StatTable/StatTable.styled";
import { StyledFilters } from "../FilterDate/FilterDate.styled";
import CrossSvg from "../SvgComponent/CrossSvg";

function StatisticLoader() {
  return (
    <div style={{ width: 727 }}>
      <PageTitle>Statistics</PageTitle>
      <TableWrapper>
        <ChartWrapper>
          <div className={stl.circle}>
            <div className={stl.inner__circle}></div>
          </div>
        </ChartWrapper>

        <Table>
          <StyledFilters>
            <div className={stl.filter__input}>
              <span>Month</span>
              <CrossSvg width={18} height={18} color="#a1a1aa" />
            </div>
            <div className={stl.filter__input}>
              <span>Year</span>
              <CrossSvg width={18} height={18} color="#a1a1aa" />
            </div>
          </StyledFilters>
          <TableHeader>
            <p>Category</p>
            <p>Sum</p>
          </TableHeader>
          <TableBody>
            {[...Array(5)].map((_, i) => {
              return (
                <li className={stl.statistic__tem} key={i}>
                  <div
                    style={{ animationDelay: `${i * 0.05}s` }}
                    className={stl.loading}
                  ></div>
                </li>
              );
            })}
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}

export default StatisticLoader;
