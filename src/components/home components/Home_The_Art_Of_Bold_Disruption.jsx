import React from "react";
// import glowingball from "../../assets/Video/glowingball.mp4";
// import home_herovideo1_compressed from "../../assets/Video/home_herovideo1_compressed.mp4";
import biokosmetics from "../../assets/biokosmetics.svg";
import urban from "../../assets/urban.svg";
import gadgetmart from "../../assets/gadgetmart.png";
import delta from "../../assets/delta.svg";
import conversion from "../../assets/conversion.svg";
import skincare from "../../assets/skincare-usa.svg";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useInView } from "react-intersection-observer";

function Home_The_Art_Of_Bold_Disruption() {
  const { ref, inView } = useInView({ threshold: 0 });

  const logos = [biokosmetics, urban, gadgetmart, delta, conversion, skincare];

  useEffect(() => {
    gsap.fromTo(
      ".text-1",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "back.out(1.7)", // Smooth easing
        stagger:0.5,
        scrollTrigger: {
          trigger: ".text-1",
          start: "top 80%", // Trigger when .text enters viewport
          end: "top 20%", // End when .text moves up
          scrub: 1, // Smooth scrubbing effect
        },
      }
    );

   
  }, []);

  return (
    <section className="bg-white">
      <div className="flex flex-col px-5 py-5 sm:px-10 sm:py-10 md:px-20 md:py-20 mt-10 md:mt-20 gap-16">
        <div className="flex  flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <p className="text-4xl text-1 sm:text-6xl font-sans basis-[100%] md:basis-[55%] text-center md:text-left">
            The Power of Daring Ideas
          </p>
          <p className="text-gray-600 text-1 font-lato text-lg text-center md:text-left basis-[100%] md:basis-[30%]">
            When creativity meets ambition, we build brands that engage and
            deliver. We blend innovation with strategy to create brands that
            resonate and perform.
          </p>
        </div>

        <div
          ref={ref}
          className="flex text-1 flex-col xl:flex-row  items-center lg:items-start lg:justify-between gap-5 sm:gap-10 md:gap-16"
        >
          {inView && (
            <video
              className="h-48 sm:h-72 w-full rounded-3xl object-cover lg:basis-[40%]"
              src={"Video/home_herovideo1_compressed.mp4"}
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
            ></video>
          )}

          <div className="flex flex-col justify-between gap-8 w-full">
            <div className="flex flex-row items-center xl:justify-end gap-8">
              <div className="flex flex-col gap-3 text-center md:text-left">
                <p className="text-2xl text-1 sm:text-4xl font-lato font-medium">
                  Crafting Ideas
                </p>
                <p className="text-gray-600 text-1 font-lato">
                  Creative strategies that bring your vision to life and set
                  your brand apart.
                </p>
              </div>
                <video
                  className="h-20 w-32 text-1 md:h-24 md:w-40 rounded-3xl object-contain"
                  src={"Video/glowingball.mp4"}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                ></video>
            </div>
            <div className="flex items-center xl:justify-end gap-8">
                <video
                  className="h-28 w-32 text-1 md:h-36 md:w-40 rounded-3xl object-contain"
                  src={"Video/glowingball.mp4"}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                ></video>

              <div className="flex flex-col gap-3 text-center md:text-left">
                <p className="text-2xl text-1 sm:text-4xl font-lato font-medium">
                  Creative Potential
                </p>
                <p className="text-gray-600 text-1 font-lato">
                  Driving your brand forward with creativity that sparks
                  innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-[url('././assets/header_background.png')] bg-cover bg-center w-full flex items-center mb-5 sm:mb-10 md:mb-20">
        <div className="flex gap-20 px-5 py-5 sm:py-0 sm:px-20 animate-marquee whitespace-nowrap">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-12 sm:h-auto bg-no-repeat bg-center bg-fixed  object-contain"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-12 sm:h-auto bg-no-repeat bg-center bg-fixed  object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home_The_Art_Of_Bold_Disruption;
