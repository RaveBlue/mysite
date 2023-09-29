import "./Portfolio.css";
import React from "react";
import cloudone from "./cloudone.png";
import coding from "./coding.png";
import { Link } from "react-router-dom";
import calculator from "./calculator.png";
import heartrate from "./heartrate.png";
import icecream from "./icecream.png";
import smoothie from "./smoothie.png";
import snake from "./snake.png";
import css from "./css.png";
const Portfolio = () => {
  return (
    <div className="main">
      <div className="top-container">
        <img className="top-cloud" src={cloudone} alt="cloud" />
        <h1>Portfolio</h1>
      </div>
      <p> Things I've built:</p>

      <article class="featured">
        <h3>The First Project</h3>

        <img class="image" src={coding} alt="coding icon" />
        <p className="select1">
          This first project was a website for a Divine Protein Ice-cream
          website.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi at
          earum fuga harum alias nobis, eaque optio laudantium dolor sed
          eligendi consequatur distinctio aperiam accusantium, architecto
          exercitationem perferendis minus error. Fuga dolore impedit suscipit,
          vero odit, sequi in deleniti, odio ipsa facere et. Consequatur modi
          cum ullam adipisci unde amet qui sed odio officia ipsa omnis earum
          quibusdam, dolor totam?
        </p>
      </article>

      <article className="second">
        <h3>BMI Calculator</h3>
        <img className="imagetwo" src={calculator} alt="calculator" />
        <p className="select1">
          BMI calculator|Developer|Designer|2022 &rarr;
          <Link
            className="weblink"
            to="https://lighthearted-belekoy-7b81db.netlify.app/"
            target="_blank"
          >
            BMI Calculator
          </Link>
          <Link
            className="weblink1"
            to="https://github.com/RaveBlue/calculatorBMI.git"
            target="_blank"
          >
            Github
          </Link>
        </p>
        <ul>
          <li className="description1">
            A BMI calculator to calculate a persons body mass index.
          </li>
          <li className="description2">
            Designed and developed with Node.js, Express.js, HTML, CSS. Solely
            responsible for the development of this project.
            <li className="description2">
              The calculator helps calculate if a person is underweight, normal,
              overweight or obese based off of their height and weight using the
              metric system.
            </li>
          </li>
        </ul>
      </article>
      <article className="third">
        <h3>Peaches & Cream Smoothie Cafe</h3>
        <img className="image" src={smoothie} alt="smoothie" />
        <p className="select1">
          Website|Designer|July/2022|&rarr;
          <Link
            className="weblink"
            to="https://spectacular-melba-bf9a76.netlify.app"
            target="_blank"
          >
            Peaches and Cream website link
          </Link>
        </p>
        <ul>
          <li className="description">
            A website designed for a fictional smoothie business I came up with.
          </li>
          <li className="description3">
            Adobe Illustrator was used to design the logo, flaticon website was
            used for other logo icons. Built and designed with HTML, CSS, and
            Bootstrap and designed by myself.
          </li>
        </ul>
      </article>
      <article className="fourth">
        <h3>Strangers Things</h3>
        <img className="image" src={coding} alt="code page" />
        <p className="select1">
          Strangers Things|Developer|December/2022|&rarr;
          <Link
            className="weblink"
            to="https://github.com/RaveBlue/strangers_things.git"
            target="_blank"
          >
            Github
          </Link>
        </p>
        <ul>
          <li className="description">
            A front-end CRUD application. App is meant to be like a
            Craigslist-lite.
          </li>
          <li className="description3">
            Designed and developed with React, JSX, CSS, AJAX. As the sole
            developer, managed the entire development life cycle of strangers
            things, including requirement gathering, coding, testing, and
            deployment.
          </li>
        </ul>
      </article>
      <article className="fifth">
        <h3>Snake Game</h3>
        <img className="image" src={snake} alt="snake" />
        <p className="select1">
          Snake Game|Developer|Nov/2022|&rarr;
          <Link
            className="weblink"
            to="https://teal-flan-c996b8.netlify.app/"
            target="_blank"
          >
            Snake Game
          </Link>
          <Link
            className="weblink1"
            to="https://github.com/RaveBlue/Snake_Game_Arcade.git"
            target="_blank"
          >
            Github
          </Link>
        </p>
        <ul>
          <li className="description">
            A snake game built so every-time the snake eats the apple the snake
            grows and when it bumps into the wall or tail it ends the game,
            using programming concepts like while loops, control structures
            like, if, else and else if statements.
          </li>
          <li className="description3">
            Single-handedly designed and implemented the game utilizing
            JavaScript, HTML and CSS.
          </li>
        </ul>
      </article>
      <article className="sixth">
        <h3>CSS Zen Garden</h3>
        <img className="image" src={css} alt="css" />
        <p className="select1">
          CSS Zen Garden|Designer|July/2022|&rarr;
          <Link
            className="weblink"
            to="https://capable-puppy-8ae17c.netlify.app/"
            target="_blank"
          >
            CSS Design Link
          </Link>
        </p>
        <ul>
          <li className="description">
            A demonstration of what can be accomplished through CSS-based
            design.
          </li>
          <li className="description3">
            A modified page using CSS and HTML. This is meant to show creativity
            and show how CSS can make a page look nice with different designs.
          </li>
        </ul>
      </article>
      <article className="seventh">
        <h3>Fitness Tracker Front-end</h3>
        <img className="image" src={heartrate} alt="heartrate watch" />
        <p className="select1">
          Fitness Tracker|Developer|Designer|2023|In-progress&rarr;
          <Link
            className="weblink1"
            to="https://github.com/RaveBlue/fitnesstracker.git"
            target="_blank"
          >
            Github
          </Link>
        </p>
        <ul>
          <li className="description">A front-end Fitness Tracker.</li>
          <li className="description3">
            A front-end Fitness Tracker designed and developed using React,
            Back-End API, JSX, CSS. Attracts potential users in their quest to
            get healthy.
          </li>
        </ul>
      </article>
      <article className="eighth">
        <h3>Divine Protein Ice-cream</h3>
        <img className="image" src={icecream} alt="icecream" />
        <p className="select1">
          Divine Ice-cream|Developer|Designer|April/2023|&rarr;
          <Link className="weblink" to="" target="_blank">
            Divine Ice-cream
          </Link>
          <Link className="weblink1" to="" target="_blank">
            Github
          </Link>
        </p>
        <ul>
          <li className="description">
            A website designed for a fictional protein ice-cream business I came
            up with.
          </li>
          <li className="description3">
            Designed using React, JSX, CSS. Adobe Illustrator was used to design
            ice-cream images and the logo. Solely responsible for the
            development of this project, from conceptualization to deployment.
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Portfolio;
