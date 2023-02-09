import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { UserContext } from "../../context/userContext.js";
import "../productcard/productcard.css";

function ProductCard({ id, name, price, size, image }) {
  const [data, setData] = useState(null);
  const [isFavorited, setIsFavorited] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [userData, setUserData] = useState([]);
  const { linkUrl } = useParams();
  const { isAuth } = useSelector((state) => state.auth);
  const { user } = useContext(UserContext);

  // message timeout
  setTimeout(function () {
    setSuccessMessage(true);
    setErrorMessage(true);
  }, 5000);

  // get logged in user data
  useEffect(() => {
    async function fetchUserData() {
      const getUserData = await axios.get(
        `http://localhost:5000/auth/users/${user.email}`
      );
      setUserData(getUserData.data);
    }
    fetchUserData();
  }, []);

  // add to cart
  const addToCart = async () => {
    try {
      const request = await axios.post("http://localhost:5000/carts", {
        productId: id,
        userId: userData.id,
      });
      setData(request.data);
      setSuccessMessage("added to cart");
      console.log("added to cart");
    } catch (error) {
      console.log(error.message);
    }
  };

  // post favorites
  const postFavorites = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5000/favorites/${userData.id}/${id}`
      );
      if (response.data) {
        setErrorMessage("favorite already exists");
        console.log("Data already exists in the database, cannot submit");
        return;
      }
      await axios.post("http://localhost:5000/favorites", {
        productId: id,
        userId: userData.id,
      });
      setIsFavorited(response.data);
      setSuccessMessage("added to favorites");
      console.log("favorite posted");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="product-card-container">
      <Link to={`/content/${linkUrl}/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div className="descriptions">
        <div className="name">{name}</div>
        <div className="size">{size}</div>
        <div className="price">${price}</div>
      </div>
      {isAuth ? (
        <div className="buttons">
          <button onClick={addToCart} className="add-to-cart">
            Add to Cart
          </button>
          <div onClick={postFavorites} className="favorites">
            <FavoriteIcon />
          </div>
        </div>
      ) : (
        <div className="login">
          <Link color="black" to="/account">
            {" "}
            Log In
          </Link>{" "}
          or{" "}
          <Link color="black" to="/account">
            Register
          </Link>{" "}
          to add to favorites and cart
        </div>
      )}
      <div className="messages">
        <div style={{ color: "green" }}>{successMessage}</div>
        <div style={{ color: "red" }}>{errorMessage}</div>
      </div>
    </div>
  );
}

export default ProductCard;
