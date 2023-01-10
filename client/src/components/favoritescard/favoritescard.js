import React from "react";
import { useState } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";

function FavoritesCard({ id, productId, category, name }) {
  const [favorites, setFavorites] = useState([]);

  // can't combine card and items components into one file because useEffect from items component prevents category and category_id data from being passed

  console.log(id);

  // delete favorites
  const deleteFavorites = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/favorites/${id}`,
        {}
      );
      setFavorites(response.data);
      // filter not rendering out deleted favorite item
      console.log("favorite deleted");
    } catch (error) {
      console.log(error.message);
    }
  };

  // add to cart
  const addToCart = async () => {
    try {
      const request = await axios.post("http://localhost:5000/carts", {
        productId: id,
      });
      setFavorites(request.data);
      console.log("added to cart");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div>
        {id}, {category}, {name}
      </div>
      <button onClick={addToCart}>Add to Cart</button>
      <div onClick={() => deleteFavorites(id)}>
        <DeleteIcon />
      </div>
    </div>
  );
}

export default FavoritesCard;
