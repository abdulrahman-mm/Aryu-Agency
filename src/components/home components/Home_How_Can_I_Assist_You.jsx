import React, { useEffect } from "react";
// import home_how_can_i_assist_you_video_compressed from "../../assets/Video/home_how_can_i_assist_you_video_compressed.mp4";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

function Home_How_Can_I_Assist_You() {
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#box",
        start: "top 100%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      "#box > p",
      {
        y: -400,
        opacity: 0,
        x: () => Math.random() * 400 - 200,
      },
      {
        y: 0,
        x: 0,
        delay: 0.5,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "expo",
      }
    );

    tl.to(
      "#box > p",
      {
        y: -5,
        duration: 0.5,
        ease: "bounce.out",
        stagger: 0.2,
        yoyo: true,
      },
      "<"
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
      scale: 2,
      transformOrigin: "center center",
      scrollTrigger: {
        trigger: "#assist-video",
        start: "top center",
        end: "bottom top",
        scrub: 4,
        onUpdate: (self) => {
          const scale = gsap.getProperty("#assist-video", "scale");
          if (scale < 1) {
            gsap.set("#assist-video", { scale: 1 });
          } else if (scale > 1.5) {
            gsap.set("#assist-video", { scale: 1.5 });
          }
        },
      },
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".assist-you-text",
      {
        opacity: 0,
        y: 50,
        scale: 0.5,
        rotate: -15,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 2,
        stagger: 0.2,
        ease: "elastic.out(1.2, 0.5)", // Elastic bounce effect for smooth animation
        scrollTrigger: {
          trigger: ".assist-you-text",
          start: "top 85%", // Trigger when .assist-you-text enters viewport
          end: "top 20%",
          scrub: 2, // Smooth scrubbing for a natural flow
        },
      }
    );

    // Add a wave-like sequential opacity animation for individual words (if you want more uniqueness)
    // const words = document.querySelectorAll(".assist-you-text span");
    // gsap.fromTo(
    //   words,
    //   { opacity: 0 },
    //   {
    //     opacity: 1,
    //     duration: 1.5,
    //     stagger: 0.2, // Delayed entry for each word
    //     ease: "power2.inOut",
    //     scrollTrigger: {
    //       trigger: ".assist-you-text",
    //       start: "top 85%",
    //     },
    //   }
    // );
  }, []);

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col gap-8">
        {/* Header Text */}
        <div className="flex flex-col md:flex-row px-5 py-5 sm:px-10 sm:py-10 md:px-20 md:py-20 items-center justify-between gap-6">
          <p className="text-3xl assist-you-text sm:text-4xl lg:text-5xl font-sans basis-[30%] text-center md:text-left">
            How can I assist you?
          </p>
          <p className="text-gray-600 assist-you-text basis-[30%] font-poppins text-base sm:text-lg lg:text-xl text-center md:text-left">
            Your vision, our mission. We transform ideas into a compelling brand
            story that speaks loud and clear.
          </p>
        </div>

        {/* Text Options */}
        <div
          id="box"
          className="flex flex-wrap justify-center gap-2 px-5 pb-5 sm:px-10 sm:pb-10 md:px-32 md:pb-20"
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
            "Video Editing",
            "Social Media Video",
            "Email Marketing",
          ].map((text, index) => (
            <p
              key={index}
              className="px-4 uppercase py-4 cursor-pointer hover:bg-purple-950 hover:text-white text-gray-600 border border-gray-300 rounded-3xl text-sm sm:text-base lg:text-lg text-center"
            >
              {text}
            </p>
          ))}
        </div>

        {/* Video Section */}
        <div id="assist-video" ref={ref}>
          {inView && (
            <video
              className="h-60 sm:h-80 mt-10 mb-10 w-full sm:w-3/4 lg:w-[70vw] mx-auto rounded-3xl object-cover"
              src={"Video/home_how_can_i_assist_you_video_compressed.mp4"}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            ></video>
          )}
        </div>
      </div>
    </section>
  );
}

export default Home_How_Can_I_Assist_You;
