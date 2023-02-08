import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCard from "../productcard/productcard";
import "../productitem/productitems.css";

function ProductItems() {
  const { linkUrl } = useParams();
  console.log(linkUrl);
  const [products, setProducts] = useState([]);

  // get products
  useEffect(() => {
    async function fetchProducts() {
      const getProducts = await axios.get(`http://localhost:5000/${linkUrl}/`);
      setProducts(getProducts.data);
    }
    console.log(products);
    fetchProducts();
  }, [linkUrl]);

  return (
    <div className="product-grid-container">
      {products.map(({ id, name, price, size, image_url }) => (
        <div className="product-grid-item">
          <ProductCard
            key={id}
            id={id}
            name={name}
            price={price}
            size={size}
            image={image_url}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductItems;
