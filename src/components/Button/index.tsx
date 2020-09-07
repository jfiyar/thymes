import React from "react";
import css from "./index.module.css";
// import "./test";

export default (props: { children?: any; className?: string }) => {
  return (
    <button className={[css.button, props.className].join(" ")}>
      {props.children}
    </button>
  );
};
