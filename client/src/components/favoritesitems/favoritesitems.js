import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FavoritesCard from "../favoritescard/favoritescard";

function FavoritesItems() {
  const [favorites, setFavorites] = useState([]);

  // get favorites
  useEffect(() => {
    async function fetchFavorites() {
      const getFavorites = await axios.get("http://localhost:5000/favorites");
      setFavorites(getFavorites.data);
    }
    console.log(favorites);
    fetchFavorites();
  }, []);

  return (
    <div>
      {favorites.map(({ id, category, category_id }) => (
        <div key={favorites.id}>
          <FavoritesCard
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
export default FavoritesItems;
