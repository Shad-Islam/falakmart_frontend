import React from "react";

import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Banner from "./banner/Banner";
import TitleBox from "../../components/TitleBox";
import ImageSlider from "./imageSlider/ImageSlider";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      {/* title box start  */}
      <div className="container">
        <TitleBox text="New Arrivals" />
      </div>
      {/* title box end */}
      <ImageSlider />
    </>
  );
}

export default Home;
