import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/ImageSlider.css";
import TitleBox from "../../../components/TitleBox";

const images = [
  require("../../../assets/images/new-arrivel-carousel/LALAM 00.jpg"),
  require("../../../assets/images/new-arrivel-carousel/LALAM 01.jpg"),
  require("../../../assets/images/new-arrivel-carousel/LALAM 02.jpg"),
  require("../../../assets/images/new-arrivel-carousel/LALAM 03.jpg"),
  require("../../../assets/images/new-arrivel-carousel/LALAM 04.jpg"),
];

function ImageSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  return (
   <>
     <div className="container">
     <TitleBox text="New Arrivals" />
   </div>
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
}

export default ImageSlider;
