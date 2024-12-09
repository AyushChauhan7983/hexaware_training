import react from "react";

const StudentFail = (props) => {
  return (
    <>
      <h1>Result</h1>
      <h1>Student Failed</h1>
      <h3>Better luck next time!</h3>
      <h2>Name : {props.name}</h2>
      <h2>Total : {props.total}</h2>
    </>
  );
};
export default StudentFail;
