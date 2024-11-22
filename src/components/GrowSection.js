import React from "react";
import "../App.css";

import Figure from "../assets/figure.png";
import Handwriting from "../assets/handwriting.png";
import Gradient2 from "../assets/gradient2.png";

const GrowSection = () => {
  return (
    <section className="grow-section">
      <img className="figure-image" src={Figure} alt="figures" />

      <img className="gradient-2" src={Gradient2} alt="gradient-2" />

      <h1 className="grow-title">
        How we can
        <br />
        help grow
      </h1>

      <div className="clarity-container">
        <div className="clarity">
          <p className="first-clarity">Product clarity</p>
          <p className="second-clarity">UX/UI design</p>
          <p className="second-clarity">Maintain process</p>
        </div>
        <img className="handwriting" src={Handwriting} alt="length" />
        <div className="idea">
          <p className="first-idea">
            Are you at the idea stage? We
            <br /> will help you identify the critical
            <br /> MVP product scope.
          </p>
          <p className="second-idea">
            product goal&vision
            <br />
            brand voice
            <br />
            product positioning
          </p>
        </div>
      </div>
    </section>
  );
};

export default GrowSection;
