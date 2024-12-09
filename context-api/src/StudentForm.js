import { useContext, useState } from "react";
import { studentContext } from "./StudentContext";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [fee, setFee] = useState("");

  const { setStudent } = useContext(studentContext);

  const add = () => {
    setStudent({ name, fee: parseFloat(fee) || 0 });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your fee"
        onChange={(e) => setFee(e.target.value)}
      />
      <button onClick={add}>Submit</button>
    </>
  );
};

export default StudentForm;
