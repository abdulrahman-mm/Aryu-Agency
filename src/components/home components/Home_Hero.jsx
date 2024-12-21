// // // import React from "react";
// // // import home_hero_image1 from "../../assets/home_hero_image1.png";
// // // import home_hero_image2 from "../../assets/home_hero_image2.png";
// // // import home_hero_image3 from "../../assets/home_hero_image3.png";
// // // import home_herovideo1 from "../../assets/Video/home_herovideo1.mp4";
// // // import glowingball from "../../assets/Video/glowingball.mp4";
// // // import The_Art_of_Bold_Disruption_video from "../../assets/Video/The_Art_of_Bold_Disruption_video.mp4";
// // // import home_how_can_i_assist_you_video from "../../assets/Video/home_how_can_i_assist_you_video.mp4";
// // // import { useEffect,useState } from "react";
// // // import gsap from "gsap";
// // // import homevideo from '../../assets/Video/homevideo.mp4'

// // // function Home_Hero() {

// // //   const [isClicked, setIsClicked] = useState(false);

// // //   useEffect(() => {
// // //     let scrollTriggerInstance;

// // //     if (!isClicked) {
// // //       // Scroll-triggered scaling animation
// // //       scrollTriggerInstance=gsap.from(".video",{
// // //         width:'200px',
// // //         height:'200px'
// // //       })
// // //       scrollTriggerInstance = gsap.to(".video", {
// // //         width: "100vw",
// // //         height: "115vh",
// // //         scale: 1,
// // //         transformOrigin: "center center",
// // //         ease: "power2.out",
// // //         scrollTrigger: {
// // //           trigger: ".video",
// // //           start: "top 40%", // Start when top of video reaches 40% of viewport
// // //           end: "top top", // End when the top of video reaches top of viewport
// // //           scrub: 5,
// // //         },

// // //       });
// // //     }

// // //     return () => {
// // //       // Cleanup ScrollTrigger when unmounted or when clicked
// // //       if (scrollTriggerInstance) {
// // //         scrollTriggerInstance.scrollTrigger.kill();
// // //       }
// // //     };
// // //   }, [isClicked]);

// // //   const handleVideoClick = () => {
// // //     setIsClicked(!isClicked); // Mark video as clicked

// // //     // Stop scroll-triggered animation and expand video to full screen
// // //     gsap.to(".video", {
// // //       width: "100vw",
// // //       height: "115vh",
// // //       scale: 1,
// // //       duration: 1,
// // //       ease: "power2.out",
// // //     });
// // //   };

// // //   return (

// // // <div className="flex items-center justify-center min-h-screen ">
// // //       <video
// // //         src={homevideo}
// // //         autoPlay
// // //         loop
// // //         muted
// // //         onClick={handleVideoClick}
// // //         className="video  cursor-pointer object-cover"
// // //       ></video>
// // //     </div>
// // //   );
// // // }

// // // export default Home_Hero;

// // import React, { useEffect, useState } from "react";
// // import gsap from "gsap";
// // import homevideo from '../../assets/Video/homevideo.mp4';

// // function Home_Hero() {
// //   const [isClicked, setIsClicked] = useState(false);

// //   useEffect(() => {
// //     // Scroll-triggered scaling animation
// //     let scrollTriggerInstance;

// //     if (!isClicked) {
// //       // Animate the video from a smaller size to its full size when scrolling
// //       gsap.from(".video", {
// //         width: "400px", // Start width from a small value
// //         height: "300px", // Start height from a small value
// //         duration: 1, // Duration of the animation
// //         ease: "power2.out", // Ease for smooth transition
// //         scrollTrigger: {
// //           trigger: ".video",
// //           start: "top 40%", // Start when top of video reaches 40% of viewport
// //           end: "top top", // End when top of video reaches top of viewport
// //           scrub: 5, // Tied to scroll, smooth animation
// //         },
// //       });

