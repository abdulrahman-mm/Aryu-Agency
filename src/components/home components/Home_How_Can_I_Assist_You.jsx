import React, { useEffect } from "react";
import home_how_can_i_assist_you_video from "../../assets/Video/home_how_can_i_assist_you_video.mp4";
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
          rotate: -6,
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

  return (
    <section className="px-32 py-20 overflow-hidden">
      <div className="flex flex-col gap-8">
        {/* Header Text */}
        <div className="flex items-center justify-between">
          <p className="text-6xl basis-[30%]">HOW CAN I ASSIST YOU?</p>
          <p className="text-gray-600 basis-[30%] text-xl">
            Your vision deserves to be heard. We amplify your ideas with
            creative flair, turning them into a brand voice that commands
            attention.
          </p>
        </div>

        {/* Text Options */}
        <div
          id="box"
          className="flex justify-center items-center flex-wrap px-14 my-10"
        >
          {[
            "USER EXPERIENCE",
            "IDEAS",
            "AGENCY WEBSITE",
            "MOBILE",
            "USER INTERFACE",
            "WIREFRAMING",
            "PROTOTYPING",
            "CREATIVITY",
            "WEB DESIGN",
            "VISUAL DESIGN",
            "STARTUP",
            "BRAND DESIGN",
            "WEB APP",
          ].map((text, index) => (
            <p
              key={index}
              className="px-14 py-4 hover:bg-purple-950 hover:text-white text-gray-600 border border-gray-300 rounded-3xl text-xl"
            >
              {text}
            </p>
          ))}
        </div>

        {/* Video Section */}
        <video
          id="assist-video"
          className="h-80 mt-20 my-10 w-[70vw] mx-auto rounded-3xl object-cover"
          src={home_how_can_i_assist_you_video}
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
