import react from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            MyWebsite
          </Link>
          <ul className="navbar-links">
            <li>
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="navbar-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navbar-link">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/payslip" className="navbar-link">
                Payslip
              </Link>
            </li>
            <li>
              <Link to="/login" className="navbar-link">
                <button>Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
