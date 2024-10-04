import React from "react";
import "./style/Header.css";
import logo from "../assets/images/logo.png";
import cartIcon from "../assets/icons/cart.png";
import arrowIcon from "../assets/icons/arrow.png";

function Header({ showArrowIcon }) {
  return (
    <>
      <div className="container">
        <header>
          <img
            src={arrowIcon}
            alt="arrow-icon"
            className="icon"
            style={{ visibility: showArrowIcon ? "visible" : "hidden" }}
          />
          <img className="logo" src={logo} alt="Logo" />
          <img className="icon" src={cartIcon} alt="cart-icon" />
        </header>
      </div>
    </>
  );
}

export default Header;
