import React from "react";
import "./style/AllBrand.css";
import TitleBox from "../../../components/TitleBox";

import gulAhmed from "../../../assets/images/brands-logo/gul ahmed 1.png";
import gulal from "../../../assets/images/brands-logo/gulal 1.png";
import gulljee from "../../../assets/images/brands-logo/gulljee 1.png";
import iznik from "../../../assets/images/brands-logo/iznik 1.png";
import khoobsurat from "../../../assets/images/brands-logo/khoobsurat 1.png";

function AllBrand() {
  return (
    <>
      <div className="container">
        <TitleBox text="All Brands" />
      </div>

      <div className="brands">
        <div className="brand-item">
          <img src={gulAhmed} alt="brand1" />
        </div>

        <div className="brand-item">
          <img src={gulal} alt="brand1" />
        </div>

        <div className="brand-item">
          <img src={gulljee} alt="brand1" />
        </div>

        <div className="brand-item">
          <img src={iznik} alt="brand1" />
        </div>

        <div className="brand-item">
          <img src={khoobsurat} alt="brand1" />
        </div>
      </div>
    </>
  );
}

export default AllBrand;
