import React from "react";
//import { Outlet } from "react-router-dom";
import "./Footer.css";
import github from "./github.png";
import linkedin from "./linkedin.png";
import instagram from "./instagram.png";

function Footer() {
  return (
    <footer>
      <div className="bottom-container">
        <a href="https://www.linkedin.com/in/raven-ontiveros21">
          <img className="footer-img" src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://github.com/RaveBlue">
          <img className="footer-img" src={github} alt="Github" />
        </a>
        <a href="https://www.instagram.com">
          <img className="footer-img" src={instagram} alt="Instagram" />
        </a>
        <p className="copyright">All contents &copy; 2023 Raven Ontiveros</p>
      </div>
    </footer>
  );
}

export default Footer;
