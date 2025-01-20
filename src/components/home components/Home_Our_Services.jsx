import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
// import ourservice_creativedesign_compressed from "../../assets/Video/ourservice_creativedesign_compressed.mp4";
// import ourservice_digitalmarketing from "../../assets/Video/ourservice_digitalmarketing.mp4";
// import ourservice_videoproduction from "../../assets/Video/ourservice_videoproduction.mp4";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Home_Our_Services({ ourServicesRef }) {
  let navigate = useNavigate();

  

  useEffect(() => {
    // Apply animations only on larger screens
    if (window.innerWidth >= 768) {
      const triggers = document.querySelectorAll(".service-item");

      triggers.forEach((trigger, index) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: trigger,
              start: "top top", // Trigger when the element's top hits the viewport top
              end: "+=600", // Adjust this value to match the desired pin duration in pixels
              scrub: 3, // Smooth scrubbing for the pin duration
              pin: true, // Pin all elements
            },
          })
          .to(trigger, {
            opacity: 0, // Fade out the element
            y: 100, // Move element downward
            scale: 0.9, // Shrink the element's size while scrolling
            duration: 1,
          });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#home-services-section", // Target the section
      start: "top 10%",
      onEnter: () => {
        gsap.to("#home-services-section", {
          // backgroundColor: "#8b5cf6", // New background color
          backgroundColor: "#2a014f", // New background color
          duration: 1, // Instantly apply the background color
          color: "white",
        });
      },
      onLeaveBack: () => {
        gsap.to("#home-services-section", {
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

  function onClickCard(title) {
    if (title === "Digital Marketing") {
      navigate("/digitalmarketing");
      window.scrollTo({
        // top: document.body.scrollHeight, // Scroll to the bottom of the page
        top: 0,
        behavior: "instant",
      });
    }

    if (title === "Creative Design") {
      navigate("/creativedesign");
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }

    if (title === "Video Production") {
      navigate("/videoproduction");
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }

  return (
    <section
      id="home-services-section"
      className="px-5 py-5 sm:px-10 sm:py-10 md:px-20 md:py-20  overflow-x-hidden"
    >
      <div className=" flex items-center justify-between">
        <div
          ref={ourServicesRef}
          className="flex flex-col text-2xl md:text-4xl lg:text-7xl  font-semibold"
        >
          <p>OUR</p>
          <p className="ms-8 md:ms-12">SERVICES</p>
        </div>

        <div className="h-10 w-10 md:h-16 md:w-16 lg:h-24 lg:w-24 relative rounded-full bg-white">
          <GoArrowUpRight className="absolute w-full h-full p-3 text-violet-500" />
        </div>
      </div>

      <div className="flex flex-col gap-14 mt-44 mb-20">
        {[
          {
            title: "Creative Design",
            description:
              "Creative design transforms your brand with captivating visuals and impactful solutions. From branding to unique ideas, we bring your vision to life.",
            video: 'Video/ourservice_creativedesign_compressed.mp4',
            tags: [
              "Brand Identity Design",
              "UI and UX Design",
              "Digital Design",
            ],
          },
          {
            title: "Digital Marketing",
            description:
              "Digital marketing goes beyond metrics—it’s about creating meaningful relationships. Let’s craft strategies that connect, engage, and leave a lasting impact.",
            video:'Video/ourservice_digitalmarketing.mp4',
            tags: [
              "Social Media Marketing",
              "Content Marketing",
              "Email Marketing",
            ],
          },
          {
            title: "Video Production",
            description:
              "Bringing ideas to life with captivating visuals and storytelling. Engaging videos that enhance your brand's impact.",
            video:'Video/ourservice_videoproduction.mp4',
            tags: ["Corporate Video", "TV Commercial", "Video Editing"],
          },
        ].map((service, index) => (
          <div
            key={index}
            className="service-item rounded-tr-[150px] min-h-[90vh] max-h-max text-black flex flex-col-reverse md:flex-row justify-between gap-10 items-center bg-white  py-0 rounded-[50px]"
          >
            {/* Left Section */}
            <div className="flex flex-col py-3 gap-6 sm:gap-8 lg:gap-10 ps-6 sm:ps-14 basis-full lg:basis-[55%] justify-between">
              <div className="flex flex-col text-4xl sm:text-5xl lg:text-6xl">
                {service.title.split(" ").map((word, i) => (
                  <p key={i}>{word}</p>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap">
                {service.tags.map((tag, i) => (
                  <p
                    key={i}
                    className="border-2 hover:text-white border-gray-800 cursor-pointer hover:bg-violet-800 hover:border-violet-800 rounded-full transition-all ease-in-out duration-150 shadow-black px-3 py-1 sm:px-5 sm:py-2 text-gray-600 text-sm sm:text-base"
                  >
                    {tag}
                  </p>
                ))}
              </div>

              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                {service.description}
              </p>

              {/* <button
          onClick={() => onClickCard(service.title)}
          className="border text-sm sm:text-base lg:text-xl text-gray-50 font-semibold duration-300 relative group cursor-pointer overflow-hidden h-12 sm:h-14 w-44 sm:w-52 px-4 sm:px-8 rounded-2xl bg-[#8b5cf6] p-2 hover:bg-gray-700"
        >
          <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 sm:w-16 h-12 sm:h-16 rounded-full group-hover:scale-150 duration-700 right-10 sm:right-12 top-10 sm:top-12 bg-yellow-500"></div>
          <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 sm:w-12 h-8 sm:h-12 rounded-full group-hover:scale-150 duration-700 right-16 sm:right-20 -top-4 sm:-top-6 bg-orange-500"></div>
          <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-6 sm:w-8 h-6 sm:h-8 rounded-full group-hover:scale-150 duration-700 right-24 sm:right-32 top-4 sm:top-6 bg-pink-500"></div>
          <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4 rounded-full group-hover:scale-150 duration-700 right-2 sm:right-4 top-10 sm:top-12 bg-red-600"></div>
          <p className="z-10 absolute flex items-center gap-2 text-center justify-center w-fit bottom-2 sm:bottom-3">
            FIND OUT MORE
          </p>
        </button> */}

              <button
                onClick={() => onClickCard(service.title)}
                className="relative h-12 sm:h-14 w-fit px-4 sm:px-8 rounded-2xl text-white text-sm sm:text-base lg:text-xl font-semibold  bg-violet-800 hover:scale-105  outline-none overflow-hidden shadow-lg  cursor-pointer transition-transform duration-500"
              >
                FIND OUT MORE
                <span className="absolute inset-0 -left-full w-24 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-shine"></span>
              </button>
            </div>

            {/* Right Section */}
            <video
              className="h-64 sm:h-80 md:h-full w-full md:w-[300px] lg:w-[400px] xl:w-[600px] object-cover rounded-tr-[100px] md:rounded-tr-[150px]"
              src={service.video}
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home_Our_Services;
