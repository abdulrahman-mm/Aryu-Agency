import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import home_our_services_video_compressed from "../../assets/Video/home_our_services_video_compressed.mp4";

gsap.registerPlugin(ScrollTrigger);

const Home_Projectfinished = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // GSAP Animation for the video fade-in
    gsap.fromTo(
      "#video",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 3,
        delay: 0.5,
        ease: "back.in",
        scrollTrigger: {
          trigger: "#video",
          start: "top 95%", // Animation starts when the top of the video is 80% visible
          end: "top 20%", // Animation ends when the top of the video is 20% visible
          scrub: 2,
        },
      }
    );

    // Progress counter logic
    let interval;
    ScrollTrigger.create({
      trigger: "#video",
      start: "top 80%", // Trigger when 80% of the video is visible
      onEnter: () => {
        interval = setInterval(() => {
          setProgress((prev) => {
            if (prev < 99) {
              return prev + 1;
            } else {
              clearInterval(interval);
              return prev;
            }
          });
        }, 30);
      },
      onLeaveBack: () => {
        // Optional: Reset progress when scrolling back out of view
        setProgress(0);
        clearInterval(interval);
      },
    });

    return () => {
      clearInterval(interval); // Cleanup interval on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup ScrollTriggers
    };
  }, []);

  return (
    <div id="video" className="relative h-[200px] md:h-[300px]  my-10 md:my-20">
      <video
        className="absolute object-cover w-full h-full"
        src={'Video/home_our_services_video_compressed.mp4'}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="absolute flex flex-col-reverse md:flex-row w-full h-full px-4 md:px-10 py-6 md:py-10 justify-between items-center ">
        {/* Progress and Text */}
        <div className="flex flex-col items-center md:items-start">
          <p
            style={{ textShadow: "3px 2px 8px rgba(0, 0, 0, 0.5)" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-semibold"
          >
            {progress}%
          </p>
          <p
            style={{ textShadow: "3px 2px 8px rgba(0, 0, 0, 0.5)" }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center md:text-left"
          >
            Project Finished
          </p>
        </div>

        {/* Tagline */}
        <p
          style={{ textShadow: "3px 2px 8px rgba(0, 0, 0, 0.8)" }}
          className="text-lg sm:text-xl md:text-3xl lg:text-4xl basis-[50%] text-center md:text-end text-white"
        >
          Turning Sparks into Spectacles
        </p>
      </div>
    </div>
  );
};

export default Home_Projectfinished;
