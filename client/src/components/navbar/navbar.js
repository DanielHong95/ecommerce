import React from "react";
import { Link } from "react-router-dom";
import "../navbar/navbar.css";
import logo from "../../images/hongover_logo_grey.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchBar from "../searchbar/searchbar";
import Logout from "../../components/logout/logout";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-searchbar">
        <SearchBar />
      </div>
      <div className="navbar-icons">
        <div className="navbar-favorite-icon">
          <Link to="/favorites">
            <FavoriteIcon sx={{ "&:hover": { color: "#262626" } }} />
          </Link>
        </div>
        <div className="navbar-shopping-icon">
          <Link to="/cart">
            <ShoppingCartIcon sx={{ "&:hover": { color: "#262626" } }} />
          </Link>
        </div>
        <div className="navbar-account-icon">
          <Link to="/account">
            <AccountCircleIcon
              fontSize="large"
              sx={{ "&:hover": { color: "#262626" } }}
            />
          </Link>
        </div>
        <div className="navbar-logout">
          <Logout />
        </div>
      </div>
      <div className="navbar-links">
        <div className="navbar-beer-link">
          <Link to="/content/beers" style={{ textDecoration: "none" }}>
            Beers
          </Link>
        </div>
        <div className="navbar-wine-link">
          <Link to="/content/wines" style={{ textDecoration: "none" }}>
            Wines
          </Link>
        </div>
        <div className="navbar-spirits-link">
          <Link to="/content/spirits" style={{ textDecoration: "none" }}>
            Spirits
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
