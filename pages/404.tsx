import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PageError = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 3000);
  }, [router]);

  return (
    <>
      <h1>Sorry there was an error</h1>
      <Link href="/home">Back to home</Link>
    </>
  );
};

export default PageError;
