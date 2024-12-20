import React from "react";
import Home_Insights_Updates_image1 from "../../assets/Home_Insights_Updates_image1.png";
import { FaRegCalendar } from "react-icons/fa";
import Home_Insights_Updates_video from "../../assets/Video/Home_Insights_Updates_video.mp4";
import sample_video from "../../assets/Video/sample.mp4";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home_Insights_Updates() {
  // 8A3324

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#home-insights-updates-section", // Target the section
      start: "top center",
      onEnter: () => {
        gsap.to("#home-insights-updates-section", {
          backgroundColor: "#8b5cf6", // New background color
          duration: 1, // Instantly apply the background color
          color: "white",
        });
      },
      onLeaveBack: () => {
        gsap.to("#home-insights-updates-section", {
          backgroundColor: "white", // Revert to the original background color
          duration: 1, // Instantly revert
          color: "black",
        });
      },
    });

    // Clean up ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="home-insights-updates-section" className="px-32 py-20">
      <div className="flex justify-between items-center">
        <p className="text-6xl  basis-[35%]">Insights & Updates</p>
        <p className="basis-[23%]  text-lg">
          Our creativity knows no bounds. We create bold, daring campaigns that
          grab attention, leaving a lasting impact on your audience.
        </p>
      </div>

      <div className="flex gap-8 my-20">
        <div className="flex flex-col gap-3">
          {/* <img src={Home_Insights_Updates_image1} alt="" /> */}
          <video
            className="h-96 rounded-3xl  object-cover"
            src={sample_video}
            autoPlay
            loop
            playsInline
            muted
          ></video>

          <p className="text-3xl">The Journey of Creative Brilliance</p>
          <div className="flex gap-2 items-center">
            <FaRegCalendar className="inline-block " />

            <p> July 22, 2024</p>
          </div>
        </div>

        <div className="flex gap-5 flex-col">
          <div className="flex gap-5">
            {/* <img
              src={Home_Insights_Updates_image1}
              className="w-72 h-64"
              alt=""
            /> */}
            <video
              className="w-72 h-64 rounded-3xl  object-cover"
              src={sample_video}
              autoPlay
              loop
              playsInline
              muted
            ></video>

            <div className="flex justify-center flex-col gap-5">
              <div className="flex gap-3 items-center">
                <FaRegCalendar />
                <p>July 22, 2024</p>
              </div>

              <p className="text-4xl">The Art of Bold Creative Solutions</p>
            </div>
          </div>

          <div className="flex gap-5">
            <video
              className="w-72 h-64 rounded-3xl  object-cover"
              src={sample_video}
              autoPlay
              loop
              playsInline
              muted
            ></video>

            <div className="flex justify-center flex-col gap-5">
              <div className="flex gap-3 items-center">
                <FaRegCalendar />
                <p>July 22, 2024</p>
              </div>

              <p className="text-4xl">Where Creativity Meets Impact</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-[80vw] h-[300px]">
        <video
          src={Home_Insights_Updates_video}
          className="absolute w-full h-full object-cover rounded-3xl"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="absolute w-full h-full flex justify-between px-10 py-10">
          <div className="flex items-start gap-3 justify-center text-white flex-col">
            <p
              style={{ "text-shadow": "3px 2px 8px rgba(0, 0, 0, 0.5)" }}
              className="text-4xl font-semibold"
            >
              Do you have any questions?
            </p>
            <p
              style={{ "text-shadow": "3px 2px 8px rgba(0, 0, 0, 0.5)" }}
              className="text-lg"
            >
              Feel free to send us your questions or request a free
              consultation.
            </p>
          </div>

          <div className="flex items-center justify-center gap-5 ">
            <input
              type="text"
              name=""
              id=""
              className="h-fit bg-transparent text-white placeholder-white outline-none border-2 p-3 rounded-xl border-white/80"
              placeholder="Enter Your Email"
            />

            <button className="bg-white px-5 py-3 text-black rounded font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home_Insights_Updates;
