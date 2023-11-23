import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
       <Link href={"/dashboard"} style={{display:'flex', justifyContent:'center', marginTop:'32px'}}><h3>Creator Dashboard</h3></Link>
    </>
  );
}
