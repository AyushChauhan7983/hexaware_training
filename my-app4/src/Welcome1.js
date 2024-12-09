import react from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Welcome1 = () => {
  let [id, setId] = useState("");
  let [password, setPassword] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setPassword(localStorage.getItem("password"));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Welcome</h1>
      <h2>Id : {id}</h2>
      <h2>Password : {password}</h2>
    </div>
  );
};

export default Welcome1;
