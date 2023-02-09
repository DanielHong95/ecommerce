import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FavoritesItems from "../../components/favoritesitems/favoritesitems";
import "../favoritespage/favoritespage.css";

function FavoritesPage({ deleteMessage }) {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <div className="favorites-page-container">
      <div className="favorites-page-header">Favorites</div>
      {isAuth ? (
        <div className="favorites-page-items">
          <FavoritesItems />
        </div>
      ) : (
        <div className="favorites-page-login">
          <p>
            Please{" "}
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
