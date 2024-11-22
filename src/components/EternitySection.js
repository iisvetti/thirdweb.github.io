import React from "react";
import "../App.css";
import infinityImage from "../assets/eternity.png";
import gradientImage from "../assets/eternity-gradient.png";

const EternitySection = () => {
  return (
    <section className="eternity-section">
      <div className="eternity-content">
        <h2>What is Web3 studio?</h2>
        <p>
          Things around crypto, NFTs and web3 as a whole are
          <br /> unbelievably interesting. Unfortunately, the overall usability
          <br /> as well as the quality of the UI is often still not up to the
          <br /> task. To achieve mass adoption, overcoming those hurdles
          <br />
          will be key. And this is where our story begins.
        </p>
      </div>

      <div className="infinity-container">
        <img
          className="infinity-image"
          src={infinityImage}
          alt="Infinity Symbol"
        />

        <div className="gradient-bg">
          <img className="image-gradient" src={gradientImage} alt="Gradient" />
        </div>
      </div>
    </section>
  );
};

export default EternitySection;
