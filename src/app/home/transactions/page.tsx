import { Suspense } from "react";
import TransactionLoader from "@/src/components/TransactionLoader";
import TransactionWrapper from "@/src/components/TransactionWrapper";

export default function PageTransactions() {
  return (
    <Suspense fallback={<TransactionLoader />}>
      <TransactionWrapper />
    </Suspense>
  );
}
