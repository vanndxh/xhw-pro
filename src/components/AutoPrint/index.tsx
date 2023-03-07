/**
 * @file 自动打印组件
 * @param text 需要打印的文本
 */
import React, { useEffect, useState } from "react";
import styles from "./index.module.less";

interface Props {
  /** 需要展示的文本 */
  text: string;
}

function AutoPrint(props: Props) {
  const { text } = props;

  /** 展示文本位数 */
  const [showNumber, setShowNumber] = useState(0);
  /** 是否展示右侧光标 */
  const [isShowCursor, setIsShowCursor] = useState(true);
  /** 文本展示timer */
  const [textTimer, setTextTimer] = useState<any>(0);
  /** 展示右侧光标的timer */
  const [cursorTimer, setCursorTimer] = useState<any>(0);

  useEffect(() => {
    const newTextTimer = setInterval(() => {
      setIsShowCursor((pre) => !pre);
    }, 500);
    setTextTimer(newTextTimer);

    const newCursorTimer = setInterval(() => {
      setShowNumber((pre) => pre + 1);
    }, 400);
    setCursorTimer(newCursorTimer);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (showNumber === text?.length) {
      setIsShowCursor(false);
      clearInterval(textTimer);
      clearInterval(cursorTimer);
    }
    // eslint-disable-next-line
  }, [showNumber]);

  return (
    <div className={styles["auto-print"]}>
      {/** 左边文字部分 */}
      <div className={styles["auto-print-left"]}>
        {text?.substring(0, showNumber)}
      </div>

      {/** 右边光标部分 */}
      <div
        className={styles["auto-print-right"]}
        style={{ display: isShowCursor ? "" : "none" }}
      ></div>
    </div>
  );
}
export default AutoPrint;