import React, { useEffect } from "react";
import Home_Insights_Updates_image1 from "../../assets/Home_Insights_Updates_image1.png";
import { FaRegCalendar } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import insightsupdates_image1 from '../../assets/insightsupdates_image1.svg'
import insightsupdates_image2 from '../../assets/insightsupdates_image2.svg'
import insightsupdates_image3 from '../../assets/insightsupdates_image3.svg'

gsap.registerPlugin(ScrollTrigger);

function Home_Insights_Updates() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#home-insights-updates-section",
      start: "top 20%",
      scrub:5,
      onEnter: () => {
        gsap.to("#home-insights-updates-section", {
          backgroundColor: "#8b5cf6",
          duration: 1,
          color: "white",
        });
      },
      onLeaveBack: () => {
        gsap.to("#home-insights-updates-section", {
          backgroundColor: "white",
          duration: 1,
          color: "black",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Text Animation
    gsap.fromTo(
      ".insights-text",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".insights-text", // Target element
          start: "top 80%", // Animation starts when element is 80% in view
          end: "top 50%", // Animation ends when element is 50% in view
          toggleActions: "play none none reset", // Replay on entering view

        },
      }
    );

    // Description Animation
    gsap.fromTo(
      ".insights-description",
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".insights-description", // Target element
          start: "top 80%", // Animation starts when element is 80% in view
          end: "top 50%", // Animation ends when element is 50% in view
          toggleActions: "play none none reset", // Replay on entering view

        },
      }
    );

    // Cleanup ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="home-insights-updates-section"
      className="px-5 py-5 sm:px-10 sm:py-10 md:px-20 md:py-20 "
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <p className="text-4xl insights-text sm:text-5xl md:text-6xl font-semibold basis-[35%]">
          Insights & Updates
        </p>
        <p
         className="text-base insights-description sm:text-lg md:text-xl basis-[100%] md:basis-[33%]">
          Our creativity is limitless. We craft bold, innovative campaigns that
          captivate, connect, and leave a lasting impression on your audience.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 my-10 md:my-20">
        {/* Main Article */}
        <div className="flex flex-col gap-4 lg:gap-6">
          <img
            src={insightsupdates_image1}
            alt=""
            className="w-full h-auto rounded-md"
          />
          <p className="text-2xl sm:text-3xl font-medium">
            Innovation Beyond Imagination
          </p>
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <FaRegCalendar />
            <p>July 22, 2024</p>
          </div>
        </div>

        {/* Other Articles */}
        <div className="flex flex-col gap-6">
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 lg:gap-6"
            >
              <img
                src={index === 0 ? insightsupdates_image2 : insightsupdates_image3}
                alt=""
                className="w-full md:w-72 h-auto rounded-md"
              />
              <div className="flex flex-col justify-center gap-4">
                <div className="flex items-center gap-2 text-sm sm:text-base">
                  <FaRegCalendar />
                  <p>July 22, 2024</p>
                </div>
                <p className="text-xl sm:text-2xl md:text-3xl font-medium">
                  {index === 0
                    ? "Turning Bold Ideas Into Reality"
                    : "Where Design Reimagines the Future"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home_Insights_Updates;
