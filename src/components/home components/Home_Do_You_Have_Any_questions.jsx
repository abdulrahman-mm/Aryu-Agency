import React from 'react'
import Home_Insights_Updates_video from "../../assets/Video/Home_Insights_Updates_video.mp4";


const Home_Do_You_Have_Any_questions = () => {
  return (
    <div className=''>
     <div className="relative mx-auto  h-[300px]">
        <video
          src={Home_Insights_Updates_video}
          className="absolute w-full h-full object-cover "
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="absolute w-full h-full flex justify-between px-10 py-10">
          <div className="flex items-start gap-3 justify-center text-white flex-col">
            <p
              style={{ "text-shadow": "3px 2px 8px rgba(0, 0, 0, 0.5)" }}
              className="text-4xl font-semibold"
            >
              Do you have any questions?
            </p>
            <p
              style={{ "text-shadow": "3px 2px 8px rgba(0, 0, 0, 0.5)" }}
              className="text-lg"
            >
              Feel free to send us your questions or request a free
              consultation.
            </p>
          </div>

          <div className="flex items-center justify-center gap-5 ">
            <input
              type="text"
              name=""
              id=""
              className="h-fit bg-transparent text-white placeholder-white outline-none border-2 p-3 rounded-xl border-white/80"
              placeholder="Enter Your Email"
            />

            <button className="bg-white px-5 py-3 text-black rounded font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home_Do_You_Have_Any_questions