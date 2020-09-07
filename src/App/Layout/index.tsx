import React, { useMemo, useState } from "react";
import css from "./index.module.css";

export default (props: { children?: any }) => {
  const [style, styleChange] = useState({});
  useMemo(() => {
    setTimeout(() => {
      styleChange({ gridTemplateColumns: "100px 1fr" });
    }, 100);
  }, []);
  return (
    <div style={style} className={css.view}>
      <div className={css.header}>header</div>
      <div className={css.menu}>menu</div>
      <div className={css.body}>{props.children}</div>
      <div className={css.footer}>footer</div>
    </div>
  );
};
