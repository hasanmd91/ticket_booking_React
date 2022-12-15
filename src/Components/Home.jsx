import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Faq from "./Faq";

function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <Faq />
    </div>
  );
}

export default Home;
