import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import FavoritesCard from "../favoritescard/favoritescard";
import { UserContext } from "../../context/userContext.js";

function FavoritesItems() {
  const [favorites, setFavorites] = useState([]);
  const [userData, setUserData] = useState([]);
  const { user } = useContext(UserContext);

  // get user data
  useEffect(() => {
    async function fetchUserData() {
      const getUserData = await axios.get(
        `http://localhost:5000/auth/users/${user.email}`
      );
      setUserData(getUserData.data);
    }
    fetchUserData();
  }, [user.email]);

  // get favorites
  useEffect(() => {
    async function fetchFavorites() {
      const getFavorites = await axios.get(
        `http://localhost:5000/favorites/users/${userData.id}`
      );
      setFavorites(getFavorites.data);
    }
    fetchFavorites();
  }, [userData.id]);

  const deleteFavorites = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/favorites/${id}`,
        {}
      );
      setFavorites(favorites.filter((fave) => fave.id !== id));
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
            deleteFavorites={deleteFavorites}
          />
        </div>
      ))}
    </div>
  );
}
export default FavoritesItems;
