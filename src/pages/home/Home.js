import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Banner from "./banner/Banner";
import TitleBox from "../../components/TitleBox";
import ImageSlider from "./image Slider/ImageSlider";
import FeaturedProducts from "./featured-product/FeaturedProducts";
import DiscountSection from "./discount section/DiscountSection";
import Footer from "../../components/Footer";

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
      <FeaturedProducts />
      <DiscountSection />
      <Footer />
    </>
  );
}

export default Home;
