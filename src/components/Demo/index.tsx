//鼠标指针插针

import React, { useState, useMemo } from "react";
import css from "./index.module.css";
let pastCurPos: any = { x: 0, y: 0 };
let curPosCpy: any = { x: 0, y: 0 };
let changeTimes: number = 0;
let end = true;

export default (props: { name: string; onClick: Function }) => {
  const [curPos, curPosChange] = useState({ x: 0, y: 0 });

  if (pastCurPos.x !== curPos.x || pastCurPos.y !== curPos.y) {
    curPosCpy.x1 = (2 * curPos.x + pastCurPos.x) / 3;
    curPosCpy.y1 = (2 * curPos.y + pastCurPos.y) / 3;
    curPosCpy.x2 = (curPos.x + 2 * pastCurPos.x) / 3;
    curPosCpy.y2 = (curPos.y + 2 * pastCurPos.y) / 3;
  }
  if (curPos !== pastCurPos) {
    pastCurPos = curPos;
  }
  useMemo(() => {
    const siv = setInterval(() => {
      console.log(changeTimes);
      changeTimes = 0;
    }, 1000);
    return () => clearInterval(siv);
  }, []);
  return (
    <div>
      <div className={css.view}>{props.name}</div>

      <div
        onMouseMove={(e) => {
          if (end) {
            const x = e.pageX;
            const y = e.pageY - 60;
            end = false;
            requestAnimationFrame(() => {
              changeTimes++;
              curPosChange({ x, y });
              end = true;
            });
          }
        }}
        className={css.cursorView}
      >
        <span
          className={css.cursor}
          style={{
            left: curPosCpy.x1,
            top: curPosCpy.y1,
            opacity: 0.6,
          }}
        />
        <span
          className={css.cursor}
          style={{
            left: curPosCpy.x2,
            top: curPosCpy.y2,
            opacity: 0.3,
          }}
        />
        <span
          className={css.cursor}
          style={{
            left: curPos.x,
            top: curPos.y,
          }}
        />
      </div>
      <div>
        curPos:{JSON.stringify(curPos)}
        <br />
        curPosCpy:{JSON.stringify(curPosCpy)}
      </div>
    </div>
  );
};
