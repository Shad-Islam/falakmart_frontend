import React from "react";
import "./RecentLive.css";
import { productImages } from "../../../assets/images";
import TitleWithPriceCard from "../../../components/TitleWithPriceCard";

export default function RecentLive() {
  return (
    <div id="recent-live-container">
      <div id="recent-live-text-container">Recent live dress </div>
      <div id="recent-live-image-card-container">
        <TitleWithPriceCard
          productImages={productImages[0].product_image}
          productName={productImages[0].product_name}
          price={productImages[0].price}
        />
        <TitleWithPriceCard
          productImages={productImages[1].product_image}
          productName={productImages[1].product_name}
          price={productImages[1].price}
        />
      </div>
    </div>
  );
}
