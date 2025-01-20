import React, { Suspense, useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import layer from "../assets/layer_1.svg";
import { useLocation } from "react-router-dom";

import { lazy } from "react";
// Lazy-loaded components
const Home_Header = lazy(() => import("../components/Home_Header"));
const Home_Hero = lazy(() => import("../components/home components/Home_Hero"));
const Home_The_Art_Of_Bold_Disruption = lazy(
  () => import("../components/home components/Home_The_Art_Of_Bold_Disruption")
);
const Home_How_Can_I_Assist_You = lazy(
  () => import("../components/home components/Home_How_Can_I_Assist_You")
);
const Home_Our_Services = lazy(
  () => import("../components/home components/Home_Our_Services")
);
const Home_Insights_Updates = lazy(
  () => import("../components/home components/Home_Insights_Updates")
);
const Home_BeginYourCreativeJourney = lazy(
  () => import("../components/home components/Home_BeginYourCreativeJourney")
);
const Footer = lazy(() => import("../components/Footer"));

function Home() {
  const [loading, setLoading] = useState(true);
  const ourServicesRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const scrollToElement = () => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          setTimeout(scrollToElement, 100);
        }
      };
      scrollToElement();
    }
  }, [location.state]);

  useEffect(() => {
    // GSAP animation for preloader
    const timeline = gsap.timeline({
      onComplete: () => setLoading(false),
    });

    // Animating the logo and text
    timeline
      .fromTo(
        ".preloader-logo",
        { opacity: 0, scale: 1.5 },
        { opacity: 1, scale: 2, duration: 1, ease: "back.out(1.7)" }
      )
      .to(".preloader-logo", {
        scale: 20,
        opacity: 0,
        duration: 1,
        ease: "power4.in",
      })

      // Zoom-In and Rotate Animation
      // timeline
      //   .fromTo(
      //     ".preloader-logo",
      //     { opacity: 0, scale: 0, rotation: 360 },
      //     { opacity: 1, scale: 1.5, rotation: 0, duration: 2, ease: "power3.out" }
      //   )
      //   .to(".preloader-logo", {
      //     scale: 30,
      //     opacity: 0,
      //     rotation: 720,
      //     duration: 3,
      //     ease: "power4.in",
      //   })

      .fromTo(
        ".loading-text",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
      )
      .to(".loading-text", {
        opacity: 0,
        y: -100,
        duration: 1.5,
        delay: 1,
        ease: "power3.in",
      });

    // Adding particle-like background animation
    const particleAnimation = gsap.timeline({});
    particleAnimation

      .to(".particle", {
        y: "-100vh",
        opacity: 0,
        stagger: { amount: 2 },
        duration: 2.5,
        ease: "power1.in",
        delay: 2.8,
      })
      .set(".particle", { y: "100vh", opacity: 1 });

    return () => {
      timeline.kill();
      particleAnimation.kill();
    };
  }, []);

  // useEffect(() => {
  //   const timeline = gsap.timeline({ onComplete: () => setLoading(false) });

  //   // Zoom-In and Rotate Animation
  //   timeline
  //     .fromTo(
  //       ".preloader-logo",
  //       { opacity: 0, scale: 0, rotation: 360 },
  //       { opacity: 1, scale: 1.5, rotation: 0, duration: 2, ease: "power3.out" }
  //     )
  //     .to(".preloader-logo", {
  //       scale: 30,
  //       opacity: 0,
  //       rotation: 720,
  //       duration: 3,
  //       ease: "power4.in",
  //     })

  //     .fromTo(
  //       ".loading-text",
  //       { opacity: 0, y: 50 },
  //       { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: "power3.out" }
  //     )
  //     .to(".loading-text", {
  //       opacity: 0,
  //       y: -100,
  //       duration: 2,
  //       delay: 1,
  //       ease: "power3.in",
  //     });
  //   return () => {
  //     timeline.kill();
  //   };
  // }, []);

  const handleOurServicesScroll = () => {
    ourServicesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
       {loading && (
        <section className="relative overflow-hidden h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500">
          <div className="absolute inset-0">
            {[...Array(80)].map((_, index) => (
              <div
                key={index}
                className="particle w-2 h-2 rounded-full bg-white absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              ></div>
            ))}
          </div>

          <div className="preloader absolute w-screen flex flex-col justify-center items-center h-screen overflow-hidden z-10">
            <img
              className="preloader-logo z-20 object-cover "
              src={layer}
              alt="Aryu Logo"
            />
            <p className="loading-text font-poppins mt-5 px-5 text-white text-4xl md:text-6xl lg:text-8xl font-semibold  tracking-widest">
              Bringing Ideas to Life...
            </p>
          </div>
        </section>
      )} 

      {!loading && (
        <Suspense
          fallback={
            <div className="fixed inset-0 flex w-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 ">
              <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          }
        >
          <section className="relative overflow-hidden h-screen">
            <video
              src={"./Video/home_hero_background.mp4"}
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
              type="video/mp4"
              className="absolute inset-0 w-screen h-full object-cover"
            ></video>

            <div className="relative h-full">
              <Home_Header handleOurServicesScroll={handleOurServicesScroll} />
              <Home_Hero />
            </div>
          </section>

          <Home_The_Art_Of_Bold_Disruption />
          <Home_BeginYourCreativeJourney />
          <Home_How_Can_I_Assist_You />
          <Home_Our_Services ourServicesRef={ourServicesRef} />
          <Home_Insights_Updates />
          <Footer />
        </Suspense>
      )}
    </div>
  );
}

export default Home;

{
  /* {loading && (
        <div className="preloader relative flex flex-col justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
          <img
            className="preloader-logo absolute z-10 object-cover w-24 h-24"
            src={layer}
            alt="Aryu Logo"
          />
          <p className="loading-text text-white text-lg font-semibold mt-8">
            Bringing Ideas to Life...
          </p>
        </div>
      )} */
}

// useEffect(() => {
//   // GSAP animation for preloader
//   const timeline = gsap.timeline({
//     onComplete: () => setLoading(false),
//   });

//   // Animating the logo and text
//   timeline
//     .fromTo(
//       ".preloader-logo",
//       { opacity: 0, scale: 0.5 },
//       { opacity: 1, scale: 1.5, duration: 1, ease: "back.out(1.7)" }
//     )
//     .to(".preloader-logo", {
//       scale: 20,
//       opacity: 0,
//       duration: 2,
//       ease: "power4.in",
//     })
//     .fromTo(
//       ".loading-text",
//       { opacity: 0 },
//       { opacity: 1, duration: 1, delay: 1, ease: "power2.out" }
//     )
//     .to(".loading-text", {
//       opacity: 0,
//       duration: 1,
//       delay: 1.5,
//       ease: "power2.in",
//     });

//   return () => timeline.kill();
// }, []);
