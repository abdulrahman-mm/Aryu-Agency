import From_Concepts_To_Conversions_Hero_img1 from "../../assets/From_Concepts_To_Conversions_Hero_img1.png";
import From_Concepts_To_Conversions_Hero_img2 from "../../assets/From_Concepts_To_Conversions_Hero_img2.png";
import From_Concepts_To_Conversions_Hero_img3 from "../../assets/From_Concepts_To_Conversions_Hero_img3.png";

const Digital_Marketing_Hero = () => {
  return (
    <section className="px-20 mt-20 pb-20">
      <div className="flex items-center justify-between">
        <div className="flex flex-col basis-[40%]">
          <p style={{ letterSpacing: "12px" }} className="text-purple-900">
            DIGITAL MARKETING
          </p>
          <p className="text-7xl">
            <span>From</span>{" "}
            <span className="font-semibold">concepts to conversions</span>
          </p>
        </div>

        <div className="w-72 h-72 bg-gray-300 rounded-full"></div>
      </div>

      <div className="flex justify-center items-center flex-wrap   my-16">
        {[
          "Graphic Design",
          "Content Creation",
          "Web Design",
          "Video Production",
          "Advertising Campaigns",
          "Market Research",
          "Motion Graphics",
        ].map((text, index) => (
          <p
            key={index}
            className="px-4 py-4 hover:text-violet-800 hover:border-violet-800 cursor-pointer text-gray-600 border border-gray-300 rounded-3xl text-xl"
          >
            {text}
          </p>
        ))}
      </div>

      <div className="flex gap-5">
        <div>
          <img src={From_Concepts_To_Conversions_Hero_img3} alt="" />
        </div>

        <div className="flex flex-col gap-5">
          <img src={From_Concepts_To_Conversions_Hero_img1} alt="" />

          <div className="flex gap-5">
            <img src={From_Concepts_To_Conversions_Hero_img2} alt="" />
            <img src={From_Concepts_To_Conversions_Hero_img2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Digital_Marketing_Hero;
