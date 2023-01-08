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

  console.log(favorites);

  return (
    <div>
      {favorites.map(({ product }) => (
        <div key={favorites.id}>
          <FavoritesCard
            key={product.id}
            category={product.category}
            name={product.name}
          />
        </div>
      ))}
    </div>
  );
}
export default FavoritesItems;
