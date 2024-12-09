import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Payslip = () => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [bonus, setBonus] = useState("");
  const [totalSalary, setTotalSalary] = useState("");

  let nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedBonus = parseInt(salary) * 0.1;
    const calculatedTotalSalary = parseInt(salary) + calculatedBonus;

    setBonus(calculatedBonus);
    setTotalSalary(calculatedTotalSalary);

    nav("/paycalc", {
      state: {
        name,
        bonus: calculatedBonus,
        totalSalary: calculatedTotalSalary,
      },
    });
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Payslip</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="name" style={styles.label}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="salary" style={styles.label}>
              Salary:
            </label>
            <input
              type="number"
              id="salary"
              placeholder="Enter salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button} onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    fontSize: "16px",
    color: "#555",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Payslip;
