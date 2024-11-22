import React from "react";
import phoneImage from "../assets/phone.png";
import logo from "../assets/logo.png";
import arrow from "../assets/arrow.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";

const HeroSection = () => {
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
        <div className="menu-icon">Menu ☰</div>
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
    </section>
  );
};

export default HeroSection;
