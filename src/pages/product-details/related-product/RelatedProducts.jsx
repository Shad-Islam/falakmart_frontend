import React from "react";
import "./RelatedProducts.css";
import { productImages } from "../../../assets/images";
import TitleWithPriceCard from "../../../components/TitleWithPriceCard";
export default function RelatedProducts() {
  let Images;
  if (productImages.length > 4) {
    Images = productImages.slice(0, 4);
  } else {
    Images = productImages;
  }
  return (
    <div id="related-product-container">
      <div id="related-product-text">Related Product</div>
      <div id="related-product-div">
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
