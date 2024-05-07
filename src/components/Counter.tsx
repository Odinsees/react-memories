import { useState } from "react";
import style from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1 className={style.green}>{count}</h1>
      <button className={style.btn} onClick={onIncrement}>
        increment
      </button>
    </div>
  );
};
