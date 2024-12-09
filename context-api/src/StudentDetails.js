import { useContext } from "react";
import { studentContext } from "./StudentContext";

const StudentDetails = () => {
  const { student } = useContext(studentContext);

  return (
    <>
      <h1>Name: {student.name}</h1>
      <h1>Fee: {student.fee}</h1>
    </>
  );
};

export default StudentDetails;
