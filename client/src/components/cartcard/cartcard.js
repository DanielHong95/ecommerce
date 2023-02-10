import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/userContext.js";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import "../cartcard/cartcard.css";

function CartCard({
  id,
  productId,
  category,
  name,
  deleteFromCart,
  countTest,
}) {
  const [count, setCount] = useState(1);
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
        productId: productId,
        userId: userData.id,
      });
      setCartItem(request.data);
      console.log("added to cart");
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(productId);

  console.log(countTest);

  return (
    <div className="cart-card-container">
      <div>
        {id}, {category}, {name}
      </div>
      <div onClick={() => deleteFromCart(id)}>
        <DeleteIcon />
      </div>
      <div className="counter">
        <button onClick={() => deleteFromCart(id)}> - </button>
        <div>{count}</div>
        <button onClick={addToCart}> + </button>
      </div>
    </div>
  );
}

export default CartCard;
