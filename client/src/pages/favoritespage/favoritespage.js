import React from "react";
import FavoritesItems from "../../components/favoritesitems/favoritesitems";
import FavoritesTest from "../../components/favoritestest/favoritestest";
import FavoritesCard from "../../components/favoritescard/favoritescard";

function FavoritesPage() {
  return (
    <div>
      <div>Favorites</div>
      {/* <FavoritesTest /> */}
      <FavoritesItems />
    </div>
  );
}

export default FavoritesPage;
