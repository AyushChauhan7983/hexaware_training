import react from "react";

const StudentPass = (props) => {
  return (
    <>
      <h1>Result</h1>
      <h2>Student Passed</h2>
      <h2>Name : {props.name}</h2>
      <h2>Total : {props.total}</h2>
      <h2>Average: {props.avg}</h2>
      <h2>Grade: {props.grade}</h2>
    </>
  );
};
export default StudentPass;
