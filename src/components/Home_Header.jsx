import React from "react";
import aryu_logo from "../assets/aryu_logo.png";

function Home_Header() {
  return (
    <section className="pt-8 ">
      <div className="flex justify-between items-center ">
        <img className="cursor-pointer h-14" src={aryu_logo} alt="" />

        <ul className="flex gap-8 text-white font-semibold">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Service</li>
          <li className="cursor-pointer">Portfolio</li>
          <li className="cursor-pointer">Pricing</li>
        </ul>

        <button
          className="text-white border-2 cursor-pointer border-white rounded-full px-5 py-2"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Home_Header;
