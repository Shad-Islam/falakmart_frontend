import React, { useEffect, useState } from "react";
import "./style/ImageSlider.css";

const red = require("../../../assets/images/red.jpg");
const blue = require("../../../assets/images/blue.jpg");
const black = require("../../../assets/images/black.webp");

const images = [red, blue, black];
function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => {
          if (prevIndex === images.length - 1) {
            images.push(red);
            images.push(blue);
            images.push(black);
            console.log(images.length);
            
            if (images.length === 12) {
              images.shift();
              images.shift();
              images.shift();
              return 0;
            }
          } else {
            return prevIndex + 1;
          }
        }
        // prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="slider-image"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
