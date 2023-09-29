import "./Contact.css";
import React from "react";
import cloudone from "./cloudone.png";
import clo from "./clo.png";
import contactus from "./contactus.png";
import app from "./app.png";
//import RavenResume from "./RavenResume.pdf";
//import { Document, Page } from "react-pdf";

const Contact = () => {
  return (
    <div className="main">
      <div className="top-container">
        <img className="top-cloud" src={cloudone} alt="cloud" />
        <h1> Contact Me</h1>
      </div>
      <div className="middle-container">
        <div className="profile">
          <img className="me" src={clo} alt="contact" />
          <h2>Hello.</h2>
          <p className="intro">
            You can contact me on LinkedIn, through Email or by Phone.
          </p>
        </div>
        <hr />
        <div className="skills">
          <h2>Contact Info</h2>
          <div className="skill-row">
            <img className="code" src={contactus} alt="phone" />
            <h3>Raven Ontiveros</h3>
            <ul>
              <li>
                <strong>Phone Number:</strong> (915)328-9112
              </li>
              <li>
                <strong>Email:</strong> Raveblue21@yahoo.com
              </li>
              <li>
                <strong>Gmail:</strong>ravenontiveros21@gmail.com
              </li>
            </ul>
            <div className="skill-row">
              <img className="more" src={app} alt="app" />
              <h3>Links</h3>
              <ul>
                <li>
                  <a
                    className="resume"
                    href="https://docs.google.com/document/d/1ErfEPhA3GOZN9oltJF4SZqJKsY5jPKuqQ6ooMSOPqgI/edit?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Resume &rarr;</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
