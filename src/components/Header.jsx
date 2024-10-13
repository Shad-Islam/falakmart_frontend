import React from "react";
import "./style/Header.css";
import logo from "../assets/images/logo.png";
import cartIcon from "../assets/icons/cart.png";
import arrowIcon from "../assets/icons/arrow.png";
import { Link } from "react-router-dom";
function Header({ showArrowIcon }) {
  return (
    <>
      <div className="container">
        <header>
          <Link to="/">
            <img
              src={arrowIcon}
              alt="arrow-icon"
              className="icon"
              style={{ visibility: showArrowIcon ? "visible" : "hidden" }}
            />
          </Link>
          <img className="logo" src={logo} alt="Logo" />
          <Link to="/cart">
            <img className="icon" src={cartIcon} alt="cart-icon" />
          </Link>
        </header>
      </div>
    </>
  );
}

export default Header;
