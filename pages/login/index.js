import Head from "next/head";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Axios from "axios";

export default () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => {
    Axios.post("/login", values).then((res) => {
      console.log(res);
    });
  };
  console.log(errors);
  return (
    <>
      <Head>
        <title>登录</title>
      </Head>
      <main>
        <Link href="/">
          <a href="/">回到首页</a>
        </Link>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <div>账号</div>
            <input
              name="account"
              ref={register({
                required: "账号不能为空",
              })}
            />
            {errors.account?.message}
          </label>
          <label>
            <div>密码</div>
            <input
              name="password"
              ref={register({
                required: "密码不能为空",
              })}
            />
            {errors.password?.message}
          </label>
          <div>
            <Link href="/register">
              <a>注册</a>
            </Link>
          </div>
          ----------------------------------------------------------------------00000000000000000000000000000
          <div>
            <button>登录</button>
          </div>
        </form>
      </main>
    </>
  );
};
