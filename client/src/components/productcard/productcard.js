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
  const [userData, setUserData] = useState([]);
  const { linkUrl } = useParams();
  const { isAuth } = useSelector((state) => state.auth);
  const { user } = useContext(UserContext);

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
        `http://localhost:5000/favorites/productId/${id}`
      );
      if (response.data) {
        console.log("Data already exists in the database, cannot submit");
        return;
      }
      await axios.post("http://localhost:5000/favorites", {
        productId: id,
        userId: userData.id,
      });
      setIsFavorited(response.data);
      console.log("favorite posted");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="product-card">
      <Link to={`/content/${linkUrl}/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div className="descriptions">
        <h2>{name}</h2>
        <div>{size}</div>
        <h3>${price}</h3>
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
        <div className="please-login">
          <Link color="black" to="/account">
            {" "}
            Log In
          </Link>{" "}
          or{" "}
          <Link color="black" to="/account">
            Create an Account
          </Link>{" "}
          to add to favorites and cart
        </div>
      )}
    </div>
  );
}

export default ProductCard;
