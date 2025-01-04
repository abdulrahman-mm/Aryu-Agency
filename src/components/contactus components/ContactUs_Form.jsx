import React from "react";
import im_interestedin from "../../assets/Video/im_interestedin.mp4";

const ContactUs_Form = () => {
  return (
    <section className="relative min-h-screen">
      <video
        className="absolute inset-0 w-screen h-full object-cover "
        src={im_interestedin}
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
      ></video>

      <div className="relative text-white flex flex-col items-center justify-center  pt-8 pb-20">
        <p className="font-lato text-5xl font-semibold">I'm Interested in:</p>

        <div className="flex flex-wrap gap-8 mt-8 mx-36">
          {[
            "A new website",
            "Branding",
            "E-Commerce",
            "Development",
            "UI/UX Design",
            "SEO",
            "App from Scratch",
            "On-going Support",
          ].map((item, index) => (
            <button className="border text-xl rounded-full px-5 py-3">
              {item}
            </button>
          ))}
        </div>

        <div className="border bg-black/85 border-white px-16 py-10 mt-14 rounded-[30px]">
          <p className="font-lato text-4xl">My contact info:</p>

          <div className="flex flex-col gap-8 mt-8 ">
            <div className="flex gap-8">
              <input
                type="text"
                placeholder="First Name"
                className=" outline-none border-b border-gray-500 placeholder-white text-xl  bg-transparent w-96"
              />

              <input
                type="text"
                placeholder="Last Name"
                className=" outline-none border-b border-gray-500 placeholder-white text-xl bg-transparent w-96"
              />
            </div>

            <div className="flex gap-8">
              <input
                type="text"
                placeholder="Your Email"
                className=" outline-none border-b border-gray-500 placeholder-white  text-xl bg-transparent w-96"
              />

              <input
                type="text"
                placeholder="Phone (optional)"
                className=" outline-none border-b border-gray-500 placeholder-white  text-xl bg-transparent w-96"
              />
            </div>

            <div className="flex gap-8">
              <input
                type="text"
                placeholder="Company (optional)"
                className=" outline-none border-b border-gray-500 placeholder-white text-xl bg-transparent w-96"
              />

              <input
                type="text"
                placeholder="Website URL (if available)"
                className=" outline-none border-b border-gray-500 placeholder-white text-xl  bg-transparent w-96"
              />
            </div>

            <input
              type="text"
              placeholder="Interested in"
              className=" outline-none border-b border-gray-500 placeholder-white  text-xl   bg-transparent"
            />

            <input
              type="text"
              placeholder="Please share a brief overview of how we can help you?"
              className=" outline-none border-b border-gray-500 placeholder-white  text-xl   bg-transparent"
            />

            <div className="flex gap-8 items-center">
              <label htmlFor="upload" className="border rounded-full px-10 py-2 text-lg">Upload a file</label>
              <p>Accepted file types: pdf, doc, docx, ppt, pptx, Max. file size: 10 MB.</p>
            </div>

            <input type="file" name="" id="upload" className="hidden" />
          </div>

          <button className="text-black mt-20 font-semibold text-lg bg-white px-5 py-3 rounded-xl">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs_Form;
