import React from "react";
import "../App.css";

import Teammate1 from "../assets/teammate1.png";
import Teammate2 from "../assets/teammate2.png";
import Teammate3 from "../assets/teammate3.png";
import ArrowAbout from "../assets/arrow-about.png";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1>About</h1>
        <p>
          Team of product and brand designers that are
          <br />
          really passionate about blockchain technology
          <br /> and good design. We are not just UI freaks! We
          <br /> advocate users for better product experience and
          <br /> common sense.
        </p>
        <span>
          More about us
          <img src={ArrowAbout} className="arrow-about" alt="arrow" />
        </span>
      </div>
      <img src={Teammate1} className="teammate1" alt="teammate1" />
      <img src={Teammate2} className="teammate2" alt="teammate2" />
      <img src={Teammate3} className="teammate3" alt="teammate3" />
    </section>
  );
};

export default AboutSection;
