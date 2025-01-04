import React, { useEffect } from "react";
import home_how_can_i_assist_you_video from "../../assets/Video/home_how_can_i_assist_you_video.mp4";
import home_how_can_i_assist_you_video_compressed from "../../assets/Video/home_how_can_i_assist_you_video_compressed.mp4";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home_How_Can_I_Assist_You() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#box", // Element to trigger animation
        start: "top 100%", // Trigger when the top of #box hits 100% of the viewport height
        // end: "bottom 100%", // End animation when the bottom of #box hits 20% of the viewport height
        toggleActions: "play none none reverse", // Play animation on enter, reverse on exit
      },
    });

    // Animate the <p> elements to their normal position
    tl.fromTo(
      "#box >p",
      {
        y: -400, // Start above the viewport
        // y: () => Math.random() * 800 - 800, // Start above the viewport
        opacity: 0, // Start invisible
        ease: "expo",
        x: () => Math.random() * 400 - 200, // Random horizontal movement
      },
      {
        y: 0, // End at the original position
        x: 0,
        opacity: 1, // Fully visible
        duration: 1,
        stagger: 0.2, // Delay between animations for each <p>
        ease: "expo", // Smooth easing
      }
    );

    // Add bounce animation for each <p> individually
    tl.to(
      "#box >p ",
      {
        y: -5, // Move up slightly
        duration: 0.5, // Duration of the bounce
        ease: "bounce.out", // Bounce easing
        stagger: 0.2, // Stagger the bounce animation for each <p>
        yoyo: true, // Return to the original position
      },
      "<" // Start the bounce animation immediately after the first animation ends
    );
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("#box > p");

    elements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(el, {
          rotate: -4.5,
          duration: 0.3,
          scale: 1.1,
          ease: "power2.out",
          zIndex: 10,
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(el, {
          rotate: 0,
          duration: 0.3,
          scale: 1,
          ease: "power2.out",
          zIndex: 2,
        });
      });
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", null);
        el.removeEventListener("mouseleave", null);
      });
    };
  }, []);

  useEffect(() => {
    gsap.to("#assist-video", {
      scale: 2, // Gradually scale the video to a maximum of 1.5
      transformOrigin: "center center", // Scale from the center
      scrollTrigger: {
        trigger: "#assist-video",
        start: "top center", // Start scaling when the top of the video reaches the center of the viewport
        end: "bottom top", // End scaling when the bottom of the video exits the viewport
        scrub: 4, // Smooth scaling tied to scrolling
        onUpdate: (self) => {
          // Prevent size reversal
          const scale = gsap.getProperty("#assist-video", "scale");
          if (scale < 1) {
            gsap.set("#assist-video", { scale: 1 }); // Prevent scaling below original size
          } else if (scale > 1.5) {
            gsap.set("#assist-video", { scale: 1.5 }); // Cap scaling at 1.5
          }
        },
      },
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".text",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 5,
        delay: 5,
        ease: "back.in",
        scrollTrigger: {
          trigger: ".text",
          start: "top 100%", // Animation starts when the top of the video is 80% visible
          end: "top 20%", // Animation ends when the top of the video is 20% visible
          scrub: 3,
        },
      }
    );
  }, []);

  return (
    <section className=" overflow-hidden">
      <div className="flex flex-col gap-8">
        {/* Header Text */}
        <div className="flex  px-32 py-20 items-center justify-between">
          <p className="text-5xl text font-sans basis-[30%]">
            How can i assist you?
          </p>
          <p className="text-gray-600 text basis-[30%] font-poppins text-xl">
            Your vision, our mission. We transform ideas into a compelling brand
            story that speaks loud and clear.
          </p>
        </div>

        {/* Text Options */}
        <div
          id="box"
          className="flex justify-center gap-y-3 gap-x-1 items-center flex-wrap px-16 my-10"
        >
          {[
            "PRODUCT PHOTOSHOOT",
            "Corporate Video",
            "TV Commercial",
            "Ad Film Shoot",
            "Pay-Per-Click Advertising",
            "Content Marketing",
            "Brand Promotion Design",
            "UI and UX Design",
            "Search Engine Optimization",
            "Digital Design",
            "Video Editing ",
            "Social Media Video",
            "Email Marketing",
          ].map((text, index) => (
            <p
              key={index}
              className="px-4 uppercase py-4 cursor-pointer hover:bg-purple-950 hover:text-white text-gray-600 border border-gray-300 rounded-3xl text-xl"
            >
              {text}
            </p>
          ))}
        </div>

        {/* Video Section */}
        <video
          id="assist-video"
          className="h-80 mt-20 my-10 w-[70vw] mx-auto rounded-3xl object-cover"
          src={home_how_can_i_assist_you_video_compressed}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        ></video>
      </div>
    </section>
  );
}

export default Home_How_Can_I_Assist_You;
