// import sample11111 from "../../assets/sample11111.svg";
// import videoproduction_socialmediavideo from "../../assets/videoproduction_socialmediavideo.svg";
// import videoproduction_adfilmshoot from "../../assets/videoproduction_adfilmshoot.svg";
// import videoproduction_corporatelife from "../../assets/videoproduction_corporatelife.svg";
// import videoproduction_motiongraphics from "../../assets/videoproduction_motiongraphics.svg";
// import videoproduction_tvcommercial from "../../assets/videoproduction_tvcommercial.svg";
// import videoproduction_productphotoshoot from "../../assets/videoproduction_productphotoshoot.svg";

import videoproduction_adfileshoot from "../../assets/Video/videoproduction_adfileshoot.mp4";
import videoproduction_corporatelife from "../../assets/Video/videoproduction_corporatelife.mp4";
import videoproduction_productphotoshoot from "../../assets/Video/videoproduction_productphotoshoot.mp4";
import videoproduction_brandedcontent from "../../assets/Video/videoproduction_brandedcontent.mp4";
import videoproduction_editing from "../../assets/Video/videoproduction_editing.mp4";
import videoproduction_eventvideo from "../../assets/Video/videoproduction_eventvideo.mp4";
import videoproduction_socialmediavideo from "../../assets/Video/videoproduction_socialmediavideo.gif";
import videoproduction_motiongraphics from "../../assets/Video/videoproduction_motiongraphics.gif";
import videoproduction_tvcommercials from "../../assets/Video/videoproduction_tvcommercials.gif";
import videoproduction_typographyvideo from "../../assets/Video/videoproduction_typographyvideo.mp4";

