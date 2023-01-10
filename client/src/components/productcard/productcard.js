import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import FavoriteIcon from "@mui/icons-material/Favorite";

function ProductCard({ id, name, price, size, image }) {
  const [data, setData] = useState(null);
  const { linkUrl } = useParams();

  // add to cart
  const addToCart = async () => {
    try {
      const request = await axios.post("http://localhost:5000/carts", {
        productId: id,
      });
      setData(request.data);
      console.log("added to cart");
    } catch (error) {
      console.log(error.message);
    }
  };

  // post favorites
  const postFavorites = async () => {
    try {
      const response = await axios.post("http://localhost:5000/favorites", {
        productId: id,
      });
      setData(response.data);
      try {
      } catch (error) {}
      console.log("favorite posted");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Link to={`/content/${linkUrl}/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>{name}</div>
      <div>{size}</div>
      <div>{price}</div>
      <button onClick={addToCart}>Add to Cart</button>
      <div onClick={postFavorites}>
        <FavoriteIcon />
      </div>
    </div>
  );
}

export default ProductCard;
