import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <main>
      <div className="hero h-[350px] bg-hero bg-cover bg-center bg-no-repeat bg w-screen relative">
        <div className="hero-text absolute translate-x-1/2 translate-y-1/2">
          <h2 className="text-3xl text-white bg-[#00000070] p-3">
            Travel Ticket Booking System
          </h2>
          <button className="p-4 mt-4">
            <Link to="/book"> Book Your Ticket Now</Link>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Hero;
