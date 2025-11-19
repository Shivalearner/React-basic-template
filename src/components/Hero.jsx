import React from "react";
import Section1 from "../assets/Section1.png";
const Hero = () => {
  return (
    <section className="bg-gray-300 text-center py-16 ">
      <img className="h-52 mx-auto mb-2 rounded-b-lg" src={Section1} alt="" />
      <h1 className="text-3xl font-bold mb-2">
        Build Amazing UIs with React & Vite👌
      </h1>
      <p className="text-gray-600 mb-2">
        ✅Fast, Lightweight, and Modern Frontend Development
      </p>
      <button className="bg-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-800 transition text-white">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
