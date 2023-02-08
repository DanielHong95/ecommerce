import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserContext } from "../../context/userContext.js";
import "../favoritescard/favoritescard.css";

function FavoritesCard({ id, productId, category, name, deleteFavorites }) {
  const [cartItem, setCartItem] = useState([]);
  const [userData, setUserData] = useState([]);
  const { user } = useContext(UserContext);

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
      console.log("added to cart");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div>
        {id}, {productId}, {category}, {name}
      </div>
      <button onClick={addToCart}>Add to Cart</button>
      <div onClick={() => deleteFavorites(id)}>
        <DeleteIcon />
      </div>
    </div>
  );
}

export default FavoritesCard;
