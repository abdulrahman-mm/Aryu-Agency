import React from "react";
import brandpromotiondesign_BrochureDesign from "../../assets/brandpromotiondesign_BrochureDesign.svg";
import brandpromotiondesign_flyers from "../../assets/brandpromotiondesign_flyers.svg";
import brandpromotiondesign_standeedesign from "../../assets/brandpromotiondesign_standeedesign.svg";
import brandpromotiondesign_billboarddesign from "../../assets/brandpromotiondesign_billboarddesign.svg";
import brandpromotiondesign_magazinecoverletter from "../../assets/brandpromotiondesign_magazinecoverletter.svg";
import brandpromotiondesign_newspaperads from "../../assets/brandpromotiondesign_newspaperads.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);


const BrandPromotionDesign_Main = () => {
  let cardData = [
    {
      cardTitle: "Brochure Design",
      cardDescription:
        "Imagine finding a beautifully designed brochure at a fair, capturing your attention and clearly outlining services. As a result, your brochure can have the same impact, highlighting your brand’s uniqueness and inviting potential clients to explore what you offer and learn more.",
      cardImage: brandpromotiondesign_BrochureDesign,
    },
    {
      cardTitle: "Flyers",
      cardDescription:
        "Just like colourful flyers at a sports event, our creative design for flyers grab attention and build excitement. They promote your events and special offers, ensuring your message connects with the community and sparks interest, creating a buzz that can't be ignored.",
      cardImage: brandpromotiondesign_flyers,
    },
    {
      cardTitle: "Standee Design",
      cardDescription:
        "Walking through a mall, a standee catches your eye with its bold design, making you pause. Similarly, our standees capture attention with impactful visuals, encouraging engagement and ensuring your message stands out and leaves a lasting impression.",
      cardImage: brandpromotiondesign_standeedesign,
    },
    {
      cardTitle: "Magazine Cover Design",
      cardDescription:
        "Driving down a busy highway, a billboard catches your eye with a clear message. similarly Our billboard designs aim for the same impact, ensuring maximum visibility and making your brand stand out, leaving a lasting impression on everyone who passes by.",
      cardImage: brandpromotiondesign_magazinecoverletter,
    },
    {
      cardTitle: "Newspaper Ads",
      cardDescription:
        "Remember a newspaper ad that caught your attention with its informative, inviting message? Our newspaper ads do the same, reaching a wide audience, building trust, and ensuring your brand is recognized in the community. As a result, driving engagement and growth.",
      cardImage: brandpromotiondesign_newspaperads,
    },
    {
      cardTitle: "Billboard Design",
      cardDescription:
        "Driving on a busy highway, a billboard grabs your attention with a clear message. Likewise, our billboard designs aim for maximum visibility, ensuring your brand stands out and captures the attention of everyone who passes by.",
      cardImage: brandpromotiondesign_billboarddesign,
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".card-item");

    cards.forEach((card, index) => {
      const animationConfig = [
        { y: 100, opacity: 0 }, // Slide up
        { x: -100, opacity: 0 }, // Slide in from left
        { x: 100, opacity: 0 }, // Slide in from right
        { scale: 0.8, opacity: 0 }, // Zoom in
      ];

      gsap.fromTo(
        card,
        animationConfig[index % animationConfig.length], // Apply unique animation
        {
          y: 0,
          x: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // Trigger when the top of the card reaches 80% of the viewport
            end: "bottom 60%", // End when the bottom of the card reaches 60% of the viewport
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);


  return (
    <section className="px-5 py-5 sm:px-10 sm:py-10 overflow-x-hidden  md:px-20  md:py-20">
      <div className="flex items-center gap-5 flex-wrap justify-between">
        <p className="text-3xl md:text-6xl  md:basis-[35%] font-sans font-semibold">
          The Art of Bold Disruption
        </p>

        <p className="md:basis-[32%] text-lg">
          Your vision deserves to be heard. We amplify your ideas with creative
          flair, turning them into a brand voice that commands attention.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-10 mt-16 lg:mt-36">
        {cardData.map((item, index) => (
          <div
            className={` bg-white card-item rounded-3xl gap-5 md:gap-10  flex flex-col-reverse md:flex-row ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            } h-auto lg:h-[90vh] items-center`}
          >
            <div className="basis-[100%] md:basis-[50%] flex flex-col gap-3 md:gap-8 items-start md:text-left">
              <p className="text-lg md:text-2xl lg:text-7xl font-opensans font-semibold text-black ">
                {item.cardTitle}
              </p>
              <p className="text-sm md:text-lg font-poppins text-gray-500">
                {item.cardDescription}
              </p>

              {/* <button className="px-8 py-3 border-2 text-gray-500 rounded-full text-xl border-gray-500">
              Find out more
            </button> */}
            </div>

            <img
              src={item.cardImage}
              alt=""
              className="w-full  md:w-1/2 lg:basis-[40%] object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandPromotionDesign_Main;
