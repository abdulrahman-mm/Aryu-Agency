import sample11111 from "../../assets/sample11111.png";
import uianduxdesign_dashboarddesign from '../../assets/uianduxdesign_dashboarddesign.svg'
import uianduxdesign_mobileappdesign from '../../assets/uianduxdesign_mobileappdesign.svg'
import uianduxdesign_websitedesign from '../../assets/uianduxdesign_websitedesign.svg'

const UiAndUxDesign_Main = () => {
  let cardData = [
    {
      cardTitle: "Website Design",
      cardDescription:
        "Your website is your brand’s identity. First impressions count! Your website is like your business’s home; if your home is well-kept, visitors will come. So, it must be beautifully designed. Our stunning designs captivate visitors and convey your story, turning browsers into loyal customers.",
      cardImage: uianduxdesign_websitedesign,
    },
    
    {
      cardTitle: "Mobile App Design",
      cardDescription:
        "Mobile app design keeps your brand in your customers' pockets! Imagine someone using their phone, effortlessly scrolling through our app with their thumb, fully engaged with the captivating visuals and smooth navigation. We develop user-friendly apps that ensure smooth interactions, connecting your audience to your brand anytime.",
      cardImage: uianduxdesign_mobileappdesign,
    },
    {
      cardTitle: "Dashboard Design",
      cardDescription:
        "Think of a grand concert where a DJ manages everything from a single spot. In the same way, a website dashboard acts as that control center, enabling you to manage data seamlessly and optimize performance effortlessly.",
      cardImage: uianduxdesign_dashboarddesign,
    },
   
  ];
  return (
    <section className="mt-32 px-20">
      <div className="flex items-center justify-between">
        <p className="text-6xl basis-[35%] font-semibold">UI and UX Design</p>

        <p className="basis-[32%] text-gray-600 text-lg">
          Your vision deserves to be heard. We amplify your ideas with creative
          flair, turning them into a brand voice that commands attention.
        </p>
      </div>

      <div className=" flex flex-col gap-5 mt-36">
        {cardData.map((item, index) => (
          <div
          className={` bg-white rounded-3xl gap-5 items-center my-8 px-10 py-10 flex ${
            index % 2 === 0 ? "" : "flex-row-reverse"
          } h-[90vh] justify-between`}
          >
            <div className="basis-[40%] flex flex-col justify-center gap-10 items-start">
              <p className="text-5xl font-opensans font-semibold text-black ">{item.cardTitle}</p>
              <p className="text-xl font-poppins  text-gray-500">{item.cardDescription}</p>

              {/* <button className="px-8 py-3 border-2 text-gray-500 rounded-full text-xl border-gray-500">
                Find out more
              </button> */}
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

export default UiAndUxDesign_Main;
