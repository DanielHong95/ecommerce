import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../productcarousel/productcarousel.css";

function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState([]);

  const carouselInfiniteScroll = () => {
    if (currentIndex === products.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  // get products
  useEffect(() => {
    async function fetchProducts() {
      const getProducts = await axios.get(`http://localhost:5000/products/`);
      setProducts(getProducts.data);
    }
    console.log(products);
    fetchProducts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div className="carousel-container">
      {products.map(({ id, name, category, image_url }, index) => {
        return (
          <h1
            className="carousel-item"
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
            key={index}
          >
            <Link to={`/content/${category}/${id}`}>
              <img src={image_url} alt="" width="250" height="250" />
            </Link>
            {name}
          </h1>
        );
      })}
    </div>
  );
}

export default ProductCarousel;
