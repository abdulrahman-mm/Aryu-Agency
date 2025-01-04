import React from "react";
import The_Art_of_Bold_Disruption_image2 from "../../assets/The_Art_of_Bold_Disruption_image2.png";
import The_Art_of_Bold_Disruption_image1 from "../../assets/The_Art_of_Bold_Disruption_image1.png";
import glowingball from "../../assets/Video/glowingball.mp4";
import home_herovideo1 from "../../assets/Video/home_herovideo1.mp4";
import home_herovideo1_compressed from "../../assets/Video/home_herovideo1_compressed.mp4";
// import biokosmetik from '../../assets/biokosmetik.svg'
import biokosmetics from "../../assets/biokosmetics.svg";
import urban from "../../assets/urban.svg";
// import gadgetmart from '../../assets/gadgetmart.svg'
import gadgetmart from "../../assets/gadgetmart.png";
import delta from "../../assets/delta.svg";
import conversion from "../../assets/conversion.svg";
import skincare from "../../assets/skincare-usa.svg";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";



function Home_The_Art_Of_Bold_Disruption() {
  const logos = [biokosmetics, urban, gadgetmart, delta, conversion, skincare]; // Replace with actual image paths

  useEffect(() => {
    gsap.fromTo(
      ".text",
      { opacity: 0,
        y:40
       },
      {
        opacity: 1,
        y:0,
        duration: 5,
        delay: 5,
        ease: "back.in",
        scrollTrigger: {
          trigger: ".text",
          start: "top 85%", // Animation starts when the top of the video is 80% visible
          end: "top 20%", // Animation ends when the top of the video is 20% visible
          scrub: 3,
        },
      }
    );
  }, []);


  return (
    <section className="  py-20">
      <div className="flex flex-col  gap-16">
        <div className="flex px-32 items-center justify-between">
          <p className="text-6xl text basis-[35%] font-sans ">The Power of Daring Ideas </p>

          <p className="basis-[30%] text text-gray-600 font-lato text-lg">
          When creativity meets ambition, we build brands that engage and deliver. We blend innovation with strategy to create brands that resonate and perform.
          </p>
        </div>

        <div className="flex px-32 items-center justify-start gap-16">
          <video
            className="h-72 basis-[40%] w-full rounded-3xl object-cover"
            src={home_herovideo1_compressed}
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
          ></video>

          <div className="flex flex-col gap-8">
            <div className="flex items-center  gap-16">
              <div className="flex  flex-col  gap-3">
                <p className="text-4xl font-lato font-medium ">Crafting Ideas</p>
                <p className="text-gray-600 font-lato">
                Creative strategies that bring your vision to life and set your brand apart.
                </p>
              </div>

              <video
                className="h-24 w-40 rounded-3xl object-contain"
                src={glowingball}
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
              ></video>
            </div>

            <div className="flex items-center gap-5">
              <video
                className="h-36 w-40 rounded-3xl object-contain"
                src={glowingball}
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
              ></video>

              <div className="flex basis-[48%] flex-col gap-3">
                <p className="text-4xl font-lato font-medium ">Creative Potential</p>
                <p className="text-gray-600 font-lato">
                Driving your brand forward with creativity that sparks innovation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden bg-[url('././assets/header_background.png')] bg-cover bg-center w-full flex h-full items-center">
          <div className="flex gap-36 px-20  animate-marquee whitespace-nowrap">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className=" object-contain  bg-no-repeat bg-center bg-fixed "
              />
            ))}
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className=" object-contain bg-no-repeat bg-center bg-fixed "
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home_The_Art_Of_Bold_Disruption;