// //       // Expand video to full width and height when scrolling
// //       scrollTriggerInstance = gsap.to(".video", {
// //         width: "100vw",
// //         height: "115vh",
// //         scale: 1,
// //         transformOrigin: "center center",
// //         ease: "power2.out",
// //         scrollTrigger: {
// //           trigger: ".video",
// //           start: "top 40%", // Start when the top of video reaches 40% of viewport
// //           end: "top top", // End when the top of video reaches top of viewport
// //           scrub: 5, // Smooth animation tied to scroll
// //         },
// //       });
// //     }

// //     return () => {
// //       // Cleanup ScrollTrigger when unmounted or when clicked
// //       if (scrollTriggerInstance) {
// //         scrollTriggerInstance.scrollTrigger.kill();
// //       }
// //     };
// //   }, [isClicked]);

// //   const handleVideoClick = () => {
// //     setIsClicked(!isClicked); // Toggle clicked state

// //     // Stop scroll-triggered animation and expand video to full screen
// //     gsap.to(".video", {
// //       width: "100vw",
// //       height: "115vh",
// //       scale: 1,
// //       duration: 1,
// //       ease: "power2.out",
// //     });
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen">
// //       <video
// //         src={homevideo}
// //         autoPlay
// //         loop
// //         muted
// //         onClick={handleVideoClick}
// //         className="video cursor-pointer object-cover"
// //       ></video>
// //     </div>
// //   );
// // }

// // export default Home_Hero;




// // import React, { useEffect, useState } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import homevideo from "../../assets/Video/homevideo.mp4"; // Replace with your video path

// // gsap.registerPlugin(ScrollTrigger);

// // function Home_Hero() {
// //   const [isClicked, setIsClicked] = useState(false);

// //   useEffect(() => {
// //     if (isClicked === false) {
// //       // Scroll-triggered scaling animation
// //       gsap.fromTo(
// //         ".video",
// //         {
// //           width: "500px", // Initial width
// //           height: "300px", // Initial height
// //         },
// //         {
// //           width: "120vw", // Final width on scroll
// //           height: "140vh", // Final height on scroll
// //           scale: 1,
// //           transformOrigin: "center center",
// //           ease: "power2.out",
// //           scrollTrigger: {
// //             trigger: ".video",
// //             start: "top 30%", // Start when top of video reaches 40% of viewport
// //             end: "top top", // End when the top of video reaches top of viewport
// //             scrub: 5,
// //           },
// //         }
// //       );
// //     }

// //     return () => {
// //       // Cleanup ScrollTrigger when unmounted or when clicked
// //       if (isClicked) return; // Don't kill the trigger when clicked
// //       gsap.killTweensOf(".video");
// //       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
// //     };
// //   }, [isClicked]);

// //   const handleVideoClick = () => {
// //     setIsClicked(true);

// //     // If clicked, expand the video to full screen and stop the scroll-triggered animation
// //     gsap.to(".video", {
// //       width: "100vw",
// //       height: "115vh",
// //       scale: 1,
// //       duration: 1,
// //       ease: "power2.out",
// //       // Disable scroll-triggered animations while the video is clicked
// //       scrollTrigger: null,
// //     });
// //   };

// //   return (
   
// //     <div className="relative flex items-center justify-center min-h-screen">
// //       {/* Video element */}
// //       <video
// //         src={homevideo}
// //         autoPlay
// //         loop
// //         muted
// //         onClick={handleVideoClick}
// //         className="video cursor-pointer object-cover z-0" // z-index 0 for the video
// //       ></video>

// //       {/* Text element */}
// //       <div className="absolute w-full text-white leading-[0.8] text-[200px] z-10">
// //         <p>Create The</p>
// //         <p className="text-end">Uncommon</p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Home_Hero;














// // import React, { useEffect, useState } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import homevideo from "../../assets/Video/homevideo.mp4"; // Replace with your video path

// // gsap.registerPlugin(ScrollTrigger);

