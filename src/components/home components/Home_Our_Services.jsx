import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdArrowRoundForward } from "react-icons/io";
import our_services_image1 from "../../assets/our_services_image1.png";
import our_services_image2 from "../../assets/our_services_image2.png";
import home_our_services_video from "../../assets/Video/home_our_services_video.mp4";
import sample from "../../assets/Video/sample.mp4";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Home_Our_Services() {
  let navigate = useNavigate();

  useEffect(() => {
    const triggers = document.querySelectorAll(".service-item");

    triggers.forEach((trigger, index) => {
      const isLast = index === triggers.length - 1;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: trigger,
            start: "top top", // Trigger when the element's top hits the viewport top
            end: "+=600", // Adjust this value to match the desired pin duration in pixels
            scrub: 3, // Smooth scrubbing for the pin duration
            pin: !isLast, // Pin all but the last element

            markers: false, // Set true if you want to debug triggers
          },
        })
        .to(trigger, {
          opacity: 0, // Fade out the element
          y: 100, // Move element downward
          scale: 0.9, // Shrink the element's size while scrolling
          duration: 2,
        });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const triggers = document.querySelectorAll(".services");

    triggers.forEach((trigger, index) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: trigger,
            start: "top 50%", // Trigger when the element's top hits the viewport top
            end: "+=600", // Adjust this value to match the desired pin duration in pixels
            scrub: 3, // Smooth scrubbing for the pin duration
            pin: false, // Pin all but the last element
            markers: false, // Set true if you want to debug triggers
          },
        })
        .to(trigger, {
          opacity: 0, // Fade out the element
          y: 100, // Move element downward
          scale: 0.9, // Shrink the element's size while scrolling
          duration: 2,
        });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      "#video",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2, // Adjusted for a smoother transition
        ease: "back.in", // Smooth easing function
        scrollTrigger: {
          trigger: "#video", // Target the video element
          start: "top center", // Animation starts when the top of the video is 80% visible
          end: "top 90%", // Animation ends when the top of the video is 20% visible
          scrub: 2, // Smooth, responsive animation based on scroll
        },
      }
    );
  }, []);

  function onClickCard(title) {
    if (title === "Digital Marketing") {
      navigate("/digitalmarketing");
      window.scrollTo({
        top: document.body.scrollHeight, // Scroll to the bottom of the page
        behavior: "instant",
      });
    }
  }

  return (
    <section className="px-32 py-20 bg-gray-100 overflow-x-hidden">
      <div className="services flex items-center justify-between">
        <div className="flex flex-col text-7xl font-semibold">
          <p>OUR</p>
          <p className="ms-12">SERVICES</p>
        </div>

        <div className="h-24 w-24 relative rounded-full bg-gradient-to-b from-violet-800 to-violet-500">
          <GoArrowUpRight className="absolute w-full h-full p-3 text-white" />
        </div>
      </div>

      <div className="flex flex-col gap-14 mt-16">
        {[
          {
            title: "Creative Design",
            description:
              "Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.",
            image: our_services_image1,
            tags: [
              "Creative web design",
              "Web Development",
              "Copywriting",
              "E-Commerce",
              "Wordpress",
            ],
          },
          {
            title: "Digital Marketing",
            description:
              "Empowering your brand with strategies that deliver measurable growth and lasting impressions.",
            image: our_services_image2,
            tags: [
              "SEO Optimization",
              "Social Media Management",
              "Content Marketing",
              "Ad Campaigns",
              "Analytics",
            ],
          },
          {
            title: "Video Production",
            description:
              "Creating stunning visuals and compelling stories to elevate your brand presence.",
            image: our_services_image2,
            tags: [
              "Scriptwriting",
              "Videography",
              "Post-Production",
              "Animation",
              "Editing",
            ],
          },
        ].map((service, index) => (
          <div
            key={index}
            className="service-item h-[90vh]  flex justify-between gap-10 items-center bg-white px-14 py-5 rounded-3xl"
          >
            <div className="flex flex-col gap-10  basis-[55%] justify-between">
              <div className="flex flex-col text-6xl">
                {service.title.split(" ").map((word, i) => (
                  <p key={i}>{word}</p>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap">
                {service.tags.map((tag, i) => (
                  <p
                    key={i}
                    className="border-2 border-gray-800 rounded-full px-5 py-2 text-gray-600"
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <p className="text-gray-600">{service.description}</p>

              <p
                onClick={() => onClickCard(service.title)}
                className="border-2 cursor-pointer w-fit inline-block border-gray-800 rounded-full px-8 py-2 text-gray-600"
              >
                Find out more{" "}
                <IoMdArrowRoundForward className="inline-block " />
              </p>
            </div>

            <video
              className=" h-full rounded-tr-[200px]"
              src={sample}
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
        ))}
      </div>

      <div id="video" className="relative w-[80vw] h-[400px] mt-16 rounded-3xl">
        <video
          className="absolute object-cover w-full h-full rounded-3xl "
          src={home_our_services_video}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="absolute flex  w-full h-full px-10 py-10 items-center justify-between">
          <div className="flex flex-col ">
            <p
              style={{ "text-shadow": "3px 2px 8px rgba(0, 0, 0, 0.5)" }}
              className="text-8xl text-white font-semibold "
            >
              99%
            </p>
            <p
              style={{ "text-shadow": "3px 2px 8px rgba(0, 0, 0, 0.5)" }}
              className="text-3xl text-white"
            >
              Project Finished
            </p>
          </div>

          <p
            style={{ "text-shadow": "3px 2px 8px rgba(0, 0, 0, 0.8)" }}
            className="text-4xl basis-[50%] place-content-center text-end text-white"
          >
            Turning Sparks into Spectacles
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home_Our_Services;