const VideoProduction_Main = () => {
  let cardData = [
    {
      cardTitle: "Social Media Video",
      cardDescription:
        "Great content spreads quickly on social media, and delivering the right type is crucial for success. Our Social Media video service, therefore, enhances your brand with engaging, audience-focused content. This approach elevates your marketing efforts, ensuring your message resonates effectively with your audience.",
      cardImage: videoproduction_socialmediavideo,
    },
    {
      cardTitle: "Corporate Video",
      cardDescription:
        "If a tech company shared inspiring stories of employees working on new ideas and helping the community, it would create stronger connections with clients and employees. Moreover, our Corporate Videos service captures your brand's essence by highlighting your mission and values.",
      cardImage: videoproduction_corporatelife,
    },
    {
      cardTitle: "Ad Film Shoot",
      cardDescription:
        "An eco-friendly brand's ad followed a customer’s journey to sustainability, showcasing positive environmental impact. As a result, captivating visuals inspired eco-conscious choices and support. Our Ad Film Shoot service creates visually stunning, emotionally engaging ads that effectively elevate your brand's message.",
      cardImage: videoproduction_adfileshoot,
    },
    {
      cardTitle: "Motion Graphics",
      cardDescription:
        "Motion graphics are animated visual designs that combine text, imagery, and graphics to convey ideas dynamically. They simplify complex information and enhance storytelling, making them perfect for explainer videos, advertisements, and digital content that engage and captivate audiences.",
      cardImage: videoproduction_motiongraphics,
    },
    {
      cardTitle: "Typography Videos",
      cardDescription:
        "A non-profit used a typography video blending animated text and visuals to share impactful stories, raising awareness and inspiring support. Our Video Production expertise specializes in creating engaging typography videos that elevate your message and drive meaningful audience engagement.",
      cardImage: videoproduction_typographyvideo,
    },

    {
      cardTitle: "Product Photoshoot",
      cardDescription:
        "A shop owner transformed their business with a photo shoot showcasing handmade items. As a result, the stunning images attracted customers, turning the shop into a creative hub. Additionally, we provide professional product photography to beautifully highlight your items and boost engagement.",
      cardImage: videoproduction_productphotoshoot,
    },
    {
      cardTitle: "Event Video",
      cardDescription:
        "Capture the essence of special moments with our Event Video Services. Whether it's an inspiring corporate conference or a memorable team celebration, we create high-quality videos that preserve every detail—from key presentations to engaging interactions—for lasting memories.",
      cardImage: videoproduction_eventvideo,
    },
    {
      cardTitle: "TV Commercial",
      cardDescription:
        "To promote a great product, reaching as many people as possible is key. TV Commercial Services are perfect since everyone has a TV. We craft unique stories that connect with viewers, using creative ideas and smart strategies to make impactful commercials.",
      cardImage: videoproduction_tvcommercials,
    },
    {
      cardTitle: "Branded Content",
      cardDescription:
        "Branded content tells a story that not only connects with the audience but also promotes a brand. It focuses on entertainment or information, building awareness and loyalty. We offer this service to enhance your brand’s narrative, driving meaningful engagement with consumers.",
      // cardImage: sample11111,
      cardImage: videoproduction_brandedcontent,
    },
    {
      cardTitle: "Editing",
      cardDescription:
        "Editing brings footage together, merging elements seamlessly to create something vibrant and alive. In addition, like two cells forming a new soul, our editing breathes life into your content, delivering a polished and impactful final product that captivates audiences.",
      // cardImage: sample11111,
      cardImage: videoproduction_editing,
    },
  ];

  return (
    <section
      id="video-production-main"
      className="mt-32 px-5 py-5 md:px-14 md:py-14  lg:px-20 lg:py-20"
    >
      <div className="flex items-center gap-5 flex-wrap justify-between">
        <p className="text-3xl md:text-6xl  md:basis-[35%] font-sans font-semibold">
          The Art of Bold Disruption
        </p>

        <p className="md:basis-[32%]  text-lg">
          If, You may explain something important, but over time, it can be
          forgotten. However, with a powerful video featuring perfect visuals
          and music, your message stays with them for life. Bring your ideas to
          life with our Video Production services!
        </p>
      </div>

      {/* <div className=" flex flex-col justify-center items-center gap-10 mt-16 lg:mt-36">
        {cardData.map((item, index) => (
          <div
            className={`bg-white rounded-3xl gap-5 md:gap-10  flex flex-col-reverse md:flex-row ${
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
            </div>

          


            <video
              src={item.cardImage}
              className={` basis-[40%] h-[500px] w-[600px] object-cover  ${index % 2 === 0 ? "rounded-tl-[150px]" : "rounded-br-[150px]"}`}
              autoPlay
              muted
              loop
            ></video>
          </div>
        ))}
      </div> */}

      <div className="flex flex-col justify-center items-center gap-10 mt-16 lg:mt-36 ">
        {cardData.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-3xl gap-5 md:gap-10 flex flex-col-reverse md:flex-row ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            } h-auto lg:h-[90vh] items-center w-full`}
          >
            <div className="basis-full md:basis-1/2 flex flex-col gap-3 md:gap-8 items-start md:text-left ">
              <p className="text-lg md:text-2xl lg:text-4xl font-opensans font-semibold text-black">
                {item.cardTitle}
              </p>
              <p className="text-sm md:text-lg font-poppins text-gray-500">
                {item.cardDescription}
              </p>
            </div>

            <div className="basis-full md:basis-1/2 flex justify-center">
              {[
                "Social Media Video",
                "Motion Graphics",
                "TV Commercial",
              ].includes(item.cardTitle) ? (
                <img
                  src={item.cardImage}
                  alt={item.cardTitle || "Media"}
                  className={`h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full object-cover ${
                    index % 2 === 0
                      ? "rounded-tl-[150px]"
                      : "rounded-br-[150px]"
                  }`}
                />
              ) : (
                <video
                  src={item.cardImage}
                  className={`h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full object-cover ${
                    index % 2 === 0
                      ? "rounded-tl-[150px]"
                      : "rounded-br-[150px]"
                  }`}
                  autoPlay
                  muted
                  loop
                ></video>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoProduction_Main;
