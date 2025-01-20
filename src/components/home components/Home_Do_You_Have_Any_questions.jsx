import React from "react";
// import Home_Insights_Updates_video from "../../assets/Video/Home_Insights_Updates_video.mp4";

const Home_Do_You_Have_Any_Questions = () => {
  return (
    <div className="relative mx-auto h-[300px] ">
      <video
        src={'Video/Home_Insights_Updates_video.mp4'}
        className="absolute w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="absolute w-full h-full flex flex-col gap-5 md:flex-row justify-center md:justify-between items-center px-5 md:px-10 py-5 md:py-10">
        {/* Left Content */}
        <div className="flex items-start gap-3 justify-center text-white flex-col text-center md:text-left max-w-lg">
          <p
            style={{ textShadow: "3px 2px 8px rgba(0, 0, 0, 0.5)" }}
            className="text-2xl md:text-4xl lg:text-5xl font-semibold"
          >
            Do you have any questions?
          </p>
          <p
            style={{ textShadow: "3px 2px 8px rgba(0, 0, 0, 0.5)" }}
            className="text-sm md:text-lg lg:text-xl"
          >
            Feel free to send us your questions or request a free consultation.
          </p>
        </div>

        {/* Right Content */}
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-3 w-full md:w-auto mt-5 md:mt-0">
          <input
            type="text"
            name=""
            id=""
            className=" md:w-auto  text-white placeholder-white outline-none border-2 p-3 rounded-xl border-white/80 backdrop-blur-xl bg-black/10"
            placeholder="Enter Your Email"
          />
          <button className="bg-white px-14 py-3 text-black rounded font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home_Do_You_Have_Any_Questions;
