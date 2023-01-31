import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import CartCard from "../cartcard/cartcard";
import { UserContext } from "../../context/userContext";

function CartItem() {
  const [cartItems, setCartItems] = useState([]);
  const [userData, setUserData] = useState([]);
  const { user } = useContext(UserContext);

  // get user data
  useEffect(() => {
    async function fetchUserData() {
      const getUserData = await axios.get(
        `http://localhost:5000/auth/users/${user.email}`
      );
      setUserData(getUserData.data);
    }
    fetchUserData();
  }, [user.email]);

  // get cart items
  useEffect(() => {
    async function fetchCartItems() {
      const cartItems = await axios.get(
        `http://localhost:5000/carts/users/${userData.id}`
      );
      setCartItems(cartItems.data);
    }

    fetchCartItems();
  }, [userData.id]);

  const deleteFromCart = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/carts/${id}`,
        {}
      );
      setCartItems(cartItems.filter((item) => item.id !== id));
      console.log("item deleted");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {cartItems.map(({ product, id }) => (
        <div key={cartItems.id}>
          <CartCard
            key={id}
            id={id}
            category={product.category}
            name={product.name}
            deleteFromCart={deleteFromCart}
          />
        </div>
      ))}
    </div>
  );
}
export default CartItem;
