import React from "react";
import Home_Header from "../components/Home_Header";
import Home_Hero from "../components/home components/Home_Hero";
import Home_The_Art_Of_Bold_Disruption from "../components/home components/Home_The_Art_Of_Bold_Disruption";
import Home_How_Can_I_Assist_You from "../components/home components/Home_How_Can_I_Assist_You";
import Home_Our_Services from "../components/home components/Home_Our_Services";
import Home_The_Art_Of_Bold_Disruption2 from "../components/home components/Home_The_Art_Of_Bold_Disruption2";
import Home_Insights_Updates from "../components/home components/Home_Insights_Updates";
import home_hero_background from "../assets/Video/home_hero_background.mp4";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <section className="relative ">
        <video
          className="absolute inset-0 w-screen h-screen object-cover"
          src={home_hero_background}
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
        ></video>

        <div className="relative px-32 ">
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

    </div>
  );
}

export default Home;
