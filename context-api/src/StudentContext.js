import { createContext, useState } from "react";

export const studentContext = createContext();

const StudentContext = ({ children }) => {
  const [student, setStudent] = useState({ name: "", fee: 0 });

  return (
    <studentContext.Provider value={{ student, setStudent }}>
      {children}
    </studentContext.Provider>
  );
};

export default StudentContext;
