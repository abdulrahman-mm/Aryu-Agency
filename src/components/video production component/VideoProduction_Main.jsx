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

const VideoProduction_Main = () => {
  let cardData = [
    {
      cardTitle: "Social Media Video",
      cardDescription:
        "Great content spreads at rocket speed on social media—that’s the true power of this platform! Therefore, when delivering content, it's essential to focus on the right type to elevate your social media marketing efforts. Our Social Media video service enhances your brand with engaging, audience-tailored content.",
      // cardImage: videoproduction_socialmediavideo,
      cardImage: videoproduction_corporatelife,
    },
    {
      cardTitle: "Corporate Video",
      cardDescription:
        "If , A tech company shared inspiring stories of employees working on new ideas and helping the community. This created stronger connections with clients and employees. Our Corporate Videos service captures your brand's essence by highlighting your mission and values.",
      cardImage: videoproduction_corporatelife,
    },
    {
      cardTitle: "Ad Film Shoot",
      cardDescription:
        "if , An eco-friendly brand wanted to highlight their impact, so we created an ad that followed a customer’s journey from purchasing a sustainable product to witnessing its positive effect on the environment. With captivating visuals, the message deeply connected with viewers, inspiring them to make eco-conscious choices and support the brand. Our Ad Film Shoot service delivers visually stunning and emotionally compelling advertisements that elevate your brand.",
      cardImage: videoproduction_adfileshoot,
    },
    {
      cardTitle: "Motion Graphics",
      cardDescription:
        "Motion graphics are animated visual designs that combine text, imagery, and graphics to convey ideas dynamically. They simplify complex information and enhance storytelling, making them perfect for explainer videos, advertisements, and digital content that engage and captivate audiences.",
      // cardImage: videoproduction_motiongraphics,
      cardImage: videoproduction_corporatelife,
    },
    {
      cardTitle: "Typography Videos",
      cardDescription:
        "If, a nonprofit organization showcased its mission through a typography video, blending animated text with visuals to highlight heartfelt stories from beneficiaries. This engaging format not only raised awareness but also motivated viewers to support their cause. We deliver top-notch typography videos that elevate your message.",
      // cardImage: sample11111,
      cardImage: videoproduction_corporatelife,
    },

    {
      cardTitle: "Product Photoshoot",
      cardDescription:
        "In a charming shop, the owner struggled with dull product photos. Determined to improve, they organized a photoshoot to showcase their handmade items. The striking images attracted customers, turning the shop into a vibrant hub of creativity. We provide this service to help showcase your products beautifully!",
      cardImage: videoproduction_productphotoshoot,
    },
    {
      cardTitle: "Event Video",
      cardDescription:
        "Capture the essence of special moments with our Event Video Services. Imagine a corporate conference: inspiring speeches, valuable networking, and memorable team celebrations. We create high-quality videos that effectively showcase your events, preserving every detail—from key presentations to engaging interactions—for lasting memories.",
      // cardImage: sample11111,
      cardImage: videoproduction_corporatelife,
    },
    {
      cardTitle: "TV Commercial ",
      cardDescription:
        "To promote a great product, reaching as many people as possible is key. TV Commercial Services are ideal because everyone has a TV. We create unique stories that connect with viewers using creative ideas and smart strategies to make powerful commercials.",
      // cardImage: videoproduction_tvcommercial,
      cardImage: videoproduction_corporatelife,
    },
    {
      cardTitle: "Branded Content  ",
      cardDescription:
        "Branded content tells a story that connects with the audience while promoting a brand. It focuses on entertainment or information, building awareness and loyalty through meaningful engagement with consumers. We provide this service to enhance your brand’s narrative.",
      // cardImage: sample11111,
      cardImage: videoproduction_corporatelife,
    },
    {
      cardTitle: "Editing   ",
      cardDescription:
        "Editing is like that—when we do editing, it’s as if all the footage comes together like two human cells merging to create a new soul, breathing life and vibrancy into the final product.",
      // cardImage: sample11111,
      cardImage: videoproduction_corporatelife,
    },
  ];

  return (
    <section id="video-production-main" className="mt-32 px-20">
      <div className="flex items-center justify-between">
        <p className="text-6xl basis-[35%] font-semibold">
          The Art of Bold Disruption
        </p>

        <p className="basis-[32%]  text-lg">
          If, You may explain something important, but over time, it can be
          forgotten. However, with a powerful video featuring perfect visuals
          and music, your message stays with them for life. Bring your ideas to
          life with our Video Production services!
        </p>
      </div>

      <div className=" flex flex-col justify-center items-center gap-5 mt-36">
        {cardData.map((item, index) => (
          <div
            className={`animated-card bg-white rounded-3xl my-8 px-10 py-10 flex ${index % 2 === 0 ? "flex-row-reverse" : ""} justify-between`}
          >
            <div className="basis-[40%] flex flex-col justify-center gap-10 items-start">
              <p className="text-5xl font-opensans font-semibold text-black ">
                {item.cardTitle}
              </p>
              <p className="text-xl font-poppins text-gray-500">
                {item.cardDescription}
              </p>
            </div>

            {/* <img
              src={item.cardImage}
              alt=""
              className="basis-[50%] object-cover"
            /> */}
            <video
              src={item.cardImage}
              className={`basis-[40%] h-[500px] w-[600px] object-cover  ${index % 2 === 0 ? "rounded-tl-[150px]" : "rounded-br-[150px]"}`}
              autoPlay
              muted
              loop
            ></video>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoProduction_Main;
