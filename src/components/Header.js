import React from "react";
import "./style/Header.css";
import logo from "../assets/images/logo.png";
import cartIcon from "../assets/icons/cart.png";

function Header() {
  return (
    <>
      <div className="container">
        <header>
          <img className="logo" src={logo} alt="Logo" />
          <img className="cart_icon" src={cartIcon} alt="Logo" />
        </header>
      </div>
    </>
  );
}

export default Header;
