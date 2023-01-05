import React from "react";
import { useState } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";

function FavoritesCard({ id, category, category_id }) {
  const [favorites, setFavorites] = useState([]);
  const [data, setData] = useState([]);

  console.log(category, category_id);
  // can't combine card and items components into one file because useEffect from items component prevents category and category_id data from being passed

  // delete favorites
  const deleteFavorites = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/favorites/${id}`,
        {}
      );
      setFavorites(favorites.filter((favorite) => favorite.id !== id));
      console.log("favorite deleted");
    } catch (error) {
      console.log(error.message);
    }
  };

  // add to cart
  const addToCart = async () => {
    try {
      const request = await axios.post("http://localhost:5000/carts", {
        category: category,
        category_id: category_id,
      });
      setData(request.data);
      console.log("added to cart");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div key={id}>
      <div>
        {id}, {category}, {category_id}
      </div>
      <button onClick={addToCart}>Add to Cart</button>
      <div onClick={() => deleteFavorites(id)}>
        <DeleteIcon />
      </div>
    </div>
  );
}

export default FavoritesCard;
