import { Suspense } from "react";
import StatisticLoader from "@/src/components/StatisticLoader";
import StatisticWrapper from "@/src/components/StatisticWrapper";

export default async function PageStatistic() {
  return (
    <Suspense fallback={<StatisticLoader />}>
      <StatisticWrapper />
    </Suspense>
  );
}
