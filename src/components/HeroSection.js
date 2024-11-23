import React, { useState } from "react";
import phoneImage from "../assets/phone.png";
import logo from "../assets/logo.png";
import arrow from "../assets/arrow.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";

const HeroSection = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);

  const openMenu = () => {
    setIsMenuVisible(true);
    setTimeout(() => setIsMenuAnimating(true), 10);
  };

  const closeMenu = () => {
    setIsMenuAnimating(false);
    setTimeout(() => setIsMenuVisible(false), 300);
  };

  return (
    <section className="hero">
      <nav className="navbar">
        <img src={logo} className="logo" alt="logo" />
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Career</li>
        </ul>
        <div className="menu-icon" onClick={openMenu}>
          Menu ☰
        </div>
      </nav>

      <div className="hero-content">
        <h1>
          Design studio <br />
          for the
          <br /> web3 world
        </h1>

        <div className="hero-descr">
          <img src={arrow} className="arrow" alt="arrow" />
          <p className="hero-subtext">
            We help companies design their
            <br />
            products to be ready for web3 world
          </p>
        </div>
      </div>

      <img src={phoneImage} className="hero-image" alt="Phone displaying app" />

      <div className="client-section">
        <p className="client-text">Our clients are backed by:</p>
        <div className="client-logos">
          <img src={logo1} className="logo-yc" alt="logo-1" />
          <img src={logo2} className="logo-coinbase" alt="logo-2" />
          <img src={logo3} className="logo-a16z" alt="logo-3" />
          <img src={logo4} className="logo-blockchange" alt="logo-4" />
        </div>
      </div>

      {isMenuVisible && (
        <div
          className={`menu-modal ${
            isMenuAnimating ? "menu-modal-opening" : "menu-modal-closing"
          }`}
        >
          <div className="menu-content">
            <button className="close-button" onClick={closeMenu}>
              Close ✖
            </button>
            <div className="menu-items">
              <div className="menu-section">
                <h2>Home</h2>
                <p>Our Projects</p>
                <ul>
                  <li>Traekee</li>
                  <li>WingRiders</li>
                  <li>Worldcoin</li>
                </ul>
              </div>
              <div className="menu-section">
                <h2>About</h2>
                <p>Follow us</p>
                <ul>
                  <li>Instagram</li>
                  <li>Dribbble</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
              <div className="menu-section">
                <h2>Contact</h2>
                <p>Direct contact</p>
                <p>hello@thirdweb.studio</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
