import React from "react";

function ProductCard({ id, name, price, size, image }) {
  return (
    <div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{size}</div>
      <img src={image} alt="" />
    </div>
  );
}

export default ProductCard;
