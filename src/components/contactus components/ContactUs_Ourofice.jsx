import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin
// import google_earth from "../../assets/Video/google_earth.mp4";
gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const ContactUs_Ourofice = () => {
  useEffect(() => {
    gsap.fromTo(
      ".our-office",
      {
        opacity: 0,
        x: -400, // Start position: off-screen on the left
        rotation: -80, // Initial rotation (to rotate text from the left)
      },
      {
        opacity: 1,
        x: 0, // End position: original position
        rotation: 0, // End rotation: no rotation
        duration: 1, // Duration of the animation
        ease: "power3.out", // Ease for smooth animation
        scrollTrigger: {
          trigger: ".text",
          start: "top 100%", // Animation starts when the element is 80% from the top of the viewport
          end: "bottom 20%",
          scrub: 2, // Smooth scrolling effect
        },
      }
    );
  }, []);

  return (
    <div className="px-5 py-5 sm:px-10 sm:py-10  md:px-20  md:py-20">
      <p className="font-bold our-office text-4xl md:text-7xl font-lato text-purple-900 mt-10">
        Our <span className="font-normal text-black">Office</span>
      </p>

      <div className="relative  h-60 sm:h-80 md:h-96 w-full mt-5 md:mt-16  mx-auto">
        <div className="absolute   z-20 w-full h-full rounded-[30px] sm:rounded-[40px] md:rounded-[60px]">
        <a href="https://maps.app.goo.gl/gCx45i9DYfguftFM8" target="_blank">
          <button className="text-white absolute right-6  bottom-6  border px-2 sm:px-7 py-2 sm:py-3 rounded-full text-sm  md:text-xl">
            Visit our Office
          </button>
        </a>
        </div>


        <video
          className="absolute rounded-[30px] z-10 sm:rounded-[40px] md:rounded-[60px] w-full h-full  object-cover"
          src={'Video/earth.mp4'}
          playsInline
          autoPlay
          loop
          muted
        ></video>

       
      </div>
    </div>
  );
};

export default ContactUs_Ourofice;
