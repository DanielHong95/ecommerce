import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext.js";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import "../cartcard/cartcard.css";

function CartCard({
  id,
  productId,
  quantity,
  image,
  category,
  name,
  size,
  price,
  deleteFromCart,
  onCountChange,
}) {
  const [count, setCount] = useState(quantity);
  const [userData, setUserData] = useState([]);
  const { user } = useContext(UserContext);

  // Call callback function with new count value
  const handleCountChange = (newCount, productId) => {
    setCount(newCount);
    onCountChange(newCount);
  };

  // get logged in user data
  useEffect(() => {
    async function fetchUserData() {
      const getUserData = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/auth/users/${user.email}`
      );
      setUserData(getUserData.data);
    }
    fetchUserData();
  }, []);

  // update quantity
  const updateQuantity = async (id, newQuantity) => {
    await axios
      .put(`${process.env.REACT_APP_SERVER_URL}/carts/quantity/${id}`, {
        quantity: newQuantity,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const itemPriceTotal = count * price;

  return (
    <div className="cart-card-container">
      <Link to={`/content/${category}/${productId}`}>
        <img src={image} alt="" className="image" width={100} height={100} />
      </Link>
      <div className="descriptions">
        <div className="name">{name}</div>
        <div className="size">{size}</div>
      </div>
      <div className="buttons">
        <div className="delete" onClick={() => deleteFromCart(id)}>
          <DeleteIcon />
        </div>
        <div className="counter">
          <button
            className="decrement"
            onClick={async () => {
              if (count > 1) {
                const newCount = count - 1;
                await updateQuantity(id, newCount);
                setCount(newCount);
                handleCountChange(newCount);
              } else {
                console.log("cannot decrement");
              }
            }}
          >
            {" "}
            -{" "}
          </button>
          <div>{count}</div>
          <button
            className="increment"
            onClick={async () => {
              const newCount = count + 1;
              await updateQuantity(id, newCount);
              setCount(newCount);
              handleCountChange(newCount);
            }}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
      <div className="total">
        <div>${itemPriceTotal.toFixed(2)}</div>
        <div>${price} each</div>
      </div>
    </div>
  );
}

export default CartCard;
