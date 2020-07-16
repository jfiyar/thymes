import Head from "next/head";
import Link from "next/link";

export default () => {
  return (
    <>
      <Head>
        <title>注册</title>
      </Head>
      <main>
        <Link href="/">
          <a>回到首页</a>
        </Link>
        <form>
          <label>
            <div>密码</div>
            <input />
          </label>
          <label>
            <div>确认密码</div>
            <input />
          </label>
          <div>
            <Link href="/login">
              <a>已有帐号，去登录</a>
            </Link>
          </div>
          <div>
            <button>获取账号</button>
          </div>
        </form>
      </main>
    </>
  );
};
