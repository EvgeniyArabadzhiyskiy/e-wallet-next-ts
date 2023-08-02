import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div>
      <div>
          <Link href="/home">HOME</Link>{" "}
          <br />
          <div style={{marginTop: 20}}></div>
          <Link  href="/about">About</Link>{" "} 
          <br />
          <div style={{marginTop: 20}}></div>
          <Link href="/currency">HYDRATE</Link>{" "}
          <br />
          <div style={{marginTop: 20}}></div>
          <Link  href="/login">LOGIN</Link>
        </div>
        <pre>
          {/* <Link href="/home/product">PRODUCT</Link> */}
        </pre>
      </div>

    
    </>
  );
}
