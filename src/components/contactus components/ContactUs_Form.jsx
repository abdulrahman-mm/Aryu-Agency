import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin
// import im_interestedin from "../../assets/Video/im_interestedin.mp4";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const ContactUs_Form = () => {
  useEffect(() => {
    // ScrollTrigger Animations

    gsap.fromTo(
      ".heading",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".heading",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      ".contact-button",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-button",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      ".form-input",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".form-input",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 2,
        },
      }
    );

   
  }, []);

  return (
    <section className="relative min-h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover "
        src={'Video/im_interestedin.mp4'}
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
      ></video>

      <div className="relative text-white flex flex-col items-center justify-center px-5 py-5 sm:px-10 sm:py-10 md:px-20 md:py-20">
        <p className="font-lato text-3xl md:text-5xl font-semibold text-center heading">
          I'm Interested in:
        </p>

        <div className="flex flex-wrap gap-5 mt-8 w-full max-w-4xl">
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
            <button
              key={index}
              className="border w-fit backdrop-blur-lg bg-black/70 text-lg md:text-xl rounded-full px-5 py-3 text-center contact-button"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="border backdrop-blur-xl bg-black/70 border-white px-3 md:px-16 py-10 mt-14 rounded-3xl max-w-5xl w-full">
          <p className="font-lato text-2xl md:text-4xl">My contact info:</p>

          <div className="flex flex-col gap-10 mt-8">
            <div className="flex flex-col md:flex-row gap-10">
              <input
                type="text"
                placeholder="First Name"
                className="outline-none border-b border-gray-500 placeholder-white text-lg md:text-xl bg-transparent w-full md:w-96 form-input"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="outline-none border-b border-gray-500 placeholder-white text-lg md:text-xl bg-transparent w-full md:w-96 form-input"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-10">
              <input
                type="text"
                placeholder="Your Email"
                className="outline-none border-b border-gray-500 placeholder-white text-lg md:text-xl bg-transparent w-full md:w-96 form-input"
              />
              <input
                type="text"
                placeholder="Phone (optional)"
                className="outline-none border-b border-gray-500 placeholder-white text-lg md:text-xl bg-transparent w-full md:w-96 form-input"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-10">
              <input
                type="text"
                placeholder="Company (optional)"
                className="outline-none border-b border-gray-500 placeholder-white text-lg md:text-xl bg-transparent w-full md:w-96 form-input"
              />
              <input
                type="text"
                placeholder="Website URL (if available)"
                className="outline-none border-b border-gray-500 placeholder-white text-lg md:text-xl bg-transparent w-full md:w-96 form-input"
              />
            </div>

            <input
              type="text"
              placeholder="Interested in"
              className="outline-none border-b border-gray-500 placeholder-white text-lg md:text-xl bg-transparent w-full form-input"
            />

            <textarea
              type="text"
              placeholder="Please share a brief overview of how we can help you?"
              className="outline-none border-b border-gray-500 placeholder-white text-lg md:text-xl bg-transparent w-full form-input"
              rows={2}
            />

            <div className="flex flex-col form-input flex-wrap md:flex-row gap-5 items-center">
              <div className="relative max-md:hidden flex gap-8 lg:gap-12 border text-white px-5 py-3 bg-white/10 border-white/10 rounded-full overflow-hidden transition-transform duration-500 shadow-lg">
                <span className="absolute inset-0  -left-full w-20 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-shine"></span>

                <label
                  htmlFor="upload"
                  className=" px-8 text-sm md:text-lg"
                >
                  Upload a file
                </label>
              </div>
              <p className="text-sm md:text-base text-center md:text-left">
                Accepted file types: pdf, doc, docx, ppt, pptx, Max. file size:
                10 MB.
              </p>
            </div>

            <input type="file" name="" id="upload" className="hidden" />
          </div>

          <button className="text-black mt-10 font-semibold text-base md:text-lg bg-white px-5 py-3 rounded-xl w-full md:w-auto ">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs_Form;