// // function Home_Hero() {
// //   const [isClicked, setIsClicked] = useState(false);
// //   const [textColor, setTextColor] = useState("white"); // Default text color is white

// //   useEffect(() => {
// //     if (isClicked === false) {
// //       // Scroll-triggered scaling animation
// //       gsap.fromTo(
// //         ".video",
// //         {
// //           width: "500px", // Initial width
// //           height: "300px", // Initial height
// //         },
// //         {
// //           width: "120vw", // Final width on scroll
// //           height: "140vh", // Final height on scroll
// //           scale: 1,
// //           transformOrigin: "center center",
// //           ease: "power2.out",
// //           scrollTrigger: {
// //             trigger: ".video",
// //             start: "top 30%", // Start when top of video reaches 40% of viewport
// //             end: "top top", // End when the top of video reaches top of viewport
// //             scrub: 5,
// //             onUpdate: ({ progress }) => {
// //               // Dynamically change text color based on scroll progress
// //               if (progress > 0.5) {
// //                 setTextColor("black"); // Inside video
// //               } else {
// //                 setTextColor("white"); // Outside video
// //               }
// //             },
// //           },
// //         }
// //       );
// //     }

// //     return () => {
// //       // Cleanup ScrollTrigger when unmounted or when clicked
// //       if (isClicked) return; // Don't kill the trigger when clicked
// //       gsap.killTweensOf(".video");
// //       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
// //     };
// //   }, [isClicked]);

// //   const handleVideoClick = () => {
// //     setIsClicked(true);

// //     // If clicked, expand the video to full screen and stop the scroll-triggered animation
// //     gsap.to(".video", {
// //       width: "100vw",
// //       height: "115vh",
// //       scale: 1,
// //       duration: 1,
// //       ease: "power2.out",
// //       // Disable scroll-triggered animations while the video is clicked
// //       scrollTrigger: null,
// //     });
// //   };

// //   return (
// //     <div className="relative flex items-center justify-center min-h-screen">
// //       {/* Video element */}
// //       <video
// //         src={homevideo}
// //         autoPlay
// //         loop
// //         muted
// //         onClick={handleVideoClick}
// //         className="video cursor-pointer object-cover z-10" // z-index 0 for the video
// //       ></video>

// //       {/* Text element with dynamic color change */}
// //       <div className={`absolute w-full leading-[0.8] text-[200px] z-0 ${textColor === 'black' ? 'text-black' : 'text-white'}`}>
// //         <p>Create The</p>
// //         <p className="text-end">Uncommon</p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Home_Hero;














// import React, { useEffect, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import homevideo from "../../assets/Video/homevideo.mp4"; // Replace with your video path

// gsap.registerPlugin(ScrollTrigger);

// function Home_Hero() {
//   const [isClicked, setIsClicked] = useState(false);
//   const [textColor, setTextColor] = useState("white"); // Default text color is white
//   const [zIndex, setZIndex] = useState({ text: 0, video: 10 }); // Initial z-index values

//   useEffect(() => {
//     if (isClicked === false) {
//       // Scroll-triggered scaling animation
//       gsap.fromTo(
//         ".video",
//         {
//           width: "500px", // Initial width
//           height: "300px", // Initial height
//         },
//         {
//           width: "120vw", // Final width on scroll
//           height: "140vh", // Final height on scroll
//           scale: 1,
//           transformOrigin: "center center",
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: ".video",
//             start: "top 30%", // Start when top of video reaches 40% of viewport
//             end: "top top", // End when the top of video reaches top of viewport
//             scrub: 5,
//             onUpdate: ({ progress }) => {
//               // Dynamically change text color based on scroll progress
//               if (progress > 0.5) {
//                 setTextColor("black"); // Inside video
//                 setZIndex({ text: 0, video: 10 }); // Change z-index: video on top
//               } else {
//                 setTextColor("white"); // Outside video
//                 setZIndex({ text: 10, video: 0 }); // Change z-index: text on top
//               }
//             },
//           },
//         }
//       );
//     }

