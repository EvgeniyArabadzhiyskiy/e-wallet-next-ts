import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div>
        <Link href="/home">HOME</Link>
        <Link href="/about">About</Link>
        <Link href="/currency">Currency</Link>
        <pre>
          <Link href="/login">LOGIN</Link>
        </pre>
        <pre>
          {/* <Link href="/home/product">PRODUCT</Link> */}
        </pre>
      </div>

    
    </>
  );
}
