import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SelectedProduct from "./selected-product/SelectedProduct";
import MoreCollection from "./more-collection/MoreCollection";
import RelatedProducts from "./related-product/RelatedProducts";

import { productDetailsImages } from "../../assets/images";
import { useParams } from "react-router-dom";

export default function PrductDetails() {
  const { id } = useParams();
  return (
    <>
      <Header showArrowIcon={true} />
      <Navbar />
      <div className="container">
        <SelectedProduct Images={productDetailsImages} />
        <MoreCollection />
        <RelatedProducts />
      </div>

      <Footer />
    </>
  );
}
