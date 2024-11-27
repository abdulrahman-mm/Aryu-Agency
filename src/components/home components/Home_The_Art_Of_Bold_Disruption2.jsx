import React from "react";
import The_Art_of_Bold_Disruption2_image1 from "../../assets/The_Art_of_Bold_Disruption2_image1.png";
import The_Art_of_Bold_Disruption2_image2 from "../../assets/The_Art_of_Bold_Disruption2_image2.png";
import home_The_Art_of_Bold_Disruption_video from "../../assets/Video/home_The_Art_of_Bold_Disruption_video.mp4";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import gsap from "gsap";
import { useEffect } from "react";

function Home_The_Art_Of_Bold_Disruption2() {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#text-div p",
        start: "bottom bottom", // Starts animation when the video div is 80% in view
        end: "bottom 20%", // Ends animation when the video div is 20% in view
        // toggleActions: "play play play play", // Plays only once
    
      },
    });

    timeline
      .fromTo(
        "#text-div p",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, stagger: 0.5, duration: 1, ease: "power2.out",delay:1 }
      )
      .fromTo(
        "#text-div .flex",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      );
  }, []);

  return (
    <section className="px-32 py-20">
      <p className="text-6xl w-[35%] ">The Art of Bold Disruption</p>

      <div className="flex items-start justify-between gap-8 my-16">
        <div className="flex flex-col gap-5">
          <img src={The_Art_of_Bold_Disruption2_image1} alt="" />
          <p className="text-xl text-gray-600">
            We don't just create campaigns
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <img src={The_Art_of_Bold_Disruption2_image1} alt="" />
          <p className="text-xl text-gray-600">
            Your vision deserves to be heard.
          </p>
        </div>

        <div className="flex flex-col justify-center my-auto gap-1">
          <p className="text-2xl italic text-gray-500">Innovate</p>
          <p className="text-2xl text-gray-600 font-medium">Inspire</p>
          <p className="text-2xl italic text-gray-500">Impact</p>
        </div>

        <img
          className="object-contain"
          src={The_Art_of_Bold_Disruption2_image2}
          alt=""
        />
      </div>

      <div className="relative h-[500px]  rounded-3xl">
        <div className="absolute -z-40 bg-black/50 w-full h-full rounded-3xl"></div>
        <video
          src={home_The_Art_of_Bold_Disruption_video}
          className="absolute w-full -z-50 h-full object-cover rounded-3xl"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div
          id="text-div"
          className="absolute text-white w-full h-full flex flex-col items-center justify-center"
        >
          <p className="text-8xl font-bold">BEGIN YOUR</p>
          <p className="text-8xl font-bold ">CREATIVE</p>
          <p className="text-8xl font-bold ">JOURNEY NOW </p>

          <div className="flex items-center gap-5 mt-8">
            <div className="cursor-pointer flex items-center gap-3 bg-white px-5 py-3 rounded-full">
              <p className="text-black font-bold">START PROJECT</p>
              <IoIosArrowDroprightCircle className="text-black text-3xl" />
            </div>
            <p className="hover:underline cursor-pointer ">
              LEARN MORE ABOUT US
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home_The_Art_Of_Bold_Disruption2;
