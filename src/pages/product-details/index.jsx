import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RelatedProducts from "./related-product/RelatedProducts";

export default function PrductDetails() {
  return (
    <>
      <Header showArrowIcon={true} />
      <Navbar />
      <div className="container">
        <RelatedProducts />
      </div>

      <Footer />
    </>
  );
}
