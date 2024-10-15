import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CartBanner from "./shopping-cart-banner/CartBanner";
import "./style.css";
import CartItemCard from "../../components/CartItemCard";
import { productImages } from "../../assets/images";
import CartOrderSummary from "./cart-order-summary/CartOrderSummary";
export default function Cart() {
  return (
    <>
      <Header showArrowIcon={true} />
      <CartBanner />
      <div className="container">
        <div id="cart-contents-container">
          <div id="selected-items-div">
            <div id="my-cart">
              <div id="my-cart-title">MY CART</div>
              <div id="my-cart-count"> {"( 3 ITEMS )"} </div>
            </div>
            <CartItemCard
              id={productImages[0].id}
              product_name={productImages[0].product_name}
              product_image={productImages[0].product_image}
              price={productImages[0].price}
            />
            <CartItemCard
              id={productImages[0].id}
              product_name={productImages[0].product_name}
              product_image={productImages[0].product_image}
              price={productImages[0].price}
            />
            <CartItemCard
              id={productImages[0].id}
              product_name={productImages[0].product_name}
              product_image={productImages[0].product_image}
              price={productImages[0].price}
            />
          </div>
          <div id="cart-order-summary-container">
            <CartOrderSummary />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
