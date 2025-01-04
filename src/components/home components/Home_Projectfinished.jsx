// import React from "react";
// import home_our_services_video_compressed from "../../assets/Video/home_our_services_video_compressed.mp4";
// import { useEffect, useState } from "react";
// import { gsap } from "gsap";

// const Home_Projectfinished = () => {
//   useEffect(() => {
//     gsap.fromTo(
//       "#video",
//       { opacity: 0 },
//       {
//         opacity: 1,
//         duration: 5, // Adjusted for a smoother transition
//         delay: 2,
//         ease: "back.in", // Smooth easing function
//         scrollTrigger: {
//           trigger: "#video", // Target the video element
//           start: "top center", // Animation starts when the top of the video is 80% visible
//           end: "top 90%", // Animation ends when the top of the video is 20% visible
//           scrub: 3, // Smooth, responsive animation based on scroll
//         },
//       }
//     );
//   }, []);

//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev < 99) {
//           return prev + 1; // Increment progress
//         } else {
//           clearInterval(interval); // Clear interval when progress reaches 99
//           return prev;
//         }
//       });
//     }, 30); // Adjust speed of progress

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, []);
//   return (
//     <div id="video" className="relative  h-[400px] mt-36 rounded-3xl">
//       <video
//         className="absolute object-cover w-full h-full rounded-3xl "
//         src={home_our_services_video_compressed}
//         autoPlay
//         loop
//         muted
//         playsInline
//       ></video>

//       <div className="absolute flex  w-full h-full px-10 py-10 items-center justify-between">
//         <div className="flex flex-col ">
//           <p
//             style={{ "text-shadow": "3px 2px 8px rgba(0, 0, 0, 0.5)" }}
//             className="text-8xl text-white font-semibold "
//           >
//             {progress}
//           </p>
//           <p
//             style={{ "text-shadow": "3px 2px 8px rgba(0, 0, 0, 0.5)" }}
//             className="text-3xl text-white"
//           >
//             Project Finished
//           </p>
//         </div>

//         <p
//           style={{ "text-shadow": "3px 2px 8px rgba(0, 0, 0, 0.8)" }}
//           className="text-4xl basis-[50%] place-content-center text-end text-white"
//         >
//           Turning Sparks into Spectacles
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Home_Projectfinished;




















import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import home_our_services_video_compressed from "../../assets/Video/home_our_services_video_compressed.mp4";

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
        duration: 5,
        delay: 2,
        ease: "back.in",
        scrollTrigger: {
          trigger: "#video",
          start: "top 80%", // Animation starts when the top of the video is 80% visible
          end: "top 20%", // Animation ends when the top of the video is 20% visible
          scrub: 3,
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
    <div id="video" className="relative h-[400px] ">
      <video
        className="absolute object-cover w-full h-full "
        src={home_our_services_video_compressed}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="absolute flex w-full h-full px-10 py-10 items-center justify-between">
        <div className="flex flex-col">
          <p
            style={{ textShadow: "3px 2px 8px rgba(0, 0, 0, 0.5)" }}
            className="text-8xl text-white font-semibold"
          >
            {progress}%
          </p>
          <p
            style={{ textShadow: "3px 2px 8px rgba(0, 0, 0, 0.5)" }}
            className="text-3xl text-white"
          >
            Project Finished
          </p>
        </div>

        <p
          style={{ textShadow: "3px 2px 8px rgba(0, 0, 0, 0.8)" }}
          className="text-4xl basis-[50%] text-end text-white"
        >
          Turning Sparks into Spectacles
        </p>
      </div>
    </div>
  );
};

export default Home_Projectfinished;
