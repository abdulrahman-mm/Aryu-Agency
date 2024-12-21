import React from "react";
import brandpromotiondesign_BrochureDesign from "../../assets/brandpromotiondesign_BrochureDesign.svg";
import brandpromotiondesign_flyers from "../../assets/brandpromotiondesign_flyers.svg";
import brandpromotiondesign_standeedesign from "../../assets/brandpromotiondesign_standeedesign.svg";
import brandpromotiondesign_billboarddesign from "../../assets/brandpromotiondesign_billboarddesign.svg";
import brandpromotiondesign_magazinecoverletter from "../../assets/brandpromotiondesign_magazinecoverletter.svg";
import brandpromotiondesign_newspaperads from "../../assets/brandpromotiondesign_newspaperads.svg";



const BrandPromotionDesign_Main = () => {
  let cardData = [
    {
      cardTitle: "Brochure Design",
      cardDescription:
        "Imagine you’re at a community fair and come across a beautifully designed brochure. It instantly captures your attention and provides a clear overview of the services offered. Your brochure can create that same impact for potential clients, showcasing what makes your brand unique and inviting them to learn more.",
      cardImage: brandpromotiondesign_BrochureDesign,
    },
    {
      cardTitle: "Flyers",
      cardDescription:
        "For example, the excitement of a big sports event is hard to ignore. Colorful flyers with fun details grab attention and build interest. Our flyers do the same, promoting your events and special offers while making sure your message connects with the community and creates excitement.",
      cardImage: brandpromotiondesign_flyers,
    },
    {
      cardTitle: "Standee Design",
      cardDescription:
        "Walking through a busy shopping mall, a standee for an upcoming concert catches your eye. Its bold design makes you stop, and for 10 seconds, you forget everything around you, captivated by its message. That’s the power of great visuals! Our standee designs aim to create that same effect, capturing attention and encouraging engagement.",
      cardImage: brandpromotiondesign_standeedesign,
    },
    {
      cardTitle: "Magazine Cover Design",
      cardDescription:
        "Driving down a busy highway, you spot a billboard that instantly grabs your attention. It conveys a clear message and makes you want to know more. Our billboard designs strive to have that same impact, offering maximum visibility and ensuring your brand stands out to everyone who passes by.",
      cardImage: brandpromotiondesign_magazinecoverletter,
    },
    {
      cardTitle: "Newspaper Ads",
      cardDescription:
        "Remember the local newspaper that featured an ad that caught your attention? It was informative and inviting, making you feel connected. Our newspaper ads serve that purpose, reaching a wide audience and ensuring your brand is recognized and trusted in the community, ultimately driving engagement and growth.",
      cardImage: brandpromotiondesign_newspaperads,
    },
    {
      cardTitle: "Billboard Design",
      cardDescription:
        "Driving down a busy highway, you spot a billboard that instantly grabs your attention. It conveys a clear message and makes you want to know more. Our billboard designs strive to have that same impact, offering maximum visibility and ensuring your brand stands out to everyone who passes by.",
      cardImage: brandpromotiondesign_billboarddesign,
    }
 
    
  ];
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
            className={` bg-white rounded-3xl gap-5 items-center my-8 px-10 py-10 flex ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            } h-[90vh] justify-between`}
          >
            <div className="basis-[40%] flex flex-col justify-center gap-10 items-start">
              <p className="text-5xl font-opensans font-semibold text-black ">
                {item.cardTitle}
              </p>
              <p className="text-xl font-poppins  text-gray-500">
                {item.cardDescription}
              </p>

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

export default BrandPromotionDesign_Main;
