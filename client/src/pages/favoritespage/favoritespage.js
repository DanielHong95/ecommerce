import React from "react";
import FavoritesItems from "../../components/favoritesitems/favoritesitems";
import FavoritesComponent from "../../components/favoritescomponent/favoritescomponent";

function FavoritesPage() {
  return (
    <div>
      <div>Favorites</div>
      <FavoritesItems />
      {/* <FavoritesComponent /> */}
    </div>
  );
}

export default FavoritesPage;
