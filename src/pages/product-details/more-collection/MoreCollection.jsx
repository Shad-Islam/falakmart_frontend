import React from "react";
import "./MoreCollection.css";
import { productImages } from "../../../assets/images";
import TitleWithPriceCard from "../../../components/TitleWithPriceCard";

export default function MoreCollection() {
  let Images;
  if (productImages.length > 8) {
    Images = productImages.slice(4, 8);
  } else {
    Images = productImages;
  }
  return (
    <div id="more-collection-container">
      <div id="more-collection-text">More from the Selected Product</div>
      <div id="more-collection-div">
        {" "}
        {Images.map((item, index) => (
          <TitleWithPriceCard
            productName={item.product_name}
            productImages={item.product_image}
            price={item.price}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
