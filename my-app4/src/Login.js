import react from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  let [id, setId] = useState("");
  let [password, setPassword] = useState("");
  let [flag, setFlag] = useState(false);

  let nav = useNavigate();

  const login = () => {
    if (id == "ayush" && password == "ayush123") {
      localStorage.setItem("id", id);
      localStorage.setItem("password", password);
      sessionStorage.setItem("flag", "true");
      nav("/welcome1");
    } else {
      nav("/error", { state: { id, password } });
    }
  };
  return (
    <div>
      <Navbar />
      <div className="login-container">
        <form className="login-form">
          <h2 className="login-title">Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" className="login-button" onClick={login}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
