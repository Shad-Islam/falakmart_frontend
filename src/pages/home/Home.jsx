import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Banner from "./banner/Banner";
import ImageSlider from "./image Slider/ImageSlider";
import FeaturedProducts from "./featured-product/FeaturedProducts";
import DiscountSection from "./discount section/DiscountSection";
import Footer from "../../components/Footer";
import LiveUpdate from "./live-update/LiveUpdate";
import RecentLive from "./recent-live/RecentLive";

function Home() {
  return (
    <>
      <Header showArrowIcon={false} />
      <Navbar />
      <Banner />
      <ImageSlider />
      <LiveUpdate />
      <RecentLive />
      <FeaturedProducts />
      <DiscountSection />
      <Footer />
    </>
  );
}

export default Home;
