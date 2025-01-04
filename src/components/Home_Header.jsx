import React from "react";
import aryulogo from "../assets/aryulogo.svg";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Home_Header({ handleOurServicesScroll }) {
  return (
    <section className="py-3 px-14">
      <div className="flex justify-between items-center ">
        <img
          className="cursor-pointer h-10 oject-cover"
          src={aryulogo}
          alt=""
        />

        {/* <ul className="flex gap-8 text-white font-semibold">
          <Link to="/" className="cursor-pointer">
            Home
          </Link>
          <Link to="/contactus" className="cursor-pointer">
            Contact Us
          </Link>
        </ul> */}

        <div className="flex gap-20 border text-white px-5 py-3 bg-white/10 border-white/10 rounded-full">
          <Link to="/" className="cursor-pointer">
            Home
          </Link>
          <Link onClick={handleOurServicesScroll} className="cursor-pointer">
            Services
          </Link>
          <Link to="/contactus" className="cursor-pointer">
            Contact Us 
          </Link>
          <Link className="cursor-pointer">Blog</Link>
        </div>

        <Link to="/contactus">
          <button className="text-white border-2 cursor-pointer border-white rounded-full px-5 py-2">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Home_Header;
