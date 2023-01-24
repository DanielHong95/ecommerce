import React from "react";
import { Link } from "react-router-dom";
import "../navbar/navbar.css";
import logo from "../../images/hongover_logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchBar from "../searchbar/searchbar";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/home"}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <SearchBar />
      <div className="favorite-icon">
        <Link to="/favorites">
          <FavoriteIcon />
        </Link>
      </div>
      <div className="shopping-icon">
        <Link to="/cart">
          <ShoppingCartIcon />
        </Link>
      </div>
      <div className="account-icon">
        <Link to="/account">
          <AccountCircleIcon fontSize="large" />
        </Link>
      </div>
      <div className="routes">
        <Link to="/content/beers">Beer</Link>
        <Link to="/content/wines">Wine</Link>
        <Link to="/content/spirits">Spirits</Link>
      </div>
    </div>
  );
}

export default Navbar;
