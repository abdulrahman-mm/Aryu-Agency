import React from "react";
import Header from "../components/Header";
import VideoProduction_Hero from "../components/video production component/VideoProduction_Hero";
import VideoProduction_Main from "../components/video production component/VideoProduction_Main";
import Footer from '../components/Footer'


const VideoProduction = () => {
  return (
    <div>
      <Header />
      <VideoProduction_Hero/>
      <VideoProduction_Main/>
      <Footer/>
    </div>
  );
};

export default VideoProduction;