//     return () => {
//       // Cleanup ScrollTrigger when unmounted or when clicked
//       if (isClicked) return; // Don't kill the trigger when clicked
//       gsap.killTweensOf(".video");
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, [isClicked]);

//   const handleVideoClick = () => {
//     setIsClicked(true);

//     // If clicked, expand the video to full screen and stop the scroll-triggered animation
//     gsap.to(".video", {
//       width: "100vw",
//       height: "115vh",
//       scale: 1,
//       duration: 1,
//       ease: "power2.out",
//       // Disable scroll-triggered animations while the video is clicked
//       scrollTrigger: null,
//     });

//     // Swap z-index when video is clicked
//     setZIndex({ text: 0, video: 10 });
//   };

//   return (
//     <div className="relative flex items-center justify-center min-h-screen">
//       {/* Video element */}
//       <video
//         src={homevideo}
//         autoPlay
//         loop
//         muted
//         onClick={handleVideoClick}
//         className="video cursor-pointer object-cover"
//         style={{ zIndex: zIndex.video }} // Dynamically change z-index
//       ></video>

//       {/* Text element with dynamic color change */}
//       <div
//         className={`absolute w-full leading-[0.8] text-[200px]`}
//         style={{ zIndex: zIndex.text, color: textColor }} // Dynamically change z-index and color
//       >
//         <p>Create The</p>
//         <p className="text-end">Uncommon</p>
//       </div>
//     </div>
//   );
// }

// export default Home_Hero;











// import React, { useEffect, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import homevideo from "../../assets/Video/homevideo.mp4"; // Replace with your video path

// gsap.registerPlugin(ScrollTrigger);

// function Home_Hero() {
//   const [isClicked, setIsClicked] = useState(false);
//   const [textColor, setTextColor] = useState("white"); // Default text color is white
//   const [zIndex, setZIndex] = useState({ text: 0, video: 10 }); // Initial z-index values

//   useEffect(() => {
//     if (!isClicked) {
//       // Scroll-triggered scaling animation
//       gsap.fromTo(
//         ".video",
//         {
//           width: "500px", // Initial width
//           height: "300px", // Initial height
//         },
//         {
//           width: "120vw", // Final width on scroll
//           height: "140vh", // Final height on scroll
//           scale: 1,
//           transformOrigin: "center center",
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: ".video",
//             start: "top 30%", // Start when top of video reaches 40% of viewport
//             end: "top top", // End when the top of video reaches top of viewport
//             scrub: 5,
//             onUpdate: ({ progress }) => {
//               // Dynamically change text color based on scroll progress
//               if (progress > 0.5) {
//                 setTextColor("black"); // Inside video
//                 setZIndex({ text: 10, video: 0 }); // Change z-index: video on top
//               } else {
//                 setTextColor("white"); // Outside video
//                 setZIndex({ text: 0, video: 10 }); // Change z-index: text on top
//               }
//             },
//           },
//         }
//       );
//     }

//     return () => {
//       // Cleanup ScrollTrigger when unmounted or when clicked
//       if (isClicked) return; // Don't kill the trigger when clicked
//       gsap.killTweensOf(".video");
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, [isClicked]);

//   const handleVideoClick = () => {
//     setIsClicked(true);

//     // If clicked, expand the video to full screen and stop the scroll-triggered animation
//     gsap.to(".video", {
//       width: "100vw",
//       height: "115vh",
//       scale: 1,
//       duration: 1,
//       ease: "power2.out",
//       // Disable scroll-triggered animations while the video is clicked
//       scrollTrigger: null,
//     });

//     // Swap z-index when video is clicked
//     setZIndex({ text: 0, video: 10 });
//   };

//   return (
//     <div className="relative flex items-center justify-center min-h-screen">
//       {/* Video element */}
//       <video
//         src={homevideo}
//         autoPlay
//         loop
//         muted
//         onClick={handleVideoClick}
//         className="video cursor-pointer object-cover"
//         style={{ zIndex: zIndex.video }} // Dynamically change z-index
//       ></video>

