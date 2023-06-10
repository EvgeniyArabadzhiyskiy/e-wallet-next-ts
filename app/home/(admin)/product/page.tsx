import Link from "next/link";

export default async function Product() {
    return (
      <>
      <h1>Product</h1>
        <div>
          <Link href="/">HOME</Link>
          <pre>
            <Link href="/login">LOGIN</Link>
          </pre>
        </div>
  
      
      </>
    );
  }