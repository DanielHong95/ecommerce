import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { UserContext } from "../../context/userContext.js";
import "../productinfo/productinfo.css";

function ProductInfo(props, { id }) {
  const [data, setData] = useState(null);
  const [isFavorited, setIsFavorited] = useState(false);
  const [userData, setUserData] = useState([]);
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
    <div className="product-info">
      <div key={props.id} className="image">
        <img src={props.image_url} alt="images" />
        <div>
          {isAuth ? (
            <div className="buttons">
              <button className="add-to-cart" onClick={addToCart}>
                Add to Cart
              </button>
              <div className="favorites" onClick={postFavorites}>
                <FavoriteIcon sx={{ color: "#e7e7e7" }} />
              </div>
            </div>
          ) : (
            <div className="please-login">
              <Link color="black" to="/account">
                {" "}
                LOG IN
              </Link>{" "}
              or{" "}
              <Link color="black" to="/account">
                CREATE AN ACCOUNT
              </Link>{" "}
              to add to favorites and cart
            </div>
          )}
        </div>
      </div>
      <div className="info">
        <h1>{props.name}</h1>
        <p>{props.size}</p>
        <p>${props.price}</p>
        <b>PRODUCT INFO</b>
        <p>{props.product_info}</p>
        <p>
          <b>BRAND</b> {props.brand}
        </p>
        <p>
          <b>ABV</b> {props.abv}
        </p>
        <p>
          <b>YEAR</b> {props.year}
        </p>
        <p>
          <b>TYPE</b> {props.type}
        </p>
        <p>
          <b>STYLE</b> {props.style}
        </p>
        <p>
          <b>MARKET</b> {props.market}
        </p>
        <p>
          <b>VARIETAL</b> {props.varietal}
        </p>
        <p>
          <b>COUNTRY</b> {props.country}
        </p>
        <p>
          <b>STATE</b> {props.state}
        </p>
        <p>
          <b>CITY</b> {props.city}
        </p>
        <p>
          <b>REGION</b> {props.region}
        </p>
        <p>
          <b>APPELLATION</b> {props.appellation}
        </p>
        <p>
          <b>TASTE</b> {props.taste}
        </p>
        <p>
          <b>BODY</b> {props.body}
        </p>
      </div>
    </div>
  );
}

export default ProductInfo;
