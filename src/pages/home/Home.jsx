import React from "react";
import logo from "../../assets/images/logo.png";
import cartIcon from "../../assets/icons/cart.png";

function Home() {
  return (
    <div>
      <div className="container">
        {/* header start */}
        <header>
          <img className="logo" src={logo} alt="Logo" />
          <img className="cart_icon" src={cartIcon} alt="Logo" />
        </header>
        {/* header end */}
      </div>
    </div>
  );
}

export default Home;
