import TransactionTable from "@/src/components/TransactionTable/TransactionTable";
import { Suspense } from "react";

export default function PageTransactions() {
  return (
    <>
      <Suspense fallback={<h1 style={{ color: "white" }}>SUSPENSE...</h1>}>
        <TransactionTable />
      </Suspense>
    </>
  );
}
