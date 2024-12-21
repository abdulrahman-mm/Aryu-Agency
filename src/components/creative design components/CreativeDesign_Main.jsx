import creativedesign_brandidentitydesign from "../../assets/creativedesign_brandidentitydesign.svg";
import creativedesign_uiuxdesign from "../../assets/creativedesign_uiuxdesign.svg";
import creativedesign_digitaldesign from "../../assets/creativedesign_digitaldesign.svg";
import creativedesign_brandpromotiondesign from "../../assets/creativedesign_brandpromotiondesign.svg";
import creativedesign_packagingdesign from "../../assets/creativedesign_packagingdesign.svg";
import creativedesign_interiorspacedesign from "../../assets/creativedesign_interiorspacedesign.svg";
import sample11111 from "../../assets/sample11111.svg";

import { useNavigate } from "react-router-dom";

const CreativeDesign_Main = () => {
  let navigate = useNavigate();

  let cardData = [
    {
      cardTitle: "Brand Identity Design",
      cardDescription:
        "Every brand has its own unique story ready to be shared. It starts with a logo, your brand's signature that captures attention. Colors bring vibrancy and personality, turning your identity into a visual statement. Typography reflects your brand’s essence, while imagery creates a world that attracts customers. With a consistent voice that resonates, we’ll collaborate to bring these creative ideas to your business: Logo Identity, Business Card, ID Card, and Letterhead. Let’s craft a brand identity that’s not just seen but truly felt. ",
      cardImage: sample11111,
    },

    {
      cardTitle: "UI and UX Design",
      cardDescription:
        "UI and UX design is your secret weapon for enhancing user experience. This tool offers striking visuals, making it incredibly useful for creating a memorable experience for viewers. We create intuitive interfaces that transform casual visitors into loyal ones. ",
      cardImage: creativedesign_uiuxdesign,
    },
    {
      cardTitle: "Digital Design",
      cardDescription:
        "A striking design stops the scroll, a dynamic web banner pulls them in, and a perfectly timed Google Ad seals the deal. From curiosity to loyalty, our digital design turns moments into lasting connections and drives your business forward.",
      cardImage: creativedesign_digitaldesign,
    },
    {
      cardTitle: "Brand Promotion Design",
      cardDescription:
        "Brand promotion is like running a café. Brochures highlight what makes the brand unique, flyers create interest in new offers, and standees grab attention like signs. Billboards serve as large invitations, while magazine covers and newspaper ads reach wider audiences. Each design captivates attention and connects with the audience, fueling business growth like a beloved café.",
      cardImage: creativedesign_brandpromotiondesign,
    },

    {
      cardTitle: "Packaging Design",
      cardDescription:
        "In a bustling store, something catches your eye—that’s the power of great packaging design! Using vibrant colors and unique shapes, our designs make your products stand out on the shelf, engaging customers and driving sales. With our expertise, your packaging becomes essential for building brand loyalty and excitement!",
      cardImage: creativedesign_packagingdesign,
    },
    {
      cardTitle: "Interior & Space Design",
      cardDescription:
        "Stepping into a space that blends comfort and inspiration is transformative. Our designs combine style and functionality, creating layouts tailored to your needs. Whether it’s a cozy home or a vibrant commercial space, we enhance your environment, ensuring every detail is truly remarkable.",
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

  return (
    <section className="mt-32  px-20 py-20">
      <div className="flex items-center justify-between">
        <p className="text-6xl basis-[35%] font-semibold">
          The Art of Bold Disruption
        </p>
        <p className="basis-[32%] text-lg">
          Your vision deserves to be heard. We amplify your ideas with creative
          flair, turning them into a brand voice that commands attention.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-5 mt-36">
        {cardData.map((item, index) => (
          <div
            key={index}
            className={` bg-white rounded-3xl gap-5 items-center my-8 px-10 py-10 flex ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            } h-[90vh] justify-between`}
          >
            <div className="basis-[40%] flex flex-col justify-start  gap-10 items-start">
              <p className="text-5xl font-opensans font-semibold text-black">
                {item.cardTitle}
              </p>
              <p className="text-xl font-poppins  text-gray-500">
                {item.cardDescription}
              </p>
              {item.cardTitle !== "Packaging Design" &&
               item.cardTitle !== "Interior & Space Design" && (
                  <button
                    onClick={() => onClickFindOutMore(item.cardTitle)}
                    className="border-2 text-lg border-black text-gray-500 px-8 hover:text-black py-3 rounded-full"
                  >
                    Find out more
                  </button>
                )}
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
