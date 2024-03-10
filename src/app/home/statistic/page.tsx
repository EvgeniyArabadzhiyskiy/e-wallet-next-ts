import { Suspense } from "react";
import StatisticLoader from "@/src/components/StatisticLoader";
import StatisticWrapper from "@/src/components/StatisticWrapper";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statistic Page",
  description: "e-Wallet Statistics",
};

export default async function PageStatistic() {
  return (
    <Suspense fallback={<StatisticLoader />}>
      <StatisticWrapper />
    </Suspense>
  );
}
