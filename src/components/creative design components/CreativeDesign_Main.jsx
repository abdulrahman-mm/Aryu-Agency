import creativedesign_brandidentitydesign from "../../assets/creativedesign_brandidentitydesign.svg";
import creativedesign_uiuxdesign from "../../assets/creativedesign_uiuxdesign.svg";
import creativedesign_digitaldesign from "../../assets/creativedesign_digitaldesign.svg";
import creativedesign_brandpromotiondesign from "../../assets/creativedesign_brandpromotiondesign.svg";
import creativedesign_packagingdesign from "../../assets/creativedesign_packagingdesign.svg";
import creativedesign_interiorspacedesign from "../../assets/creativedesign_interiorspacedesign.svg";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const CreativeDesign_Main = () => {
  let navigate = useNavigate();

  let cardData = [
    {
      cardTitle: "Brand Identity Design",
      cardDescription:
        "Every brand has a unique story. It begins with a logo, vibrant colours, typography, and imagery that reflect your brand’s essence. Let’s work together to create a memorable brand identity with creative design for your Logo, Business Cards, ID Cards, and Letterheads.",
      cardImage: creativedesign_brandidentitydesign,
    },

    {
      cardTitle: "UI and UX Design",
      cardDescription:
        "UI and UX design are key to creating a better user experience, offering stunning visuals that leave a lasting impression. For this reason, we craft user-friendly website designs, mobile app designs, and dashboard designs that turn visitors into loyal customers through creative design.",
      cardImage: creativedesign_uiuxdesign,
    },
    {
      cardTitle: "Digital Design",
      cardDescription:
        "A striking design stops the scroll, while a dynamic web banner pulls them in. Moreover, a perfectly timed Google Ad seals the deal. In essence, from curiosity to loyalty, our digital design turns moments into lasting connections and drives your business forward.",
      cardImage: creativedesign_digitaldesign,
    },
    {
      cardTitle: "Brand Promotion Design",
      cardDescription:
        "Brand promotion is like running a café. Brochures highlight uniqueness, flyers spark interest, standees grab attention, and billboards serve as invitations. Additionally, magazine covers and newspaper ads expand reach, all connecting with the audience and fuelling business growth.  ",
      cardImage: creativedesign_brandpromotiondesign,
    },

    {
      cardTitle: "Packaging Design",
      cardDescription:
        "In a bustling store, great packaging design catches your eye. By using vibrant colors and unique shapes, our designs make products stand out, engaging customers and driving sales. Thus, with our expertise, your packaging builds brand loyalty and excitement. ",
      cardImage: creativedesign_packagingdesign,
    },
    {
      cardTitle: "Interior & Space Design",
      cardDescription:
        "Stepping into a space that blends comfort and inspiration is transformative. Our designs combine style and functionality, creating layouts tailored to your needs. Whether it’s a cozy home or vibrant commercial space, we enhance your environment with remarkable details.",
      cardImage: creativedesign_interiorspacedesign,
    },
  ];

  const onClickFindOutMore = (title) => {
    navigate(title.toLowerCase().split(" ").join(""));
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

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

  // useEffect(() => {
  //   const cards = document.querySelectorAll(".card-item");

  //   cards.forEach((card, index) => {
  //     // Define unique animations
  //     const uniqueAnimations = [
  //       { y: 100, opacity: 0, rotation: 15, scale: 0.9, skewX: 10 }, // Slide up with rotation and skew
  //       { x: -150, opacity: 0, rotation: -10, scale: 1.1 }, // Slide left with rotation
  //       { x: 150, opacity: 0, skewY: 20, scale: 0.8 }, // Slide right with skew
  //       { y: -100, opacity: 0, scale: 1.2, rotation: 20 }, // Slide down with scaling
  //       { y: 0, x: 0, scale: 0.6, opacity: 0 }, // Zoom in from center
  //     ];

  //     // Randomize animations for extra uniqueness
  //     const animationConfig =
  //       uniqueAnimations[index % uniqueAnimations.length];

  //     gsap.fromTo(
  //       card,
  //       animationConfig, // Initial state
  //       {
  //         x: 0,
  //         y: 0,
  //         rotation: 0,
  //         skewX: 0,
  //         skewY: 0,
  //         scale: 1,
  //         opacity: 1,
  //         duration: 1.5,
  //         ease: "expo.out",
  //         scrollTrigger: {
  //           trigger: card,
  //           start: "top 80%",
  //           end: "bottom 60%",
  //           toggleActions: "play none none reverse",
  //           scrub:5
  //         },
  //       }
  //     );
  //   });
  // }, []);

  // useEffect(() => {
  //   const cards = document.querySelectorAll(".card-item");

  //   const uniqueAnimations = [
  //     { y: 100, opacity: 0 },
  //     { y: -100, scale: 0.8, opacity: 0 },
  //     { x: -200, rotation: -15, opacity: 0 },
  //     { x: 200, skewX: 20, opacity: 0 },
  //     { scale: 0.6, opacity: 0 },
  //     // { scale: 1.4, rotation: 25, opacity: 0 },
  //     { rotationY: 90, opacity: 0 },
  //     { rotationX: 90, opacity: 0 },
  //     { x: -150, skewY: 15, opacity: 0 },
  //     { y: 200, opacity: 0, ease: "bounce.out" },
  //   ];

  //   cards.forEach((card, index) => {
  //     const animationConfig = uniqueAnimations[index % uniqueAnimations.length];

  //     gsap.fromTo(
  //       card,
  //       animationConfig,
  //       {
  //         x: 0,
  //         y: 0,
  //         rotation: 0,
  //         rotationX: 0,
  //         rotationY: 0,
  //         skewX: 0,
  //         skewY: 0,
  //         scale: 1,
  //         opacity: 1,
  //         duration: 1.5,
  //         ease: "expo.out",
  //         scrollTrigger: {
  //           trigger: card,
  //           start: "top 50%",
  //           end: "bottom 20%",
  //           toggleActions: "play none none reverse",
  //           scrub:5
  //         },
  //       }
  //     );
  //   });
  // }, []);

  // useEffect(() => {
  //   const cards = document.querySelectorAll(".card-item");

  //   cards.forEach((card, index) => {
  //     // Define diagonal animation
  //     const isOdd = index % 2 !== 0; // Alternate direction for odd/even cards

  //     gsap.fromTo(
  //       card,
  //       {
  //         x: isOdd ? -200 : 200, // Cross-axis movement (diagonal)
  //         y: 200, // Moves up diagonally
  //         opacity: 0, // Fades in
  //         scale: 0.9, // Slightly smaller at the start
  //       },
  //       {
  //         x: 0,
  //         y: 0,
  //         opacity: 1,
  //         scale: 1,
  //         rotation: 0,
  //         duration: 1.5,
  //         ease: "expo.out",
  //         scrollTrigger: {
  //           trigger: card,
  //           start: "top 80%",
  //           end: "top 50%",
  //           scrub: 5, // Smooth animation with scrolling
  //           toggleActions: "play none none reverse", // Reverses on scroll back
  //         },
  //       }
  //     );
  //   });
  // }, []);

  return (
    <section className="px-5 py-5 sm:px-10 sm:py-10  md:px-20  md:py-20">
      <div className="flex items-center gap-5 flex-wrap justify-between">
        <p className="font-semibold md:basis-[50%] text-2xl md:text-4xl lg:text-6xl">
          The Art of Bold Disruption
        </p>
        <p className="md:basis-[32%] text-lg">
          Your vision deserves to be heard. We amplify your ideas with creative
          flair, turning them into a brand voice that commands attention.
        </p>
      </div>

      {/* <div className="flex flex-col justify-center items-center gap-10 mt-16 lg:mt-36">
        {cardData.map((item, index) => (
          <div
            key={index}
            className={` bg-white rounded-3xl gap-5 md:gap-10  flex flex-col-reverse md:flex-row ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            } h-auto lg:h-[90vh] items-center`}
          >
            <div className="basis-[100%] md:basis-[50%] flex flex-col gap-3 md:gap-8 items-start md:text-left">
              <p className="text-lg md:text-2xl lg:text-4xl font-opensans font-semibold text-black">
                {item.cardTitle}
              </p>
              <p className="text-sm md:text-lg font-poppins text-gray-500">
                {item.cardDescription}
              </p>
              {item.cardTitle !== "Packaging Design" &&
                item.cardTitle !== "Interior & Space Design" && (
                  <button
                    onClick={() => onClickFindOutMore(item.cardTitle)}
                    className="border-2 text-sm md:text-lg border-black text-gray-500 px-6 md:px-8 py-2 md:py-3 rounded-full hover:text-black hover:bg-gray-100 transition duration-300"
                  >
                    Find out more
                  </button>
                )}
            </div>
            <img
              src={item.cardImage}
              alt={item.cardTitle}
              className="w-full  md:w-1/2 lg:basis-[40%] object-cover rounded-2xl"
            />
          </div>
        ))}
      </div> */}

      <div className="flex flex-col justify-center items-center gap-10 mt-16 lg:mt-36">
        {cardData.map((item, index) => (
          <div
            key={index}
            className={`card-item bg-white rounded-3xl gap-5 md:gap-10 flex flex-col-reverse md:flex-row ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            } h-auto lg:h-[90vh] items-center`}
          >
            {/* Text Section */}
            <div className="basis-[100%] md:basis-[50%] flex flex-col gap-3 md:gap-8 items-start md:text-left">
              <p className="text-lg md:text-2xl lg:text-4xl font-opensans font-semibold text-black">
                {item.cardTitle}
              </p>
              <p className="text-sm md:text-lg font-poppins text-gray-500">
                {item.cardDescription}
              </p>
              {item.cardTitle !== "Packaging Design" &&
                item.cardTitle !== "Interior & Space Design" && (
                  <button
                    onClick={() => onClickFindOutMore(item.cardTitle)}
                    className="border-2 text-sm md:text-lg border-black text-gray-500 px-6 md:px-8 py-2 md:py-3 rounded-full hover:text-black hover:bg-gray-100 transition duration-300"
                  >
                    Find out more
                  </button>
                )}
            </div>
            {/* Image Section */}
            <img
              src={item.cardImage}
              alt={item.cardTitle}
              className="w-full md:w-1/2 lg:basis-[40%] object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreativeDesign_Main;
