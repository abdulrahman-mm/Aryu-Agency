import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdArrowRoundForward } from "react-icons/io";
import our_services_image1 from "../../assets/our_services_image1.png";
import our_services_image2 from "../../assets/our_services_image2.png";
import home_our_services_video from "../../assets/Video/home_our_services_video.mp4";
import home_our_services_video_compressed from "../../assets/Video/home_our_services_video_compressed.mp4";
import xx from "../../assets/Video/xx.mp4";
import sample from "../../assets/Video/sample.mp4";
import ourservice_creativedesign from "../../assets/Video/ourservice_creativedesign.mp4";
import ourservice_digitalmarketing from "../../assets/Video/ourservice_digitalmarketing.mp4";
import ourservice_videoproduction from "../../assets/Video/ourservice_videoproduction.mp4";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Home_Our_Services({ ourServicesRef }) {
  let navigate = useNavigate();

  useEffect(() => {
    const triggers = document.querySelectorAll(".service-item");

    triggers.forEach((trigger, index) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: trigger,
            start: "top top", // Trigger when the element's top hits the viewport top
            end: "+=600", // Adjust this value to match the desired pin duration in pixels
            scrub: 3, // Smooth scrubbing for the pin duration
            // pin: !isLast, // Pin all but the last element
            pin: true, // Pin all but the last element
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
  }, []);

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Create animations for each card
    const cards = document.querySelectorAll(".service-item");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top center+=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Clean up ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      "#video",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 5, // Adjusted for a smoother transition
        delay: 2,
        ease: "back.in", // Smooth easing function
        scrollTrigger: {
          trigger: "#video", // Target the video element
          start: "top center", // Animation starts when the top of the video is 80% visible
          end: "top 90%", // Animation ends when the top of the video is 20% visible
          scrub: 3, // Smooth, responsive animation based on scroll
        },
      }
    );
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#home-services-section", // Target the section
      start: "top center",
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

  // useEffect(() => {
  //   const triggers = document.querySelectorAll(".services");

  //   triggers.forEach((trigger, index) => {
  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: trigger,
  //           start: "top 50%", // Trigger when the element's top hits the viewport top
  //           end: "+=600", // Adjust this value to match the desired pin duration in pixels
  //           scrub: 3, // Smooth scrubbing for the pin duration
  //           pin: false, // Pin all but the last element
  //           markers: false, // Set true if you want to debug triggers
  //         },
  //       })
  //       .to(trigger, {
  //         opacity: 0, // Fade out the element
  //         y: 100, // Move element downward
  //         scale: 0.9, // Shrink the element's size while scrolling
  //         duration: 2,
  //       });
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

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
      className="px-32 py-20  overflow-x-hidden"
    >
      <div
        className="services flex items-center justify-between"
      >
        <div         ref={ourServicesRef}
 className="flex flex-col text-7xl  font-semibold">
          <p>OUR</p>
          <p className="ms-12">SERVICES</p>
        </div>

        <div className="h-24 w-24 relative rounded-full bg-white">
          <GoArrowUpRight className="absolute w-full h-full p-3 text-violet-500" />
        </div>
      </div>

      <div className="flex flex-col gap-14 mt-44 mb-20">
        {[
          {
            title: "Creative Design",
            description:
              "Creative design transforms your brand with captivating visuals and impactful solutions. From branding to unique ideas, we bring your vision to life.",
            video: ourservice_creativedesign,
            tags: [
              "Brand Identity Design",
              "UI and UX Design",
              "Digital Design",
              "Brand Promotion Design",
              "Interior & Space Design",
            ],
          },
          {
            title: "Digital Marketing",
            description:
              "Digital marketing goes beyond metrics—it’s about creating meaningful relationships. Let’s craft strategies that connect, engage, and leave a lasting impact.",
            video: ourservice_digitalmarketing,
            tags: [
              "Search Engine Optimization",
              "Pay-Per-Click Advertising",
              "Social Media Marketing",
              "Content Marketing",
              "Email Marketing",
            ],
          },
          {
            title: "Video Production",
            description:
              "Bringing ideas to life with captivating visuals and storytelling. Engaging videos that enhance your brand's impact.",
            video: ourservice_videoproduction,
            tags: [
              "Social Media Video",
              "Corporate Video",
              "Ad Film Shoot",
              "Product Photoshoot",
              "TV Commercial ",
              "Video Editing ",
            ],
          },
        ].map((service, index) => (
          <div
            key={index}
            className="service-item rounded-tr-[150px] h-[90vh] text-black  flex justify-between gap-10 items-center bg-white ps-14  rounded-[50px]"
          >
            <div className="flex  flex-col gap-10  basis-[55%] justify-between">
              <div className="flex flex-col text-6xl">
                {service.title.split(" ").map((word, i) => (
                  <p key={i}>{word}</p>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap">
                {service.tags.map((tag, i) => (
                  <p
                    key={i}
                    className="border-2 hover:text-white border-gray-800 cursor-pointer hover:bg-violet-800 hover:border-violet-800  rounded-full  transition-all ease-in-out duration-150 shadow-black px-5 py-2 text-gray-600"
                  >
                    {tag}
                  </p>
                ))}
              </div>

              <p className="text-gray-600">{service.description}</p>

              <button
                onClick={() => onClickCard(service.title)}
                class="border  text-xl text-gray-50  font-semibold duration-300 relative group cursor-pointer   overflow-hidden h-14  w-52 px-8 rounded-2xl bg-[#8b5cf6] p-2  hover:bg-gray-700 "
              >
                <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
                <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
                <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
                <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
                <p class="z-10 absolute flex items-center gap-2 text-center justify-center w-fit bottom-3 ">
                  {" "}
                  FIND OUT MORE
                </p>
              </button>
            </div>

            <video
              className=" h-full w-[600px] object-cover rounded-tr-[150px]"
              src={service.video}
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
        ))}
      </div>

      {/* <div id="video" className="relative w-[80vw] h-[400px] mt-72 rounded-3xl">
        <video
          className="absolute object-cover w-full h-full rounded-3xl "
          src={home_our_services_video_compressed}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="absolute flex  w-full h-full px-10 py-10 items-center justify-between">
          <div className="flex flex-col ">
            <p
              style={{ "text-shadow": "3px 2px 8px rgba(0, 0, 0, 0.5)" }}
              className="text-8xl text-white font-semibold "
            >
              99%
            </p>
            <p
              style={{ "text-shadow": "3px 2px 8px rgba(0, 0, 0, 0.5)" }}
              className="text-3xl text-white"
            >
              Project Finished
            </p>
          </div>

          <p
            style={{ "text-shadow": "3px 2px 8px rgba(0, 0, 0, 0.8)" }}
            className="text-4xl basis-[50%] place-content-center text-end text-white"
          >
            Turning Sparks into Spectacles
          </p>
        </div>
      </div> */}
    </section>
  );
}

export default Home_Our_Services;