//       {/* Text element with dynamic color change */}
//       <div
//         className={`absolute w-full leading-[0.8] text-[200px]`}
//         style={{
//           zIndex: zIndex.text, // Dynamically change z-index
//           color: textColor,    // Dynamically change text color
//         }}
//       >
//         <p>Create The</p>
//         <p className="text-end">Uncommon</p>
//       </div>
//     </div>
//   );
// }

// export default Home_Hero;











// import React, { useEffect, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import homevideo from "../../assets/Video/homevideo.mp4"; // Replace with your video path

// gsap.registerPlugin(ScrollTrigger);

// function Home_Hero() {
//   const [isClicked, setIsClicked] = useState(false);
//   const [textColor, setTextColor] = useState("black"); // Default text color is white
//   const [zIndex, setZIndex] = useState({ text: 0, video: 10 }); // Initial z-index values

//   useEffect(() => {
//     if (!isClicked) {
//       // Scroll-triggered scaling animation
//       gsap.fromTo(
//         ".video",
//         {
//           width: "500px", // Initial width
//           height: "300px", // Initial height
//         },
//         {
//           width: "120vw", // Final width on scroll
//           height: "140vh", // Final height on scroll
//           scale: 1,
//           transformOrigin: "center center",
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: ".video",
//             start: "top 30%", // Start when top of video reaches 40% of viewport
//             end: "top top", // End when the top of video reaches top of viewport
//             scrub: 5,
//             onUpdate: ({ progress, direction }) => {
//               // Dynamically change text color based on scroll progress
//               if (progress > 0.5) {
//                 if (direction === 1) {
//                   setTextColor('white')
//                   setZIndex({ text: 10, video: 0 }); // Scrolling down: video on top
//                 } else {
//                   setTextColor('black')
//                   setZIndex({ text: 0, video: 10 }); // Scrolling up: text on top
//                 }
//               } else {
//                 if (direction === 1) {
//                   setTextColor('white')
//                   setZIndex({ text: 10, video: 0 }); // Scrolling down: video on top
//                 } else {
//                   setTextColor('black')
//                   setZIndex({ text: 0, video: 10 }); // Scrolling up: text on top
//                 }
//               }
//             },
//           },
//         }
//       );
//     }

//     return () => {
//       // Cleanup ScrollTrigger when unmounted or when clicked
//       if (isClicked) return; // Don't kill the trigger when clicked
//       gsap.killTweensOf(".video");
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, [isClicked]);

//   const handleVideoClick = () => {
//     setIsClicked(true);

//     // If clicked, expand the video to full screen and stop the scroll-triggered animation
//     gsap.to(".video", {
//       width: "100vw",
//       height: "115vh",
//       scale: 1,
//       duration: 1,
//       ease: "power2.out",
//       // Disable scroll-triggered animations while the video is clicked
//       scrollTrigger: null,
//     });

//     // Swap z-index when video is clicked
//     setZIndex({ text: 0, video: 10 });
//   };

//   return (
//     <div className="relative flex items-center justify-center min-h-screen">
//       {/* Video element */}
//       <video
//         src={homevideo}
//         autoPlay
//         loop
//         muted
//         onClick={handleVideoClick}
//         className="video cursor-pointer object-cover"
//         style={{ zIndex: zIndex.video }} // Dynamically change z-index
//       ></video>

//       {/* Text element with dynamic color change */}
//       <div
//         className={`absolute w-full font-semibold font-serif leading-[0.8] text-[150px]`}
//         style={{
//           zIndex: zIndex.text, // Dynamically change z-index
//           color: textColor,    // Dynamically change text color
//         }}
//       >
//         <p>Create The</p>
//         <p className="text-end">Uncommon</p>
//       </div>
//     </div>
//   );
// }

// export default Home_Hero;

















import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import homevideo from "../../assets/Video/homevideo.mp4"; // Replace with your video path

