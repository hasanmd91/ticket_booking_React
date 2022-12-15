import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="relative h-[50vh] bg-cover bg-center bg-no-repeat bg w-screen">
      <video
        className="w-screen h-full object-cover -z-10"
        autoPlay="autoplay"
        muted={true}
        loop={true}
      >
        <source src={require("../Assets/bg-video.mp4")}></source>
      </video>

      <div className="absolute m-auto left-0 right-0 top-1/2 text-center">
        <h2 className="text-3xl text-white bg-[#00000070] p-4">
          Travel Ticket Booking System
        </h2>
        <button className="p-4 mt-4">
          <Link to="/book"> Book Your Ticket Now</Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
