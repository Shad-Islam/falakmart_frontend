import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Banner from "./banner/Banner";
import TitleBox from "../../components/TitleBox";
import ImageSlider from "./image Slider/ImageSlider";
import DiscountSection from "./discount section/DiscountSection";
import Footer from "../../components/Footer";
import AllBrand from "./all brand/AllBrand";

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
      <AllBrand />
      <DiscountSection />
      <Footer />
    </>
  );
}

export default Home;
