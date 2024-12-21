import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Home_Header from "../components/Home_Header";
import Home_Hero from "../components/home components/Home_Hero";
import Home_The_Art_Of_Bold_Disruption from "../components/home components/Home_The_Art_Of_Bold_Disruption";
import Home_How_Can_I_Assist_You from "../components/home components/Home_How_Can_I_Assist_You";
import Home_Our_Services from "../components/home components/Home_Our_Services";
import Home_The_Art_Of_Bold_Disruption2 from "../components/home components/Home_The_Art_Of_Bold_Disruption2";
import Home_Insights_Updates from "../components/home components/Home_Insights_Updates";
import home_hero_background from "../assets/Video/home_hero_background.mp4";
import Footer from "../components/Footer";
import aryu_agency_logo from "../assets/aryu_agency_logo.png";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // GSAP animation for preloader
    const timeline = gsap.timeline({
      onComplete: () => setLoading(false), // Hide preloader after animation
    });

    timeline
      .fromTo(
        ".preloader-logo",
        {
          opacity: 0,
          scale: 0.5, // Start smaller
        },
        {
          duration:0,
          opacity: 1,
          scale: 2, // Slightly enlarge first
          ease: "power2.out",
        }
      )
      .to(".preloader-logo", {
        duration: 0,
        scale: 20, // Expand to a very large size
        opacity: 0, // Fade out smoothly
        ease: "power4.in",
      });

    // Cleanup timeline when component unmounts
    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div>
      {loading ? (
        <div className="preloader overflow-hidden flex justify-center items-center h-screen bg-gradient-to-r from-violet-500 to-violet-900">
          <img
            className="preloader-logo object-cover"
            src={aryu_agency_logo}
            alt="Aryu Logo"
          />
        </div>
      ) : (
        <>
          <section className="relative min-h-screen">
            <video
              className="absolute inset-0 w-screen min-h-screen object-cover"
              src={home_hero_background}
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
            ></video>

            <div className="relative min-h-screen">
              <Home_Header />
              <Home_Hero />
            </div>
          </section>

          <Home_The_Art_Of_Bold_Disruption />
          <Home_How_Can_I_Assist_You />
          <Home_Our_Services />
          <Home_The_Art_Of_Bold_Disruption2 />
          <Home_Insights_Updates />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
