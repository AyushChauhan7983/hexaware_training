import react from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const Welcome = () => {
  let data = useLocation();
  let { id, password } = data.state;
  return (
    <div>
      <Navbar />
      <h1>Welcome {id}</h1>
    </div>
  );
};

export default Welcome;
