import React from "react";
import aryulogo from "../assets/aryulogo.svg";
import { Link } from "react-router-dom";

function Home_Header() {
  return (
    <section className="py-1 px-20">
      <div className="flex justify-between items-center ">
        <img className="cursor-pointer h-20 object-cover" src={aryulogo} alt="" />

        <ul className="flex gap-8 text-white font-semibold">
          <Link to="/" className="cursor-pointer">
            Home
          </Link>
          <Link to="/contactus" className="cursor-pointer">
            Contact Us
          </Link>
        </ul>

        {/* <button className="text-white border-2 cursor-pointer border-white rounded-full px-5 py-2">
          Get Started
        </button> */}
      </div>
    </section>
  );
}

export default Home_Header;
