import React from "react";
import "../App.css";

import OtherImage from "../assets/other-img.png";
import Length from "../assets/other-lenght.png";
import ArrowLeft from "../assets/arrow-left.png";
import ArrowRight from "../assets/arrow-right.png";

const OtherSection = () => {
  return (
    <section className="other-section">
      <h1 className="other-title">Other projects</h1>

      <div className="other-img-container">
        <img className="other-image" src={OtherImage} alt="OtherImg" />
      </div>
      <span className="other-navigation">
        <img className="length" src={Length} alt="length" />

        <img className="arrow-left" src={ArrowLeft} alt="arrow" />
        <img className="arrow-right" src={ArrowRight} alt="arrow" />
      </span>
    </section>
  );
};

export default OtherSection;
