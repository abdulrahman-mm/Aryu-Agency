import React from "react";
import sample11111 from "../../assets/sample11111.png";
import { useNavigate } from "react-router-dom";

const Digital_Marketing_the_Art_Of_Bold_Disruption = () => {
  let navigate = useNavigate();

  let cardData = [
    {
      cardTitle: "Brand Identity Design",
      cardDescription:
        "Your vision deserves to be heard. We amplify your ideas with creative flair, turning them into a brand voice that commands attention.",
      cardImage: sample11111,
    },
    {
      cardTitle: "UI and UX Design",
      cardDescription:
        "Your vision deserves to be heard. We amplify your ideas with creative flair, turning them into a brand voice that commands attention.",
      cardImage: sample11111,
    },
    {
      cardTitle: "Digital Design",
      cardDescription:
        "Your vision deserves to be heard. We amplify your ideas with creative flair, turning them into a brand voice that commands attention.",
      cardImage: sample11111,
    },
    {
      cardTitle: "Brand Promotion Design",
      cardDescription:
        "Your vision deserves to be heard. We amplify your ideas with creative flair, turning them into a brand voice that commands attention.",
      cardImage: sample11111,
    },
    {
      cardTitle: "Packaging Design",
      cardDescription:
        "Your vision deserves to be heard. We amplify your ideas with creative flair, turning them into a brand voice that commands attention.",
      cardImage: sample11111,
    },

    {
      cardTitle: "Design Engineering",
      cardDescription:
        "Your vision deserves to be heard. We amplify your ideas with creative flair, turning them into a brand voice that commands attention.",
      cardImage: sample11111,
    },
  ];

  // useEffect(() => {
  //   const handleReverseScroll = (event) => {
  //     // Prevent the default scroll behavior
  //     event.preventDefault();

  //     // Reverse the scroll direction
  //     const reversedScroll = -event.deltaY; // Invert deltaY
  //     window.scrollBy(0, reversedScroll); // Move scroll in the opposite direction

  //   };

  //   // Add event listener to capture the 'wheel' scroll
  //   window.addEventListener("wheel", handleReverseScroll, { passive: false });

  //   // Cleanup the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("wheel", handleReverseScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleReverseScroll = (event) => {
  //     // Prevent the default scroll behavior
  //     event.preventDefault();

  //     // Reverse the scroll direction by directly modifying the scroll position
  //     const scrollPosition = window.scrollY;
  //     const reversedScroll = scrollPosition - event.deltaY; // Reverse deltaY
  //     window.scrollTo({
  //       top: reversedScroll, // Directly set the scroll position
  //       behavior: "auto", // Avoid animation for a responsive feel
  //     });
  //   };

  //   // Attach the wheel event listener
  //   window.addEventListener("wheel", handleReverseScroll, { passive: false });

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("wheel", handleReverseScroll);
  //   };
  // }, []);

  function onClickFindOutMore(title) {
    if (title === "UI and UX Design") {
      navigate("/uianduxdesign");

      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }

    if (title === "Digital Design") {
      navigate("/digitaldesign");

      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }

    if (title === "Brand Identity Design") {
      navigate("/brandidentitydesign");

      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }

  return (
    <section className="mt-32 px-20">
      <div className="flex items-center justify-between">
        <p className="text-6xl basis-[35%] font-semibold">
          The Art of Bold Disruption
        </p>

        <p className="basis-[32%] text-gray-600 text-lg">
          Your vision deserves to be heard. We amplify your ideas with creative
          flair, turning them into a brand voice that commands attention.
        </p>
      </div>

      <div className=" flex flex-col gap-5 mt-36">
        {cardData.map((item, index) => (
          <div
            className={`bb flex ${index % 2 === 0 ? "" : "flex-row-reverse"} justify-between`}
          >
            <div className="basis-[30%] flex flex-col justify-center gap-10 items-start">
              <p className="text-6xl ">{item.cardTitle}</p>
              <p className="text-xl text-gray-600">{item.cardDescription}</p>

              <button
                onClick={() => onClickFindOutMore(item.cardTitle)}
                className="px-8 py-3 border-2 text-gray-500 rounded-full text-xl border-gray-500"
              >
                Find out more
              </button>
            </div>

            <img
              src={item.cardImage}
              alt=""
              className="basis-[50%] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Digital_Marketing_the_Art_Of_Bold_Disruption;
