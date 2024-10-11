import React from "react";
import "./style/FeaturedproductCard.css";

export default function FeaturedProductCard({
  productImages,
  price,
  productName,
}) {
  return (
    <div id="featured-card">
      <div id="product-image-div">
        <img src={productImages} alt="dress1" />
      </div>
      <div id="product-name"> {productName}</div>
      <div id="price-and-cart-div">
        <p>৳ {price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
