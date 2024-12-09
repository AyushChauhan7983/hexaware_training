import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Admin from "./Admin";
import User from "./User";

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Store</h1>
        <nav>
          <Link to="/admin">Admin Dashboard</Link> |{" "}
          <Link to="/user">User Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
