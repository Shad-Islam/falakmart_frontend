import React from "react";
import "./style/FeaturedproductCard.css";
import { Link } from "react-router-dom";

export default function FeaturedProductCard({
  id,
  productImages,
  price,
  productName,
}) {
  return (
    <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
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
    </Link>
  );
}
