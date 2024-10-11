import React, { useState } from "react";
import "./SelectedProduct.css";
import CartIcon from "../../../assets/icons/cart.png";
import DownArrow from "../../../assets/icons/down-arrow.png";
import UpArrow from "../../../assets/icons/up-arrow.png";
export default function SelectedProduct({ Images }) {
  const [num, setNum] = useState(0);
  const [description, setDescription] = useState(false);
  return (
    <div id="selected-product-container">
      <div id="images-div">
        <div id="focused-image-div">
          <img src={Images[num]} alt="Product Image" />
        </div>
        <div id="image-list-div">
          <div
            className="image-list"
            onClick={() => {
              setNum(0);
            }}
          >
            <img src={Images[0]} alt="Image1" />
          </div>
          <div
            className="image-list"
            onClick={() => {
              setNum(1);
            }}
          >
            <img src={Images[1]} alt="Image2" />
          </div>
        </div>
      </div>
      <div id="product-details-div">
        <div id="sp-product-name">Ramsha Mashaal Luxury Lawn</div>
        <div id="sp-shipping-estimation"> Estimate Shipping Time: 3 Days</div>
        <div id="sp-price-info">
          <div id="sp-price">Price</div>
          <div id="sp-amount">৳ 5000</div>
        </div>
        <div id="sp-btns">
          <button id="sp-add-to-cart">
            <img src={CartIcon} alt="Cart" />
            Add to cart
          </button>
          <button id="sp-buy-now">Buy Now</button>
        </div>
        <div id="sp-devider"></div>
        <div id="sp-description">
          <span> Description</span>
          {!description && (
            <img
              src={DownArrow}
              alt="Down Arrow"
              onClick={() => {
                setDescription(true);
              }}
            />
          )}
        </div>
        {description && (
          <div id="sp-description-content">
            <img
              src={UpArrow}
              alt="UpArrow"
              onClick={() => {
                setDescription(false);
              }}
            />
            <p>This is line one.</p>
            <p> This is line two.</p>
            <p> This is line three.</p>
          </div>
        )}
      </div>
    </div>
  );
}
