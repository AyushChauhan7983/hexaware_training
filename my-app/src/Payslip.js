import react from "react";

const PaySlip = () => {
  let [name, setName] = react.useState("");
  let [salary, setSalary] = react.useState(0);
  let [leaves, setLeaves] = react.useState(0);
  let [total, setTotal] = react.useState(0);
  let [bonus, setBonus] = react.useState(0);

  const calculate = (e) => {
    let calculatedBonus = 0;
    if (leaves <= 3) {
      calculatedBonus = salary * 0.05;
    }
    setBonus(calculatedBonus);
    setTotal(salary + calculatedBonus);
  };

  return (
    <div>
      <h1>PaySlip Calculation</h1>
      <input
        type="text"
        placeholder="Enter employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter basic salary"
        value={salary}
        onChange={(e) => setSalary(parseInt(e.target.value))}
      />
      <input
        type="number"
        placeholder="Enter number of leaves"
        value={leaves}
        onChange={(e) => setLeaves(parseInt(e.target.value))}
      />

      <button onClick={calculate}>Calculate</button>

      <h2>PaySlip</h2>
      <h4>Employee Name: {name}</h4>
      <h4>Bonus: {bonus}</h4>
      <h4>Leaves: {leaves}</h4>
      <h4>Total Salary: {total}</h4>
    </div>
  );
};

export default PaySlip;
