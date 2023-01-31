import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function CartCard({ id, category, name, deleteFromCart }) {
  return (
    <div>
      <div>
        {id}, {category}, {name}
      </div>
      <div onClick={() => deleteFromCart(id)}>
        <DeleteIcon />
      </div>
    </div>
  );
}

export default CartCard;
