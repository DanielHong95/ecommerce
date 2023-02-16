import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import CartCard from "../cartcard/cartcard";
import { UserContext } from "../../context/userContext";
import "../cartitem/cartitem.css";
import CartSummary from "../cartsummary/cartsummary";

function CartItem() {
  const [cartItems, setCartItems] = useState([]);
  const [userData, setUserData] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const { user } = useContext(UserContext);

  const handleCartCountChange = (newCount) => {
    setCartCount(newCount);
  };

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

  if (cartItems.length === 0) {
    return <div className="empty-message">Your cart is empty</div>;
  }
  return (
    <div className="cart-items-container">
      {cartItems.map(({ id, productId, quantity, product }) => (
        <div key={cartItems.id}>
          <CartCard
            key={id}
            id={id}
            productId={productId}
            quantity={quantity}
            image={product.image_url}
            category={product.category}
            name={product.name}
            size={product.size}
            price={product.price}
            deleteFromCart={deleteFromCart}
            onCountChange={handleCartCountChange}
          />
        </div>
      ))}
      <div>
        <CartSummary count={cartCount} />
      </div>
    </div>
  );
}
export default CartItem;
