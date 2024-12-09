import react from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const Error = () => {
  let data = useLocation();
  let { id, password } = data.state;
  return (
    <div>
      <Navbar />
      <h1>This id {id} does not exist</h1>
    </div>
  );
};

export default Error;
