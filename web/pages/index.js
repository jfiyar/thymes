import Head from "next/head";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import styles from "./index.less";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav>
          <span>thymes</span>
          <Link href="/login">
            <a>登录</a>
          </Link>
        </nav>
      </main>
    </>
  );
}
Home.getInitialProps = async ({ req }) => {
  const fn = (resolve) => resolve("我来自服务端异步" + new Date());
  const serve = await new Promise(fn);
  return { serve };
};
