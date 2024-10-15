import React from "react";
import "./CartOrderSummary.css";

export default function CartOrderSummary() {
  return (
    <div id="cart-order-summary-div">
      <div id="cos-title-div"> ORDER SUMMARY</div>
      <div className="cos-devider"></div>
      <div id="cos-sub-total-div">
        <div id="cos-sub-total">Subtotal:</div>
        <div id="cos-sub-total-amount">৳ 2555</div>
      </div>
      <div id="cos-shipping-cost-div">
        <div id="cos-shipping-text">
          Shipping (Standard Shipping: within 3-4 days inside Dhaka, within 4-7
          days outside Dhaka)
        </div>
        <div id="cos-shipping-cost">৳ 2555</div>
      </div>
      <div className="cos-devider"></div>
      <div id="cart-total-div">
        <div id="cart-total-text">Total:</div>
        <div id="cart-total-amount">৳ 19,880.00</div>
      </div>
      <div id="cart-user-name-and-contact">
        <div class="cart-user-name">
          <label for="name">Name</label>
          <input type="text" id="username" name="username" />
        </div>

        <div class="cart-contact">
          <label for="contact">Contact Number</label>
          <input type="number" id="contact" name="contact" />
        </div>
      </div>
      <div id="cart-user-address-div">
        <div class="cart-user-address">
          <label for="address">Address</label>
          <input type="text" id="address" name="address" />
        </div>
      </div>
      <div id="cart-action-buttons">
        <button id="proceed-to-checkout">PROCEED TO CHECKOUT</button>
        <button id="continue-shopping">CONTINUE SHOPPING</button>
      </div>
    </div>
  );
}
