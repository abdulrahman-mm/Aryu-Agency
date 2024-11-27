import React from "react";
import home_hero_image1 from "../../assets/home_hero_image1.png";
import home_hero_image2 from "../../assets/home_hero_image2.png";
import home_hero_image3 from "../../assets/home_hero_image3.png";
import home_herovideo1 from "../../assets/Video/home_herovideo1.mp4";
import glowingball from "../../assets/Video/glowingball.mp4";
import The_Art_of_Bold_Disruption_video from "../../assets/Video/The_Art_of_Bold_Disruption_video.mp4";
import home_how_can_i_assist_you_video from "../../assets/Video/home_how_can_i_assist_you_video.mp4";
import { useEffect } from "react";
import gsap from "gsap";

function Home_Hero() {
  useEffect(() => {
    // Create the heartbeat animation
    gsap.to("#heart_beat", {
      scale: 1.2, // Increase the size
      duration: 1, // Animation duration
      yoyo: true, // Reverse the animation
      repeat: -1, // Loop infinitely
      ease: "power1.inOut", // Smooth easing
    });
  }, []);
  return (
    <div className="flex flex-col gap-8 pt-10 ">
      <div className="flex gap-20 items-center justify-between">
        <video
          className="h-40 w-40 rounded-3xl object-cover"
          src={glowingball}
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
        ></video>

        <p className="text-7xl text-white">
          Porttitor vitae venenatis quis lectus massa id pretium
        </p>
      </div>

      <div className="flex items-center justify-around">
        <div className="flex flex-col gap-5 items-center">
          <div className="border-l-2 border-white/40 h-52"></div>
          <div className="flex flex-col text-white justify-center">
            <p>Innovate/</p>
            <p className="font-semibold">/Inspire</p>
            <p>Impact/</p>
          </div>
        </div>

        <video
          className="h-64 w-96 rounded-3xl object-cover"
          src={home_herovideo1}
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
        ></video>

        <div className="flex flex-col items-end justify-center basis-[50%] text-white gap-8">
          <div className="flex gap-5 items-center">
            <div id="heart_beat" className="w-14 h-14 rounded-full bg-white/40">
              <div className="w-8 h-8 rounded-full mx-auto my-auto mt-3 bg-white"></div>
            </div>

            <div className="flex flex-col">
              <p className="text-3xl font-bold">10 K+</p>
              <p>Happy Client</p>
            </div>
          </div>

          <p className="ps-56">
            Risus augue est nisl pharetra neque tortor. Consectetur iaculis
            eleifend at dolor morbi gravida justo amet dictum. Id amet
            scelerisque dolor.
          </p>

          <div className="flex gap-5">
            <video
              className="w-64 h-36 rounded-xl object-cover"
              src={The_Art_of_Bold_Disruption_video}
              autoPlay
              loop
              muted
              playsInline
            ></video>

            <video
              className="w-64 h-36 rounded-xl object-cover"
              src={home_how_can_i_assist_you_video}
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_Hero;
