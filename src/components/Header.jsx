import React, { useEffect, useRef, useState } from "react";
import aryu_logo from "../assets/aryulogo.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Header = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const navLinksRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [isMenuOpen]);

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  const handleServicesClick = () => {
    navigate("/", { state: { scrollTo: "service" } });
  };

  return (
    <header
      ref={headerRef}
      className="bg-[url('././assets/header_background.png')] bg-cover bg-center px-6 lg:px-20 py-3 shadow-md"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img
          src={aryu_logo}
          alt="Aryu Logo"
          className="cursor-pointer h-10 lg:h-12 transition-transform duration-300 transform hover:scale-105"
          onClick={handleLogoClick}
        />

        {/* Navigation Links */}
        <nav className="relative max-md:hidden flex gap-8 lg:gap-12 border text-white px-5 py-3 bg-white/10 border-white/10 rounded-full overflow-hidden transition-transform duration-500 shadow-lg">
        <span className="absolute inset-0  -left-full w-20 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-shine"></span>

          {["Home","Contact Us"].map((text, index) => (
                        
            <Link
              key={index}
              to={
                (text.includes("Home")||text.includes("Services"))
                  ? "/"
                  : `/${text.toLowerCase().replace(" ", "")}`
              }
              className="hover:text-gray-300 transition duration-300"
              ref={(el) => (navLinksRef.current[index] = el)}
              onClick={text === "Services" ? handleServicesClick : null}
            >
              {text}
            </Link>
          ))}
        </nav>

        {/* Get Started Button */}
        <Link to="/contactus" className="max-md:hidden">
          <button className="text-white border-2 border-white rounded-full px-4 lg:px-6 py-2 lg:py-3 hover:bg-white hover:text-black transition duration-300">
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
          {["Home", "Contact Us", "Get Started"].map(
            (text, index) => (
              <Link
                key={index}
                to={
                  text.includes("Home"||"Services")
                    ? "/"
                    : `/${text.toLowerCase().replace(" ", "")}`
                }
                className="block hover:text-gray-700 transition duration-300"
                ref={(el) => (navLinksRef.current[index] = el)}
                onClick={() => {
                  setIsMenuOpen(false);
                  if (text === "Services") handleServicesClick();
                }}
              >
                {text}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
