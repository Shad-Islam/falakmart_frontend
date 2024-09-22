import React from "react";
import "./style/Banner.css";
import banner from "../../../assets/images/Banner.png";

function Banner() {
  return (
    <>
      <section className="banner_section">
        <img src={banner} alt="banner" />
      </section>
    </>
  );
}

export default Banner;
