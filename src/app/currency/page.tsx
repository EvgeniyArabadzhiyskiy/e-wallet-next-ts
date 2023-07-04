// "use client";

import ErrorBoundary from "@/src/components/ErrorBoundary";
import TestError from "@/src/components/TestError";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useMedia } from "react-use";

export default function PageCurrency() {
  // const isDesctop = useMedia("(min-width: 768px)", false);

  // if (isDesctop) {
  //     redirect("/")

  // }

  //   console.log("PageCurrency  isDesctop:=======================", isDesctop);

  //   if (!isDesctop) {
  //     return <h1>Loading Title..</h1>;
  //   }
  return (
    <>
      <Link href="/">HOME</Link>
      <ErrorBoundary>
        <TestError />
      </ErrorBoundary>

      {/* {isDesctop && <h1>Page Currency</h1>} */}
    </>
  );
}
