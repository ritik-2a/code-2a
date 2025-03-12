import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex justify-between items-center shadow-lg">
      <div className="logo text-white text-2xl font-bold">
        <Link to="/">CareerMap AI</Link>
      </div>
      <ul className="nav-links flex space-x-4 text-white">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/career-insights" className="hover:underline">
            Career Insights
          </Link>
        </li>
        <li>
          <Link to="/consultation" className="hover:underline">
            AI Consultation
          </Link>
        </li>
        <li className="relative">
         
          {isDropdownOpen && (
            <ul className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg z-10">
              <li>
                <Link
                  to="/about"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
