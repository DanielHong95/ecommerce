import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FavoritesCard from "../favoritescard/favoritescard";
import DeleteIcon from "@mui/icons-material/Delete";

function FavoritesComponent({ productId }) {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  // get favorites
  useEffect(() => {
    async function fetchFavorites() {
      const getFavorites = await axios.get("http://localhost:5000/favorites");
      setFavorites(getFavorites.data);
    }
    fetchFavorites();
  }, []);

  // add to cart
  const addToCart = async () => {
    try {
      const request = await axios.post("http://localhost:5000/carts", {
        productId: productId,
      });
      setCart(request.data);
      console.log("added to cart");
    } catch (error) {
      console.log(error.message);
    }
  };

  // delete favorites
  const deleteFavorites = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/favorites/${id}`,
        {}
      );
      console.log(id);
      setFavorites(favorites.filter((fav) => fav.id !== id));
      console.log("favorite deleted");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {favorites.map(({ product, id, productId }) => (
        <div key={favorites.id}>
          <div>
            {id}
            {product.id}
            {product.category}
            {product.name}
          </div>
          <button onClick={addToCart}>Add to Cart</button>
          <div onClick={() => deleteFavorites(id)}>
            <DeleteIcon />
          </div>
        </div>
      ))}
    </div>
  );
}
export default FavoritesComponent;
