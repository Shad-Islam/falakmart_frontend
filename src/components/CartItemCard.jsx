import React from "react";
import "./CartItemCard.css";
import CrossIcon from "../assets/icons/crossIcon.png";

export default function CartItemCard({
  id,
  product_name,
  product_image,
  price,
}) {
  return (
    <div id="cart-card-container">
      <div id="cart-devider"></div>
      <div id="cart-contents">
        <div id="cart-image-div">
          <img src={product_image} alt="Image" />
        </div>
        <div id="cart-name-and-price-div">
          <div id="cart-title-and-cross">
            <div id="cart-item-title">{product_name}</div>
            <div id="cart-cross">
              <img src={CrossIcon} alt="Cross Icon" />
            </div>
          </div>
          <div id="cart-price-div">
            <div id="cart-price"> Price</div>
            <div id="cart-price-amount"> ৳ {price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
