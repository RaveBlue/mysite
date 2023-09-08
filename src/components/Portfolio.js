import "./Portfolio.css";
import React from "react";
import cloudone from "./cloudone.png";
import coding from "./coding.png";

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

        <img class="image" src={coding} alt="article image" />
        <p>
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
        <h3>The Second Project</h3>
        <img className="imagetwo" src={coding} alt="article image" />
        <p>
          The next project was a BMI calculator application, that let the user
          know if they were overweight, underweight or normal.
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
      <article className="third">
        <h3>The Third Project</h3>
        <img className="image" src={coding} alt="article image" />
        <p>
          The third project was a website for a small language printables
          business called Blue's Printables.
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
    </div>
  );
};

export default Portfolio;
