import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const add = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      setCount(1);
    }

    console.log(count);
  };

  const sub = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
    console.log(count);
  };

  return (
    <div className="div1">
      <h1>Counter</h1>
      <p>Count : {count}</p>
      <button onClick={add}>Increment</button>
      <button onClick={sub}>Decrement</button>
    </div>
  );
};

export default Counter;
