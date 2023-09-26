import "./About.css";
import React from "react";
import cloudone from "./cloudone.png";
import personme from "./personme.png";
import coding from "./coding.png";
import skills from "./skills.png";
import Raven from "./Raven.png";

const About = () => {
  return (
    <div className="main">
      <div className="top-container">
        <img className="top-cloud" src={cloudone} alt="cloud" />
        <h1> About </h1>
      </div>

      <div className="middle-container">
        <div className="profile">
          <img className="me" src={personme} alt="person" />
          <h2>Hello.</h2>
          <p className="intro">
            My name is Raven. I enjoy creating web applications. I 💗 matcha
            lattes and boba tea.
          </p>
        </div>
        <hr />
        <div className="skills">
          <h2>My Skills</h2>
          <div className="skill-row">
            <img className="code" src={coding} alt="code" />
            <h3>Design & Development</h3>
            <p>
              I first decided to learn to code when I came across this
              multimedia class, and we learned about different media careers. I
              came across web development and found it very interesting, so I
              switched from a degree in Physical therapy to a degree in web
              design and development. I then decided to join a coding bootcamp
              and I was able to join Fullstack Academy through Colorado State
              University.
            </p>
          </div>
          <div className="skill-row">
            <img className="more" src={skills} alt="skills" />
            <h3>Coding skills and Education</h3>
            <p>
              Web design and development graduate with additional training from
              Fullstack Academy software engineering immersive bootcamp. I have
              skills using HTML, CSS, JavaScript, React, Node.js, Express.js,
              PostgreSQL, Git and Python. I also enjoy learning other languages
              such as French and Korean. I also like photography, and art as
              well as health and fitness.
            </p>
          </div>
        </div>

        <img className="raven" src={Raven} alt="person" />
      </div>
    </div>
  );
};

export default About;
