import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserContext } from "../../context/userContext.js";
import "../favoritescard/favoritescard.css";

function FavoritesCard({
  id,
  productId,
  category,
  name,
  deleteFavorites,
  image,
  size,
  price,
}) {
  const [cartItem, setCartItem] = useState([]);
  const [userData, setUserData] = useState([]);
  const [cartMessage, setCartMessage] = useState(false);
  const { user } = useContext(UserContext);

  setTimeout(function () {
    setCartMessage(true);
  }, 5000);

  // get logged in user data
  useEffect(() => {
    async function fetchUserData() {
      const getUserData = await axios.get(
        `http://localhost:5000/auth/users/${user.email}`
      );
      setUserData(getUserData.data);
    }
    fetchUserData();
  }, []);

  // add to cart
  const addToCart = async () => {
    try {
      const request = await axios.post("http://localhost:5000/carts", {
        productId: id,
        userId: userData.id,
      });
      setCartItem(request.data);
      setCartMessage("added to cart");
      console.log("added to cart");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="favorites-card-container">
      <Link to={`/content/${category}/${productId}`}>
        <img src={image} alt="" />
      </Link>
      <div className="descriptions">
        <div className="name">{name}</div>
        <div className="size">{size}</div>
        <div className="price">${price}</div>
      </div>
      <div className="buttons">
        <button className="add-to-cart" onClick={addToCart}>
          Add to Cart
        </button>
        <div className="delete" onClick={() => deleteFavorites(id)}>
          <DeleteIcon />
        </div>
      </div>
      <div className="messages">
        <div style={{ color: "green" }}>{cartMessage}</div>
      </div>
    </div>
  );
}

export default FavoritesCard;
