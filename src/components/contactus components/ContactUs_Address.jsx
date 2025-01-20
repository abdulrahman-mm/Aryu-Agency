import React, { useEffect } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import instagram_logo from '../../assets/instagram_logo.svg'
import facebook_logo from '../../assets/facebook_logo.svg'
import linkedin_logo from '../../assets/linkedin_logo.svg'

const ContactUs_Address = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Address Section Animation
    gsap.fromTo(
      ".address-section",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".address-section",
          start: "top 80%", // Animation starts when the section is 80% from the top of the viewport
          end: "bottom 20%",
          scrub: 2, // Smooth scrolling effect
        },
      }
    );

    // Social Section Animation
    gsap.fromTo(
      ".social-section",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".social-section",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 2,
        },
      }
    );

    // Email Section Animation
    gsap.fromTo(
      ".email-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".email-section",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 2,
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col flex-wrap gap-10 md:flex-row justify-between font-lato px-5 py-5 sm:px-10 sm:py-10 md:px-20 md:py-20">
      {/* Address Section */}
      <div className="address-section flex flex-col gap-7">
        <p className="font-bold text-2xl sm:text-3xl lg:text-4xl tracking-widest">
          ADDRESS
        </p>
        <div className="flex flex-col gap-3 font-medium text-lg sm:text-xl">
          <p>Aryu Enterprises Pvt Limited</p>
          <p>No 33/ 14 , Ground floor,</p>
          <p>Jayammal St, Ayyavoo</p>
          <p>Colony, Aminjikarai, Chennai</p>
          <p>Tamil Nadu 600029</p>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="social-section flex flex-col gap-7">
        <p className="font-bold text-2xl sm:text-3xl lg:text-4xl tracking-widest">
          OUR SOCIAL
        </p>
        <div className="flex flex-row gap-6 sm:gap-9">
          {/* <IoLogoFacebook className="text-4xl sm:text-5xl" /> */}
          <img src={instagram_logo} alt=""  />
          <img src={facebook_logo} alt=""  />
          <img src={linkedin_logo} alt=""  />
        </div>
      </div>

      {/* Email Section */}
      <div className="email-section flex flex-col gap-7">
        <p className="font-bold text-2xl sm:text-3xl lg:text-4xl tracking-widest">
          EMAIL US
        </p>
        <div className="flex flex-col gap-3 font-medium text-lg sm:text-xl">
          <p>For Branding, Creative Design, Digital</p>
          <p>Marketing, and Video Production:</p>
          <p>info@aryu.agency</p>
          <p>Visit our website: Aryu</p>
          <p>Agency: www.aryu.agency</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs_Address;
