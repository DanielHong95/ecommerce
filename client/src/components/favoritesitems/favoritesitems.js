import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FavoritesCard from "../favoritescard/favoritescard";

function FavoritesItems({ id }) {
  const [favorites, setFavorites] = useState([]);

  // get favorites
  useEffect(() => {
    async function fetchFavorites() {
      const getFavorites = await axios.get("http://localhost:5000/favorites");
      setFavorites(getFavorites.data);
    }
    fetchFavorites();
  }, []);

  // delete favorites
  const deleteFavorites = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/favorites/${id}`,
        {}
      );
      console.log(id);
      setFavorites(favorites.filter((fav) => fav.id === id));
      // filter not rendering out deleted favorite item
      console.log("favorite deleted");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {favorites.map(({ product, id }) => (
        <div key={favorites.id}>
          <FavoritesCard
            key={id}
            id={id}
            productId={product.id}
            category={product.category}
            name={product.name}
          />
        </div>
      ))}
    </div>
  );
}
export default FavoritesItems;
