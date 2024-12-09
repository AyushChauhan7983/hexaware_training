import react from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const Paycalc = () => {
  let data = useLocation();
  let { name, bonus, totalSalary } = data.state;

  return (
    <div>
      <Navbar />
      <h1>Name : {name}</h1>
      <h1>Bonus : {bonus}</h1>
      <h1>Salary : {totalSalary}</h1>
    </div>
  );
};

export default Paycalc;
