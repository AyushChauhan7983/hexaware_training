import react from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Navbar from "./Navbar";
import { useState } from "react";

const Home = () => {
  let [user, setUser] = useState(["asha", "pooja", "ayush", "sahil", "sagar"]);
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <ul>
        {user.map((x) => (
          <li>
            <Link to={`/user/${x}`}>{x}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
