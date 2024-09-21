import React from "react";
import logo from "../../assets/images/logo.png";
import cartIcon from "../../assets/icons/cart.png";
import Navbar from "../../components/Navbar";

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
      <Navbar />
    </div>
  );
}

export default Home;
