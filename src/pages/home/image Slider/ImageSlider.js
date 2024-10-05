import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style/ImageSlider.css";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:8001/api/products");
        const products = response.data;
        // Extract image URLs from products
        const extractedImages = products.flatMap((product) =>
          product.product_images.map((image) => image.url)
        );
        setImages(extractedImages);
        console.log(extractedImages);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

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
            alt={`Slide ${image}`}
            className="slider-image"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
