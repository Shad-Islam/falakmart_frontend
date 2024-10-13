import React, { useState, useEffect } from "react";
import FeaturedProductCard from "../../../components/FeaturedProductCard";
import "./style/FeaturedProducts.css";
import TitleBox from "../../../components/TitleBox";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [showless, setShowLess] = useState(true);
  const [btnText, setBtnText] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/products');
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  let displayedProducts = products
    .filter(product => product.product_images.length > 0) // Filter out products without images
    .map(product => ({
      ...product,
      firstImage: product.product_images[0].image // Take the first image URL
    }));

    console.log({displayedProducts});
  if (products.length > 8 && showless) {
    displayedProducts = displayedProducts.slice(0, 8);
  }

  return (
    <div className="container">
      <TitleBox text="Featured Products" />
      <div id="featured-product-container">
        {displayedProducts.map((item, index) => (
          <FeaturedProductCard
            productName={item.name}
            productImage={item.firstImage}
            price={item.price}
            key={item.id}
          />
        ))}
      </div>
      <div id="view-more-div">
        {products.length > 8 && (
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
