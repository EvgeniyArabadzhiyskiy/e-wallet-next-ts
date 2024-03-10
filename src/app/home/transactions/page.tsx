import { Suspense } from "react";
import TransactionLoader from "@/src/components/TransactionLoader";
import TransactionWrapper from "@/src/components/TransactionWrapper";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transaction Page",
  description: "e-Wallet Transactions",
};

export default function PageTransactions() {
  return (
    <Suspense fallback={<TransactionLoader />}>
      <TransactionWrapper />
    </Suspense>
  );
}
