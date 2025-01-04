import React from "react";
import google_earth from "../../assets/Video/google_earth.mp4";

const ContactUs_Ourofice = () => {
  return (
    <div >
      <p className="font-bold text-7xl font-lato mt-10 px-20">
        Our <span className="font-normal">Office</span>
      </p>

      <video
        className="rounded-[60px] h-96 w-[90vw] object-cover mt-16 mb-10 mx-auto"
        src={google_earth}
        playsInline
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default ContactUs_Ourofice;
