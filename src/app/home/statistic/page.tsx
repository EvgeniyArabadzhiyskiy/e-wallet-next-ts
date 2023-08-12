"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import stl from "./page.module.scss";
import StatTable from "@/src/components/StatTable";

export default function PageStatistic() {
  // const [pageNum, setPageNum] = useState(1);

  return (
    <>
      <h2 className={stl.stat__title}>Statistics</h2>
      <div className={stl.table__wrapper}>
        <div className={stl.chart__wrapper}>{/* <Chart /> */}</div>
        <StatTable />
      </div>

      {/* <Link href="/">HOME</Link>
      <h1>Page Statistic </h1>
      <div style={{height:250, backgroundColor: "green"}} ></div> */}
      {/* <button type="button" onClick={() => setPageNum((p) => p + 1)}>
        Click
      </button> */}
    </>
  );
}
