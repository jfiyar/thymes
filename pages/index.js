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
        <h1>
          <center>Hello thymes!</center>
        </h1>
        <h2>
          <center>{props.serve}</center>
        </h2>
      </main>
    </>
  );
}
Home.getInitialProps = async ({ req }) => {
  return { serve: new Date().getTime() };
};
