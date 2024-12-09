import { useState } from "react";
import Morning from "./Morning";
import Afternoon from "./Afternoon";

const Mssg = () => {
  let [time, setTime] = useState();
  let [name, setName] = useState();
  let [flag, setFlag] = useState(0);

  const handleTime = (e) => {
    setTime(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const show = () => {
    if (time < 12) {
      setFlag(1);
    } else {
      setFlag(2);
    }
  };

  return (
    <div>
      <input type="text" placeholder=" time " onChange={handleTime} />
      <input type="text" placeholder="enter name" onChange={handleName} />
      <button onClick={show}>show msg</button>

      {flag == 0 ? null : flag == 1 ? (
        <Morning name={name} />
      ) : (
        <Afternoon name={name} />
      )}
    </div>
  );
};

export default Mssg;
