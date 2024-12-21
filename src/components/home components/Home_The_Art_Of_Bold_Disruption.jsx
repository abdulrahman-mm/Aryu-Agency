import React from "react";
import The_Art_of_Bold_Disruption_image2 from "../../assets/The_Art_of_Bold_Disruption_image2.png";
import The_Art_of_Bold_Disruption_image1 from "../../assets/The_Art_of_Bold_Disruption_image1.png";
import glowingball from "../../assets/Video/glowingball.mp4";
import The_Art_of_Bold_Disruption_video from "../../assets/Video/The_Art_of_Bold_Disruption_video.mp4";
import home_herovideo1 from "../../assets/Video/home_herovideo1.mp4";
import biokosmetik from '../../assets/biokosmetik.svg'
import urban from '../../assets/urban.svg'
// import gadgetmart from '../../assets/gadgetmart.svg'
import gadgetmart from '../../assets/gadgetmart.png'
import delta from '../../assets/delta.svg'
import conversion from '../../assets/conversion.svg'
import skincare from '../../assets/skincare-usa.svg'

function Home_The_Art_Of_Bold_Disruption() {

    const logos = [biokosmetik,urban,gadgetmart,delta,conversion,skincare] // Replace with actual image paths
  
  return (
    <section className="  py-20">
      <div className="flex flex-col  gap-16">
        <div className="flex px-32 items-center justify-between">
          <p className="text-6xl basis-[35%] ">The Art of Bold Disruption</p>

          <p className="basis-[23%] text-gray-600 text-lg">
            Where creativity and ambition collide, we sculpt your brand into a
            masterpiece that dazzles and delivers on all fronts.
          </p>
        </div>

        <div className="flex px-32 items-center justify-start gap-16">
          <video
            className="h-60 basis-[50%] w-full rounded-3xl object-cover"
            src={home_herovideo1}
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

        <div className="overflow-hidden bg-[url('././assets/header_background.png')] bg-cover bg-center w-full flex h-full items-center">
          <div className="flex gap-36 px-20  animate-marquee whitespace-nowrap">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className=" object-contain  bg-no-repeat bg-center bg-fixed "
              />
            ))}
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className=" object-contain bg-no-repeat bg-center bg-fixed "
              />
            ))}
            
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home_The_Art_Of_Bold_Disruption;
