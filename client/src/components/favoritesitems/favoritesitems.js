import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FavoritesCard from "../favoritescard/favoritescard";
import ProductCard from "../productcard/productcard";

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

  console.log(favorites.productId);

  return (
    <div>
      {favorites.map(({ product, id }) => (
        <div key={favorites.id}>
          <FavoritesCard
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
export default FavoritesItems;
