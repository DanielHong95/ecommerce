import React from "react";
import { useState } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";

function CartCard({ id, category, category_id }) {
  const [cartItem, setCartItem] = useState([]);

  // delete cart items
  const deleteFromCart = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/carts/${id}`,
        {}
      );
      setCartItem(cartItem.filter(() => id !== id));
      console.log("item deleted");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div>
        {id}, {category}, {category_id}
      </div>
      <div onClick={() => deleteFromCart(id)}>
        <DeleteIcon />
      </div>
    </div>
  );
}

export default CartCard;
