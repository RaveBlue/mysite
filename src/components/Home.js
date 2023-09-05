import React from "react";
import "./Home.css";
//import "./Footer.css";
import cloudone from "./cloudone.png";
import mountainone from "./mountainone.png";

const Home = () => {
  return (
    <div className="top-container">
      <img className="top-cloud" src={cloudone} alt="cloud" />
      <h1> I'm Raven.</h1>
      <p>
        "Life is a journey with problems to solve, lessons to learn, but most of
        all, experiences to enjoy."
      </p>

      <img className="bottom-cloud" src={cloudone} alt="cloud" />
      <img src={mountainone} alt="mountain" />
    </div>
  );
};

export default Home;
