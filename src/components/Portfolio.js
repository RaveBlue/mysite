import "./Portfolio.css";
import React from "react";
import cloudone from "./cloudone.png";
import coding from "./coding.png";
import { Link } from "react-router-dom";
import calculator from "./calculator.png";
//import heartrate from "./heartrate.png";
import icecream from "./icecream.png";
import smoothie from "./smoothie.png";
import snake from "./snake.png";
import css from "./css.png";
import flashcard from "./flashcard.png";
import pizza from "./pizza.png";

const Portfolio = () => {
  return (
    <div className="main">
      <div className="top-container">
        <img className="top-cloud" src={cloudone} alt="cloud" />
        <h1>Portfolio</h1>
      </div>
      <p> Things I've built:</p>

      <article class="featured">
        <h3>Language Flashcards</h3>

        <img class="image" src={flashcard} alt="coding icon" />
        <p className="select1">
          Language Learning Flashcards|Developer|2022 &rarr;
          <Link
            className="weblink"
            to="https://github.com/RaveBlue/flashcards.git"
            target="_blank"
          >
            Github
          </Link>
          <Link
            className="weblink1"
            to="https://youtu.be/UDxW3npOcRA.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </Link>
        </p>
        <ul>
          <li className="description">
            Language learning flashcards to learn French vocabulary words.
          </li>
          <li className="description3">
            Developed using Python and png images. This flashcard app is made
            for the user to learn French. It has an X or check mark button for
            the user to select. The flashcards give the user a few seconds
            before it shows the answer in english and from there the user
            decides if they know the word or not, so the flashcards can move on
            to the next word.
          </li>
        </ul>
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
          <Link
            className="weblink1"
            to="https://youtu.be/3WceVdxpffg.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
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
          <Link
            className="weblink1"
            to="https://strangers-things-21.netlify.app"
            target="_blank"
          >
            Strangers Things
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

      {/*<article className="seventh">
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
  </article>*/}
      <article className="eighth">
        <h3>Divine Protein Ice-cream</h3>
        <img className="image" src={icecream} alt="icecream" />
        <p className="select1">
          Divine Protein Ice-cream|Developer|Designer|2023|In-progress&rarr;
          {/*<Link className="weblink" to="" target="_blank">
            Divine Ice-cream</Link>*/}
          <Link
            className="weblink1"
            to="https://github.com/RaveBlue/ice-cream-design.git"
            target="_blank"
          >
            Github
          </Link>
          <Link
            className="weblink1"
            to="https://www.youtube.com/watch?v=oTEKzfPF2aY&feature=youtu.be.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
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
      <article class="featured">
        <h3>React Pizza | Delicious Baked Pizza</h3>

        <img class="image" src={pizza} alt="coding icon" />
        <p className="select1">
          Pizza Ordering App|Developer|2023 &rarr;
          <Link
            className="weblink"
            to="https://github.com/RaveBlue/React-Pizza.git"
            target="_blank"
          >
            Github
          </Link>
          <Link
            className="weblink1"
            to="https://react-pizza21.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pizza
          </Link>
        </p>
        <ul>
          <li className="description">
            Pizza ordering app. Order delicious pizza of your choice!
          </li>
          <li className="description3">
            Developed using React, JSX, Tailwind. This app is made for the user
            to be able to order pizza and add it to the cart. Once added the
            user will be given a order number, price and an estimated delivery
            time for their order.
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Portfolio;
