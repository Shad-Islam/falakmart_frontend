import React, { useState } from "react";
import FeaturedProductCard from "../../../components/FeaturedProductCard";
import "./style/FeaturedProducts.css";
import TitleBox from "../../../components/TitleBox";
import { productImages } from "../../../assets/images";

export default function FeaturedProducts() {
  const [showless, setShowLess] = useState(true);
  const [btnText, setBtnText] = useState(true);
  let Images;
  if (productImages.length > 8) {
    if (showless) {
      Images = productImages.slice(0, 8);
    } else {
      Images = productImages;
    }
  } else {
    Images = productImages;
  }

  return (
    <div className="container">
      <TitleBox text="Featured Products" />
      <div id="featured-product-container">
        {Images.map((item, index) => (
          <FeaturedProductCard
            productName={item.product_name}
            productImages={item.product_image}
            price={item.price}
            key={index}
          />
        ))}
      </div>
      <div id="view-more-div">
        {productImages.length > 8 && (
          <button
            onClick={() => {
              setShowLess((prev) => !prev);
              setBtnText((prev) => !prev);
            }}
          >
            {btnText ? "View more" : "View less"}
          </button>
        )}
      </div>
    </div>
  );
}
