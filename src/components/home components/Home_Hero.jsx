import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Home_Hero() {

  useEffect(() => {
    // Animate video scaling
    gsap.fromTo(
      ".video",
      { width: "600px", height: "300px", borderRadius: "20px" },
      {
        width: "100vw",
        height: "100vh",
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power3.out",
        borderRadius: 0,
        scrollTrigger: {
          trigger: ".video",
          start: "top 40%",
          end: "top top",
          scrub: 1.5,
        },
      }
    );

    // Animate inverted text
    gsap.fromTo(
      ".inverted-text",
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".video",
          start: "top 50%",
          end: "top 20%",
          scrub: 1.5,
        },
      }
    );
  }, []);

  return (
    <div className="relative flex items-center justify-center h-full overflow-hidden">
      {/* Video element */}

        <video
          className="video cursor-pointer object-cover rounded-xl md:rounded-3xl w-full h-[50vh] sm:h-[70vh] md:h-[85vh] lg:h-[100vh]"
          src={"./Video/homevideo_compressed1.mp4"}
          autoPlay
          loop
          muted
          playsInline
        ></video>

      {/* Black-and-White Inverted Text */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center font-poppins font-bold leading-tight"
        style={{
          mixBlendMode: "difference",
          color: "white", // Default text color (will invert dynamically)
        }}
      >
        <p className="inverted-text text-5xl md:text-6xl lg:text-8xl xl:text-9xl">
          SHAPING
        </p>
        <p className="inverted-text text-5xl md:text-6xl lg:text-8xl xl:text-9xl">
          TOMORROW'S BRANDS
        </p>
      </div>
    </div>
  );
}

export default Home_Hero;
