import sample11111 from "../../assets/sample11111.png";
import uianduxdesign_dashboarddesign from "../../assets/uianduxdesign_dashboarddesign.svg";
import uianduxdesign_mobileappdesign from "../../assets/uianduxdesign_mobileappdesign.svg";
import uianduxdesign_websitedesign from "../../assets/uianduxdesign_websitedesign.svg";

const UiAndUxDesign_Main = () => {
  let cardData = [
    {
      cardTitle: "Website Design",
      cardDescription:
        "Your website is your brand’s identity and first impression. Therefore, it must be beautifully designed to captivate visitors, convey your story, and turn browsers into loyal customers. In addition, a well-crafted website helps your brand stand out and attract attention.",
      cardImage: uianduxdesign_websitedesign,
    },

    {
      cardTitle: "Mobile App Design",
      cardDescription:
        "Mobile app design keeps your brand in your customers' hands. Our user-friendly apps feature captivating visuals and smooth navigation, offering seamless interactions. Furthermore, we ensure that your brand stays connected and accessible with every touch and scroll.",
      cardImage: uianduxdesign_mobileappdesign,
    },
    {
      cardTitle: "Dashboard Design",
      cardDescription:
        "Think of a grand concert where a DJ manages everything from a single spot. Similarly, a website dashboard acts as a control centre, enabling you to manage data seamlessly and optimize performance effortlessly.",
      cardImage: uianduxdesign_dashboarddesign,
    },
  ];
  return (
    <section className="mt-32 px-5 py-5 md:px-14 md:py-14  lg:px-20 lg:py-20">
      <div className="flex items-center gap-5 flex-wrap justify-between">
        <p className="text-3xl md:text-6xl  md:basis-[35%] font-sans font-semibold">
          UI and UX Design
        </p>

        <p className="md:basis-[32%] text-gray-600 text-lg">
          Your vision deserves to be heard. We amplify your ideas with creative
          flair, turning them into a brand voice that commands attention.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-10 mt-16 lg:mt-36">
        {cardData.map((item, index) => (
          <div
            className={` bg-white rounded-3xl gap-5 md:gap-10  flex flex-col-reverse md:flex-row ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            } h-auto lg:h-[90vh] items-center`}
          >
            <div className="basis-[100%] md:basis-[50%] flex flex-col gap-3 md:gap-8 items-start md:text-left">
              <p className="text-lg md:text-2xl lg:text-4xl font-opensans font-semibold text-black ">
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

export default UiAndUxDesign_Main;
