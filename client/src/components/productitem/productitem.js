import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCard from "../productcard/productcard";

function ProductItems() {
  const { linkUrl } = useParams();
  console.log(linkUrl);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      // You can await here
      const getProducts = await axios.get(`http://localhost:5000/${linkUrl}/`);
      setProducts(getProducts.data);
    }
    console.log(products);
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map(({ id, name, price, size, image_url }) => (
        <ProductCard
          key={id}
          id={id}
          name={name}
          price={price}
          size={size}
          image={image_url}
        />
      ))}
    </div>
  );
}

export default ProductItems;
