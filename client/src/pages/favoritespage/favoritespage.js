import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FavoritesItems from "../../components/favoritesitems/favoritesitems";
import FavoritesComponent from "../../components/favoritescomponent/favoritescomponent";

function FavoritesPage() {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <div>
      <div>Favorites</div>
      {isAuth ? (
        <FavoritesItems />
      ) : (
        <div className="please-login">
          <p>
            Please{" "}
            <Link color="black" to="/account">
              {" "}
              Log In{" "}
            </Link>
            or
            <Link color="black" to="/account">
              {" "}
              Create an Account{" "}
            </Link>
            to see your favorites
          </p>
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
