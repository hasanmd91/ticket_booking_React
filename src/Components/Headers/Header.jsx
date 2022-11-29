import React from "react";
import Fetchdata from "../Fetchticketdata/Fetchdata";

import "./Header.css";

const Header = () => {
  return (
    <section className="hero-section">
      <header>
        <div className="logo">
          <h1 className="logo-txt">
            <a href="#sample">Himalayan Express Bus Service</a>
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#sample">Book a ticket</a>
            </li>
            <li>
              <a href="#sample">Search your ticket</a>
            </li>
            <li>
              <a href="#sample">FAQ</a>
            </li>
            <li>
              <a href="#sample">Help</a>
            </li>
          </ul>
        </nav>
      </header>
      <Fetchdata />
      <div className="hero-text">
        <h2>Himalayan Express Bus</h2>
        <div className="feature-txt">
          <p>Safer</p>
          <p>Punctual</p>
          <p>Responsible</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
