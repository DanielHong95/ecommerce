import React from "react";
import { Link } from "react-router-dom";
import "../navbar/navbar.css";
import logo from "../../images/hongover_logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchBar from "../searchbar/searchbar";

function Navbar() {
  return (
    <div className="navbar">
      <div className="menu-icon">
        <MenuIcon />
      </div>
      <div className="Logo">
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div>
        <SearchBar />
      </div>
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
    </div>
  );
}

export default Navbar;