gsap.registerPlugin(ScrollTrigger);

function Home_Hero() {
  const [isClicked, setIsClicked] = useState(false);
  const [textColor, setTextColor] = useState("black"); // Default text color is white
  const [zIndex, setZIndex] = useState({ text: 0, video: 10 }); // Initial z-index values

  useEffect(() => {
    if (!isClicked) {
      // Scroll-triggered scaling animation for the video
      gsap.fromTo(
        ".video",
        {
          width: "500px", // Initial width
          height: "300px", // Initial height
        },
        {
          width: "120vw", // Final width on scroll
          height: "140vh", // Final height on scroll
          scale: 1,
          transformOrigin: "center center",
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".video",
            start: "top 30%", // Start when top of video reaches 40% of viewport
            end: "top top", // End when the top of video reaches top of viewport
            scrub: 5,
            onUpdate: ({ progress, direction }) => {
              // Dynamically change text color based on scroll progress
              if (progress > 0.5) {
                if (direction === 1) {
                  setTextColor('white');
                  setZIndex({ text: 10, video: 0 }); // Scrolling down: video on top
                } else {
                  setTextColor('black');
                  setZIndex({ text: 0, video: 10 }); // Scrolling up: text on top
                }
              } else {
                if (direction === 1) {
                  setTextColor('white');
                  setZIndex({ text: 10, video: 0 }); // Scrolling down: video on top
                } else {
                  setTextColor('black');
                  setZIndex({ text: 0, video: 10 }); // Scrolling up: text on top
                }
              }
            },
          },
        }
      );

      // Animate "Uncommon" text
      gsap.fromTo(
        ".uncommon-text", 
        {
         // Start from below
          opacity: 0, // Start as invisible
        },
        {
          opacity: 1, // Final visibility
          duration: 1.5, // Duration of the animation
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".video",
            start: "top 60%", // Trigger when the video reaches 60% of the viewport height
            end: "top 40%", // End trigger point
            scrub: true,
          },
        }
      );
    }

    return () => {
      // Cleanup ScrollTrigger when unmounted or when clicked
      if (isClicked) return; // Don't kill the trigger when clicked
      gsap.killTweensOf(".video");
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isClicked]);

  const handleVideoClick = () => {
    setIsClicked(true);

    // If clicked, expand the video to full screen and stop the scroll-triggered animation
    gsap.to(".video", {
      width: "100vw",
      height: "115vh",
      scale: 1,
      duration: 1,
      ease: "power2.out",
      // Disable scroll-triggered animations while the video is clicked
      scrollTrigger: null,
    });

    // Swap z-index when video is clicked
    setZIndex({ text: 0, video: 10 });
  };

  

  useEffect(() => {
    // Hide the text initially using GSAP and position it below its final position
    gsap.set(".text", { opacity: 0, y: 50, visibility: "hidden" });

    // After 2 seconds, animate the text coming from the bottom to the top
    gsap.to(".text", {
      opacity: 1,
      y: 0, // Final position (top)
      visibility: "visible",
      duration: 0.5,
      delay: 2, // Delay for 2 seconds before starting the animation
    });

    return () => {
      // Cleanup any animations if needed
      gsap.killTweensOf(".text");
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Video element */}
      <video
        src={homevideo}
        autoPlay
        loop
        muted
        onClick={handleVideoClick}
        className="video cursor-pointer object-cover rounded-3xl"
        style={{ zIndex: zIndex.video }} // Dynamically change z-index
      ></video>

      {/* Text element with dynamic color change */}
      <div
        className={`absolute w-full text font-semibold font-serif leading-[0.8] text-[150px]`}
        style={{
          zIndex: zIndex.text, // Dynamically change z-index
          color: textColor,    // Dynamically change text color
        }}
      >
        <p>Create The</p>
        <p className="text-end uncommon-text">Uncommon</p>
      </div>
    </div>
  );
}

export default Home_Hero;
