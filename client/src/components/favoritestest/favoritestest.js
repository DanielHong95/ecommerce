import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function FavoritesTest() {
  const [favorites, setFavorites] = useState([]);

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
      {favorites.length ? (
        favorites.map((data, index) => {
          return (
            <div key={data.id}>
              <div>
                {data.id}, {data.description}
              </div>
            </div>
          );
        })
      ) : (
        <p></p>
      )}
    </div>
  );
}
export default FavoritesTest;
