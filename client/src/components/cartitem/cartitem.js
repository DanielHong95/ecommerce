import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CartCard from "../cartcard/cartcard";

function CartItem() {
  const [cartItem, setCartItem] = useState([]);

  // get cart items
  useEffect(() => {
    async function fetchCartItems() {
      const getCartItem = await axios.get("http://localhost:5000/carts");
      setCartItem(getCartItem.data);
    }
    console.log(cartItem);
    fetchCartItems();
  }, []);
  console.log(cartItem);

  return (
    <div>
      {cartItem.map(({ id, category, category_id }) => (
        <div key={cartItem.id}>
          <CartCard
            key={id}
            id={id}
            category={category}
            category_id={category_id}
          />
        </div>
      ))}
    </div>
  );
}
export default CartItem;
