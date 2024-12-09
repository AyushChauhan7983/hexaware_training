import React, { useState } from "react";
import StudentFail from "./StudentFail";
import StudentPass from "./StudentPass";

const Student = () => {
  let [name, setName] = useState("");
  let [maths, setMaths] = useState(0);
  let [science, setScience] = useState(0);
  let [english, setEnglish] = useState(0);
  let [hindi, setHindi] = useState(0);
  let [social, setSocial] = useState(0);
  let [flag, setFlag] = useState(0);
  let [total, setTotal] = useState(0);
  let [avg, setAvg] = useState(0);
  let [grade, setGrade] = useState("");

  const calculate = () => {
    let t =
      parseInt(maths) +
      parseInt(science) +
      parseInt(english) +
      parseInt(hindi) +
      parseInt(social);
    setTotal(t);

    let a = t / 5;
    setAvg(a);

    let g = "";
    if (a >= 90) {
      g = "A";
    } else if (a >= 80) {
      g = "B";
    } else if (a >= 70) {
      g = "C";
    } else if (a >= 60) {
      g = "D";
    } else {
      g = "E";
    }
    setGrade(g);

    if (t > 200) {
      setFlag(1);
    } else {
      setFlag(2);
    }
  };

  return (
    <>
      <h1>Student Marks Calculator</h1>
      <label>Enter your name</label>
      <input
        style={{ padding: "10px", margin: "5px" }}
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Enter your maths marks</label>
      <input
        style={{ padding: "10px", margin: "5px" }}
        type="number"
        placeholder="Enter Maths Marks"
        value={maths}
        onChange={(e) => setMaths(e.target.value)}
      />

      <label>Enter your science marks</label>
      <input
        style={{ padding: "10px", margin: "5px" }}
        type="number"
        placeholder="Enter Science Marks"
        value={science}
        onChange={(e) => setScience(e.target.value)}
      />

      <label>Enter your english marks</label>
      <input
        style={{ padding: "10px", margin: "5px" }}
        type="number"
        placeholder="Enter English Marks"
        value={english}
        onChange={(e) => setEnglish(e.target.value)}
      />

      <label>Enter your hindi marks</label>
      <input
        style={{ padding: "10px", margin: "5px" }}
        type="number"
        placeholder="Enter Hindi Marks"
        value={hindi}
        onChange={(e) => setHindi(e.target.value)}
      />

      <label>Enter your social marks</label>
      <input
        style={{ padding: "10px", margin: "5px" }}
        type="number"
        placeholder="Enter Social Marks"
        value={social}
        onChange={(e) => setSocial(e.target.value)}
      />
      <button style={{ margin: "10px" }} onClick={calculate}>
        Calculate
      </button>

      {flag === 0 ? null : flag === 1 ? (
        <StudentPass name={name} total={total} avg={avg} grade={grade} />
      ) : (
        <StudentFail name={name} total={total} />
      )}
    </>
  );
};

export default Student;
