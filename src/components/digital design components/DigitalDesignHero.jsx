// import video_1 from "../../assets/Video/video_1.mp4";
// import video3 from "../../assets/Video/video3.mp4";
// import video7 from "../../assets/Video/video7.mp4";
// import video6 from "../../assets/Video/video6.mp4";
import digitaldesign_hero_image from "../../assets/digitaldesign_hero_image.svg";
import { useEffect } from "react";
import gsap from "gsap";

const DigitalDesignHero = () => {
  useEffect(() => {
    // Reset animations in case the component is revisited
    gsap.set(".creative-design-text", { opacity: 0, y: 50 });
    gsap.set(".creative-design-circle", { opacity: 0, scale: 0 });

    // Animation for text elements (from initial state)
    gsap.fromTo(
      ".digital-design-text",
      {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        delay: 1.5, // Delay to ensure it completes after initial animation
      }
    );

    // Animation for the circle (from initial state)
    gsap.fromTo(
      ".digital-design-circle",
      {
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5, // Delay to make it appear after text animation
      },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power3.out",
        delay: 2, // Delay to ensure it completes after initial animation
      }
    );

    gsap.fromTo(
      ".digital-design-animated-item",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        delay: 2,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <section className="px-5 py-5 sm:px-10 sm:py-10  md:px-20  md:py-20">
      <div className="flex flex-col-reverse gap-5 md:flex-row items-center md:justify-between">
        <div className="flex digital-design-text flex-col basis-full md:basis-[60%] text-center md:text-left">
          <p style={{ letterSpacing: "12px" }} className="text-purple-900">
            CREATIVE DESIGN
          </p>
          <p className="text-2xl md:text-4xl lg:text-8xl">
            <span>Digital</span>{" "}
            <span className="font-semibold text-purple-900">Design</span>
          </p>
        </div>

        <img
          src={digitaldesign_hero_image}
          alt=""
          className="digital-design-circle"
        />
      </div>

      <div className="flex justify-center items-center flex-wrap   my-16">
        {[
          "Graphic Design",
          "Content Creation",
          "Web Design",
          "Video Production",
          "Advertising Campaigns",
          "Market Research",
          "Motion Graphics",
        ].map((text, index) => (
          <p
            key={index}
            className="px-4 py-4 digital-design-animated-item hover:text-violet-800 hover:border-violet-800 cursor-pointer text-gray-600 border border-gray-300 rounded-3xl text-xl"
          >
            {text}
          </p>
        ))}
      </div>

      {/* <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex flex-grow justify-center md:basis-1/5">
          <video
            src={"Video/video_1.mp4"}
            loop
            autoPlay
            muted
            className="h-64 w-full rounded-3xl object-cover md:h-full"
          ></video>
        </div>

        <div className="flex flex-grow flex-col gap-5 md:basis-3/4">
          <video
            src={"Video/video7.mp4"}
            loop
            autoPlay
            muted
            className="w-full flex-grow h-60 object-cover rounded-3xl shadow-lg "
          ></video>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 ">
            <video
              src={"Video/video_3.mp4"}
              loop
              autoPlay
              muted
              className="w-full h-60 object-cover rounded-3xl shadow-lg"
            ></video>
            <video
              src={"Video/video_6.mp4"}
              loop
              autoPlay
              muted
              className="w-full h-60 object-cover rounded-3xl shadow-lg"
            ></video>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default DigitalDesignHero;
