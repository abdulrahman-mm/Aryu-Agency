import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
// import footer_video from "../assets/Video/footer_video.mp4";
import aryulogo from "../assets/aryulogo.svg";
import instagram_white from '../assets/instagram_white.svg'
import facebook_white from '../assets/facebook_white.svg'
import linkedin_white from '../assets/linkedin_white.svg'

function Footer() {
  useEffect(() => {
    // Create the heartbeat animation
    gsap.to("#heart_beat", {
      scale: 1.2, // Increase the size
      duration: 1, // Animation duration
      yoyo: true, // Reverse the animation
      repeat: -1, // Loop infinitely
      ease: "power1.inOut", // Smooth easing
    });
  }, []);
  const navigate = useNavigate();
  const marqueeRef = useRef(null);
  const logos = Array(40).fill(aryulogo); // Replace with actual image paths

  const onClickServices = (location) => {
    navigate(location);
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  useEffect(() => {
    const marquee = marqueeRef.current;
    const items = marquee.querySelectorAll("img");

    // Clone logos to create a seamless loop
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      marquee.appendChild(clone);
    });

    // Animate the marquee
    gsap.to(marquee, {
      x: "-100%",
      duration: 1, // Adjust the duration for speed
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section className="bg-black ">
      <div className="relative h-[300px] md:h-[600px]">
        <video
          src={'Video/footer_video.mp4'}
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="relative overflow-hidden  w-full flex h-full items-center">
          <div
            ref={marqueeRef}
            className="flex gap-4 px-8 md:px-20 whitespace-nowrap animate-marquee"
          >
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-16 md:h-24 object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap px-5 md:px-14 flex-col md:flex-row  items-start justify-between  md:pt-20 gap-10 md:gap-16">
        {/* Services Section */}
        <div className="flex flex-col gap-5 flex-1 ">
          <p className="text-white font-semibold text-lg">SERVICES</p>
          <div className="flex flex-col text-white/60 gap-2">
            {[
              { name: "Video Production", path: "/videoproduction" },
              { name: "Digital Marketing", path: "/digitalmarketing" },
              { name: "Creative Design", path: "/creativedesign" },
              {
                name: "UI and UX Design",
                path: "/creativedesign/uianduxdesign",
              },
              {
                name: "Brand Promotion Design",
                path: "/creativedesign/brandpromotiondesign",
              },
            ].map((service, index) => (
              <p
                key={index}
                onClick={() => onClickServices(service.path)}
                className="cursor-pointer hover:text-white"
              >
                {service.name}
              </p>
            ))}
          </div>
        </div>

        {/* Address Section */}
        <div className="flex flex-col gap-5 flex-1 ">
          <p className="text-white font-semibold text-lg">ADDRESS</p>
          <div className="text-white/60 ">
            <p>Aryu Enterprises Private Limited</p>
            <p>No 33/ 14, Ground floor, Jayammal St,</p>
            <p>Ayyavoo Colony, Aminjikarai,</p>
            <p>Chennai, India.</p>
            <p>Contact no: 99947 15106</p>
          </div>
        </div>


        <div className="social-section flex flex-col gap-7">
                <p className="text-white font-semibold text-lg">
                  OUR SOCIAL
                </p>
                <div className="text-white flex gap-5 font-semibold text-lg">
                  <img src={instagram_white} alt=""  className="w-10 h-10" />
                  <img src={facebook_white} alt="" className="w-10 h-10" />
                  <img src={linkedin_white} alt="" className="w-10 h-10" />
                </div>
              </div>

        {/* Happy Clients Section */}
        <div className="flex flex-col gap-5 flex-1 ">
          <div className="flex gap-5 items-center">
            <div
              id="heart_beat"
              className="w-14 h-14 rounded-full bg-white/40 flex justify-center items-center"
            >
              <div className="w-8 h-8 rounded-full bg-white"></div>
            </div>

            <p className="text-2xl font-bold text-white">
              Aryu <span className="text-violet-500">Agency</span>{" "}
            </p>
          </div>
          <p className="text-white/60 text-sm md:text-base">
            Creative design, smart marketing, and engaging videos – all in one
            place to make your brand stand out with Aryu Agency.
          </p>
        </div>

        {/* Newsletter Section */}
        {/* <div
      style={{ backgroundColor: "#1A1A19" }}
      className="rounded-3xl px-6 py-6 md:px-8 md:py-8 flex flex-col items-center flex-1 min-w-[250px]"
    >
      <p className="text-white font-semibold text-lg">SUBSCRIBE TO OUR</p>
      <p className="font-bold text-white text-2xl md:text-4xl mt-2 text-center">
        NEWSLETTER
      </p>
      <div className="flex flex-col md:flex-row gap-4 mt-6 md:mt-8 w-full">
        <input
          className="border-b-2 border-white/20 outline-none bg-transparent text-white w-full md:w-auto placeholder-white/60 text-sm md:text-base"
          type="text"
          placeholder="Enter your email address..."
        />
        <button className="bg-white cursor-pointer text-black px-4 py-2 rounded-full font-bold text-sm md:text-base w-full md:w-auto">
          SUBSCRIBE
        </button>
      </div>
    </div> */}
      </div>

      <div className="flex flex-col-reverse px-5 md:px-14 md:flex-row items-center justify-between text-white/60 py-6 md:py-14 gap-4">
        <p className="text-center md:text-left text-sm md:text-base">
          Copyright © ARYU AGENCY 2025
        </p>
        <div className="flex gap-2 sm:gap-5 text-center md:text-left text-xs md:text-base">
          <p className="cursor-pointer hover:text-white">Privacy Policy</p>
          <p>|</p>
          <p className="cursor-pointer hover:text-white">Terms & Condition</p>
          <p>|</p>
          <p className="cursor-pointer hover:text-white">Site Map</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
