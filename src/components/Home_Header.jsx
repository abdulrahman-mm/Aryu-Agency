// import React from "react";
// import aryulogo from "../assets/aryulogo.svg";
// import { Link } from "react-router-dom";

// function Home_Header({ handleOurServicesScroll }) {
//   return (
//     <section className="py-3 px-14">
//       <div className="flex justify-between items-center ">
//         <img
//           className="cursor-pointer h-10 oject-cover"
//           src={aryulogo}
//           alt=""
//         />

//         <div className="flex gap-20 border text-white px-5 py-3 bg-white/10 border-white/10 rounded-full">
//           <Link to="/" className="cursor-pointer">
//             Home
//           </Link>
//           <Link onClick={handleOurServicesScroll} className="cursor-pointer">
//             Services
//           </Link>
//           <Link to="/contactus" className="cursor-pointer">
//             Contact Us
//           </Link>
//           <Link className="cursor-pointer">Blog</Link>
//         </div>

//         <Link to="/contactus">
//           <button className="text-white border-2 cursor-pointer border-white rounded-full px-5 py-2">
//             Get Started
//           </button>
//         </Link>
//       </div>
//     </section>
//   );
// }

// export default Home_Header;

import React, { useState, useEffect, useRef } from "react";
import aryulogo from "../assets/aryulogo.svg";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

function Home_Header({ handleOurServicesScroll }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const navLinksRef = useRef([]);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the header
    gsap.fromTo(
      headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // GSAP animation for navigation links
    gsap.fromTo(
      navLinksRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      // Apply the animation every time the mobile menu opens
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
      );
    } else {
      // Optionally apply an animation when the mobile menu closes (e.g., shrink it back)
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
        ease: "power3.out",
      });
    }
  }, [isMenuOpen]); // This effect runs every time `isMenuOpen` changes

  return (
    <section className="py-3 px-6 lg:px-20" ref={headerRef}>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img
          className="cursor-pointer h-10 object-cover"
          src={aryulogo}
          alt="Aryu Logo"
        />

        {/* Desktop Navigation Links */}
        {/* <div className="max-md:hidden flex gap-8 lg:gap-12 border text-white px-5 py-3 bg-white/10 border-white/10 rounded-full">
          <Link to="/" className="cursor-pointer" ref={(el) => (navLinksRef.current[0] = el)}>
            Home
          </Link>
          <Link onClick={handleOurServicesScroll} className="cursor-pointer" ref={(el) => (navLinksRef.current[1] = el)}>
            Services
          </Link>
          <Link to="/contactus" className="cursor-pointer" ref={(el) => (navLinksRef.current[2] = el)}>
            Contact Us
          </Link>
          <Link className="cursor-pointer" ref={(el) => (navLinksRef.current[3] = el)}>
            Blog
          </Link>
        </div> */}

        <div className="relative max-md:hidden flex gap-8 lg:gap-12 border text-white px-5 py-3 bg-white/10 border-white/10 rounded-full overflow-hidden transition-transform duration-500 shadow-lg">
          {/* Continuous Shine Effect */}
          <span className="absolute inset-0  -left-full w-20 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-shine"></span>

          {/* Navigation Links */}
          <Link
            to="/"
            className="cursor-pointer z-10  "
            ref={(el) => (navLinksRef.current[0] = el)}
          >
            Home
          </Link>
          <Link
            onClick={handleOurServicesScroll}
            className="cursor-pointer z-10"
            ref={(el) => (navLinksRef.current[1] = el)}
          >
            Services
          </Link>
          <Link
            to="/contactus"
            className="cursor-pointer z-10"
            ref={(el) => (navLinksRef.current[2] = el)}
          >
            Contact Us
          </Link>
          {/* <Link
            className="cursor-pointer z-10"
            ref={(el) => (navLinksRef.current[3] = el)}
          >
            Blog
          </Link> */}
        </div>

        {/* Get Started Button */}
        <Link to="/contactus" className="max-md:hidden">
          <button className="text-white border-2 cursor-pointer border-white rounded-full px-5 py-2">
            Get Started
          </button>
        </Link>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden mt-4 bg-white text-black rounded-lg shadow-lg p-4 space-y-4"
        >
          <Link
            to="/"
            className="block hover:text-gray-700 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            onClick={() => {
              handleOurServicesScroll();
              setIsMenuOpen(false);
            }}
            className="block hover:text-gray-700 transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/contactus"
            className="block hover:text-gray-700 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
          {/* <Link
            className="block hover:text-gray-700 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link> */}
        </div>
      )}
    </section>
  );
}

export default Home_Header;
