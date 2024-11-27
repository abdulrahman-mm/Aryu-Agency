import React from "react";
import The_Art_of_Bold_Disruption_image2 from "../../assets/The_Art_of_Bold_Disruption_image2.png";
import The_Art_of_Bold_Disruption_image1 from "../../assets/The_Art_of_Bold_Disruption_image1.png";
import glowingball from "../../assets/Video/glowingball.mp4";
import The_Art_of_Bold_Disruption_video from "../../assets/Video/The_Art_of_Bold_Disruption_video.mp4";

function Home_The_Art_Of_Bold_Disruption() {
  return (
    <section className=" px-32 py-20">
      <div className="flex flex-col m-5 gap-16">
        <div className="flex items-center justify-between">
          <p className="text-6xl basis-[35%] ">The Art of Bold Disruption</p>

          <p className="basis-[23%] text-gray-600 text-lg">
            Where creativity and ambition collide, we sculpt your brand into a
            masterpiece that dazzles and delivers on all fronts.
          </p>
        </div>

        <div className="flex items-center justify-start gap-16">
         

          <video
                className="h-60 basis-[50%] w-full rounded-3xl object-cover"
                src={The_Art_of_Bold_Disruption_video}
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
              ></video>

          <div className="flex flex-col gap-8">
            <div className="flex items-center  gap-16">
              <div className="flex  flex-col  gap-3">
                <p className="text-4xl ">Crafting Ideas</p>
                <p className="text-gray-600">
                  We turn bold ideas into tangible outcomes.
                </p>
              </div>

              <video
                className="h-24 w-40 rounded-3xl object-contain"
                src={glowingball}
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
              ></video>
            </div>

            <div className="flex items-center gap-5">
              <video
                className="h-36 w-40 rounded-3xl object-contain"
                src={glowingball}
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
              ></video>

              <div className="flex basis-[48%] flex-col gap-3">
                <p className="text-4xl">Creative Potential</p>
                <p className="text-gray-600">
                  We unlock the full power of creativity to elevate your brand
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home_The_Art_Of_Bold_Disruption;
