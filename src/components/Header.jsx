import React from "react";
import aryu_logo from "../assets/aryulogo.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  function onclickLogo() {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  return (
    <section className='px-20 py-3 bg-[url("././assets/header_background.png")] bg-cover bg-center'>
      <div className="flex justify-between items-center ">
        <img
          onClick={onclickLogo}
          className="cursor-pointer h-10"
          src={aryu_logo}
          alt=""
        />

<div className="flex gap-20 border text-white px-5 py-3 bg-white/10 border-white/10 rounded-full">
          <Link to="/" className="cursor-pointer">
            Home
          </Link>
          <Link  className="cursor-pointer">
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
};

export default Header;
