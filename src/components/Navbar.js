import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import name from "./name.png";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={name} alt="Logo" />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link">
            About
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/Portfolio" className="nav-link">
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <button type="button" className="contact-button">
            <Link to="/Contact" className="nav-link">
              Contact
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
