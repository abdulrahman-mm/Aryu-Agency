import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { useState, useEffect } from "react";

const ContactUs_Address = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex justify-between font-lato px-20 pt-20 pb-36">

      <div className="flex flex-col gap-8">
        <p className=" font-bold text-3xl tracking-widest">ADDRESS</p>

        <div className="flex flex-col gap-3 font-medium text-xl">
          <p>Aryu Enterprises Pvt Limited</p>
          <p>No 33/ 14 , Ground floor,</p>
          <p>Jayammal St, Ayyavoo</p>
          <p>Colony, Aminjikarai, Chennai</p>
          <p>Tamil Nadu 600029</p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <p className="font-bold text-3xl tracking-widest">OUR SOCIAL</p>

        <div className="flex flex-row gap-9">
          <IoLogoFacebook className="text-5xl" />
          <FaLinkedin className="text-5xl rounded-full" />
          <FaInstagramSquare className="text-5xl rounded-full object-cover" />
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <p className="font-bold text-3xl tracking-widest">EMAIL US</p>

        <div className="flex flex-col gap-3 font-medium text-xl">
          <p>For Branding, Creative Design, Digital</p>
          <p>Marketing, and Video Production:</p>
          <p>info@aryu.agency</p>
          <p>Visit our website: Aryu </p>
          <p>Agency: www.aryu.agency</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs_Address;
