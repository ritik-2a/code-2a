import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">CareerMap AI</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/career-insights">Career Insights</Link>
        </li>
        <li>
          <Link to="/consultation">AI Consultation</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
