import React from "react";
import "./style/TitleWithPriceCard.css";

export default function TitleWithPriceCard({
  productImages,
  productName,
  price,
}) {
  return (
    <div id="twp-card-container">
      <div id="twp-image-div">
        <img src={productImages} alt="dress1" />
      </div>
      <div id="twp-product-name"> {productName}</div>
      <div id="twp-price-div">
        <p>৳ {price}</p>
      </div>
    </div>
  );
}

// title-with-price == twp , It's been used as id.
