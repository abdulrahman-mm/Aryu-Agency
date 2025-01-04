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
        "Every brand has a unique story. It begins with a logo, vibrant colours, typography, and imagery that reflect your brand’s essence. Let’s work together to create a memorable brand identity with creative design for your Logo, Business Cards, ID Cards, and Letterheads.",
      cardImage: sample11111,
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

  return (
    <section className="mt-32 px-5 py-5 md:px-14 md:py-14  lg:px-20 lg:py-20">
      <div className="flex items-center gap-5 flex-wrap justify-between">
        <p className="flex items-center gap-5 flex-wrap justify-between">
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
            key={index}
            className={`bg-white rounded-3xl gap-5 md:gap-10  flex flex-col-reverse md:flex-row ${
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
              className="w-full  md:w-1/2 lg:basis-[40%] object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreativeDesign_Main;
