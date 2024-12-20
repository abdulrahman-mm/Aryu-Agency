import sample11111 from "../../assets/sample11111.png";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CreativeDesign_Main = () => {
  // useEffect(() => {
  //   // Register ScrollTrigger
  //   gsap.registerPlugin(ScrollTrigger);

  //   // Create animations for each card
  //   const cards = document.querySelectorAll(".animated-card");
  //   cards.forEach((card, index) => {
  //     gsap.fromTo(
  //       card,
  //       { opacity: 0, y: 50 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1,
  //         scrollTrigger: {
  //           trigger: card,
  //           start: "top center+=100",
  //           end: "bottom center",
  //           toggleActions: "play none none reverse",
  //         },
  //       }
  //     );
  //   });

  //   // Clean up ScrollTrigger instances on unmount
  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#creative-design-main", // Target the section
      start: "top center",
      onEnter: () => {
        gsap.to("#creative-design-main", {
          backgroundColor: "#8b5cf6", // New background color
          duration: 1, // Instantly apply the background color
          color: "white",
        });
      },
      onLeaveBack: () => {
        gsap.to("#creative-design-main", {
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

  let cardData = [
    {
      cardTitle: "Brochure Design",
      cardDescription:
        "Your vision deserves to be heard. We amplify your ideas with creative flair, turning them into a brand voice that commands attention.",
      cardImage: sample11111,
    },
    {
      cardTitle: "Flyers",
      cardDescription:
        "Your vision deserves to be heard. We amplify your ideas with creative flair, turning them into a brand voice that commands attention.",
      cardImage: sample11111,
    },
    {
      cardTitle: "Standee Design",
      cardDescription:
        "Your vision deserves to be heard. We amplify your ideas with creative flair, turning them into a brand voice that commands attention.",
      cardImage: sample11111,
    },
    {
      cardTitle: "Magazine Cover Design",
      cardDescription:
        "Your vision deserves to be heard. We amplify your ideas with creative flair, turning them into a brand voice that commands attention.",
      cardImage: sample11111,
    },
    {
      cardTitle: "Newspaper Ads",
      cardDescription:
        "Your vision deserves to be heard. We amplify your ideas with creative flair, turning them into a brand voice that commands attention.",
      cardImage: sample11111,
    },
    {
      cardTitle: "Billboard Design",
      cardDescription:
        "Your vision deserves to be heard. We amplify your ideas with creative flair, turning them into a brand voice that commands attention.",
      cardImage: sample11111,
    },
  ];



  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Create diagonal animations for each card
    const cards = document.querySelectorAll(".animated-card");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 100 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
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


  return (
    <section id="creative-design-main" className="mt-32  px-20 py-20">
      <div className="flex items-center justify-between">
        <p className="text-6xl basis-[35%] font-semibold">
          The Art of Bold Disruption
        </p>
        <p className="basis-[32%] text-lg">
          Your vision deserves to be heard. We amplify your ideas with creative
          flair, turning them into a brand voice that commands attention.
        </p>
      </div>

      <div className="flex flex-col gap-5 mt-36"> 
        {cardData.map((item, index) => (
          <div
            key={index}
            className={`animated-card flex ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            } h-[90vh] justify-between`}
          >
            <div className="basis-[30%] flex flex-col justify-start mt-20 gap-10 items-start">
              <p className="text-6xl">{item.cardTitle}</p>
              <p className="text-xl">{item.cardDescription}</p>
            </div>
            <img
              src={item.cardImage}
              alt={item.cardTitle}
              className="basis-[50%] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreativeDesign_Main;
