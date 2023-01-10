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
      {cartItem.map(({ product, id }) => (
        <div key={cartItem.id}>
          <CartCard
            key={id}
            id={id}
            category={product.category}
            name={product.name}
          />
        </div>
      ))}
    </div>
  );
}
export default CartItem;
