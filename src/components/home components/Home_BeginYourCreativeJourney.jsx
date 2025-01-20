import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useInView } from "react-intersection-observer";

const Home_BeginYourCreativeJourney = () => {
  const { ref, inView } = useInView({ threshold: 0 });

  let navigate = useNavigate();

  useEffect(() => {
    gsap.to("#creative-journey", {
      scale: 2,
      transformOrigin: "center center",
      scrollTrigger: {
        trigger: "#creative-journey",
        start: "top center",
        end: "bottom top",
        scrub: 4,
        onUpdate: (self) => {
          const scale = gsap.getProperty("#creative-journey", "scale");
          if (scale < 1) {
            gsap.set("#creative-journey", { scale: 1 });
          } else if (scale > 1.5) {
            gsap.set("#creative-journey", { scale: 1.5 });
          }
        },
      },
    });
  }, []);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#text-div p",
        start: "bottom bottom", // Starts animation when the video div is 80% in view
        end: "bottom 20%", // Ends animation when the video div is 20% in view
      },
    });

    timeline
      .fromTo(
        "#text-div p",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
        }
      )
      .fromTo(
        "#text-div .flex",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
  }, []);

  const navigateToContactPage = () => {
    navigate("/contactus");

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <div         ref={ref}
    className="overflow-hidden my-10">
      <div
        id="creative-journey"
        className="relative h-96 mt-10 mb-10 w-full sm:w-3/4 lg:w-[70vw] mx-auto rounded-3xl object-cover  "
      >
        <div className="absolute -z-40 bg-black/50 w-full h-full rounded-3xl"></div>

        {inView && (
          <video
            src={"./Video/home_The_Art_of_Bold_Disruption_video_compressed.mp4"}
            className="absolute w-full -z-50 h-full object-cover rounded-3xl"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        )}

        <div
          id="text-div"
          className="absolute text-white w-full h-full flex flex-col items-center justify-center"
        >
          <p className="md:text-4xl lg:text-5xl   font-bold">BEGIN YOUR</p>
          <p className="md:text-4xl lg:text-5xl font-extrabold font-pinyon ">
            Creative
          </p>
          <p className="md:text-4xl lg:text-5xl font-bold ">JOURNEY NOW</p>

          <div className="flex items-center gap-5 mt-10">
            <div
              onClick={navigateToContactPage}
              className="cursor-pointer flex items-center gap-1 bg-white px-3 py-1 rounded-full"
            >
              <p className="text-black text-xs">START PROJECT</p>
              <IoIosArrowDroprightCircle className="text-black text-1xl" />
            </div>
            <p
              onClick={navigateToContactPage}
              className="hover:underline text-xs underline-offset-4 cursor-pointer "
            >
              LEARN MORE ABOUT US
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_BeginYourCreativeJourney;
