import React from "react";
import aryu_logo from "../assets/aryu_logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate=useNavigate()


  function onclickLogo(){
    navigate('/')

    window.scrollTo({
      top:0,
      behavior:'instant'
    })
  }

  return (
    <section className='px-20 py-4 bg-[url("././assets/header_background.png")] bg-cover bg-center'>
      <div className="flex justify-between items-center ">
        <img onClick={onclickLogo} className="cursor-pointer h-10" src={aryu_logo} alt="" />

        <ul className="flex gap-8 text-white font-semibold">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Service</li>
          <li className="cursor-pointer">Portfolio</li>
          <li className="cursor-pointer">Pricing</li>
        </ul>

        <button className="text-white border-2 cursor-pointer border-white rounded-full px-5 py-2">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Header;
