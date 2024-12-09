import react from "react";
import { useState } from "react";

const Sum = () => {
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);
  let [sum, setSum] = useState(0);

  const handleNum1 = (e) => {
    setNum1(parseInt(e.target.value));
  };

  const handleNum2 = (e) => {
    setNum2(parseInt(e.target.value));
  };

  const handleSum = () => {
    setSum(num1 + num2);
  };

  const handleClear = () => {
    setNum1(0);
    setNum2(0);
    setSum(0);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Sum</h1>
      <input
        type="number"
        value={num1}
        placeholder="enter first number"
        onChange={handleNum1}
      />
      <input
        type="number"
        value={num2}
        placeholder="enter second number"
        onChange={handleNum2}
      />
      <button onClick={handleSum}>Sum</button>
      <button onClick={handleClear}>Clear</button>
      <h1>{sum}</h1>
    </div>
  );
};

export default Sum;
