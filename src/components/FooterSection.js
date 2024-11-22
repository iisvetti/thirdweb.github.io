import React from "react";
import "../App.css";

import ArrowFooter from "../assets/arrow-footer.png";
import CircleGreen from "../assets/circleGreen.png";
import CircleLight from "../assets/circleLight.png";
import CircleBlue from "../assets/circleBlue.png";

const FooterSection = () => {
  return (
    <footer>
      <div className="footer-container">
        <h1 className="footer-header">Web3 product studio</h1>
        <p className="footer-description">
          Feel free to reach out if you want to collaborate
          <br />
          with us, or simply have a chat.
        </p>
        <p className="footer-email">
          hello@thirdweb.studio{" "}
          <img src={ArrowFooter} alt="arrow" className="arrow-footer" />
        </p>
      </div>
      <img src={CircleGreen} className="circle1" alt="circle1" />
      <img src={CircleLight} className="circle2" alt="circle2" />
      <img src={CircleBlue} className="circle3" alt="circle3" />

      <div className="our-projects">
        <h3 className="our-projects-header">Our projects</h3>
        <p className="footer-paragraph">WingRiders</p>
        <p className="footer-paragraph">Trackee</p>
        <p className="footer-paragraph">Worldcoin</p>
        <p className="footer-paragraph">Audience+</p>
      </div>

      <div className="follow-us">
        <h3 className="follow-header">Follow us</h3>
        <p className="footer-paragraph">Facebook</p>
        <p className="footer-paragraph">Instagram</p>
        <p className="footer-paragraph">Dribble</p>
        <p className="footer-paragraph">Linkedin</p>
      </div>
    </footer>
  );
};

export default FooterSection;
