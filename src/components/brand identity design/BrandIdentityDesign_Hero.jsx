import From_Concepts_To_Conversions_Hero_img1 from "../../assets/From_Concepts_To_Conversions_Hero_img1.png";
import From_Concepts_To_Conversions_Hero_img2 from "../../assets/From_Concepts_To_Conversions_Hero_img2.png";
import From_Concepts_To_Conversions_Hero_img3 from "../../assets/From_Concepts_To_Conversions_Hero_img3.png";
import video_2 from "../../assets/Video/video_2.mp4";
import video4 from "../../assets/Video/video4.mp4";
import video7 from "../../assets/Video/video7.mp4";
import video6 from "../../assets/Video/video6.mp4";

const BrandIdentityDesign_Hero = () => {
  return (
     <section className="px-5 py-5 sm:px-10 sm:py-10  md:px-20  md:py-20 ">
      <div className="flex items-center justify-between">
        <div className="flex flex-col basis-[40%]">
          <p style={{ letterSpacing: "12px" }} className="text-purple-900">
            CREATIVE DESIGN
          </p>
          <p className="text-7xl">
            <span>Brand</span>{" "}
            <span className="font-semibold text-purple-900">Identity Design</span>
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

         <div className="flex flex-col gap-5 md:flex-row">
                {/* Left Video Section */}
                <div className="flex flex-grow justify-center md:basis-1/5">
                  <video
                    src={video_2}
                    loop
                    autoPlay
                    muted
                    className="h-64 w-full rounded-3xl object-cover md:h-full"
                  ></video>
                </div>
        
                {/* Right Content Section */}
                <div className="flex flex-grow flex-col gap-5 md:basis-3/4">
                  {/* Main Top Video */}
                    <video
                      src={video4}
                      loop
                      autoPlay
                      muted
                      className="w-full flex-grow h-60 object-cover rounded-3xl shadow-lg "
                    ></video>
        
                  {/* Bottom Video Grid */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 ">
                    <video
                      src={video7}
                      loop
                      autoPlay
                      muted
                      className="w-full h-60 object-cover rounded-3xl shadow-lg"
                    ></video>
                    <video
                      src={video6}
                      loop
                      autoPlay
                      muted
                      className="w-full h-60 object-cover rounded-3xl shadow-lg"
                    ></video>
                  </div>
                </div>
              </div>
    </section>
  )
}

export default BrandIdentityDesign_Hero