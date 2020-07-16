import Head from "next/head";
import Link from "next/link";

export default () => {
  return (
    <>
      <Head>
        <title>登录</title>
      </Head>
      <main>
        <Link href="/">
          <a href="/">回到首页</a>
        </Link>

        <form>
          <label>
            <div>账号</div>
            <input />
          </label>
          <label>
            <div>密码</div>
            <input />
          </label>
          <div>
            <Link href="/register">
              <a>注册</a>
            </Link>
          </div>
          <div>
            <button>登录</button>
          </div>
        </form>
      </main>
    </>
  );
};
