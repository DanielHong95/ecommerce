import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FavoritesItems from "../../components/favoritesitems/favoritesitems";
import "../favoritespage/favoritespage.css";

function FavoritesPage() {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <div className="favorites-page-container">
      <div className="header">Favorites</div>
      {isAuth ? (
        <div className="items">
          <FavoritesItems />
        </div>
      ) : (
        <div className="login">
          <p>
            <Link color="black" to="/account">
              {" "}
              Log In
            </Link>{" "}
            or{" "}
            <Link color="black" to="/account">
              Register
            </Link>{" "}
            to see your favorites
          </p>
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
