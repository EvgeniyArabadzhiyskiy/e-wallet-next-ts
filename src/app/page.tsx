import Link from "next/link";
import { LogoutButton } from "../components/AuthButtons/AuthButtons";

export default async function Home() {
  return (
    <>
      <div>
        <Link href="/home">HOME</Link>
        <Link href="/about">About</Link>
        <pre>
          <Link href="/login">LOGIN</Link>
        </pre>
        <pre>
          <Link href="/home/product">PRODUCT</Link>
        </pre>
        {/* <LogoutButton /> */}
      </div>

    
    </>
  );
}
