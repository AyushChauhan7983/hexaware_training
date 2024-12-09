import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <h1>Contact</h1>
      <nav>
        <ul>
          <li>
            <Link to="support">Customer Support</Link>
          </li>
          <li>
            <Link to="feedback">Feedback</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Contact;
