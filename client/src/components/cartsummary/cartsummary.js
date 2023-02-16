import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../context/userContext";
import "../cartsummary/cartsummary.css";

function CartSummary(props) {
  const [cartItems, setCartItems] = useState([]);
  const [userData, setUserData] = useState([]);
  const [productTotal, setProductTotal] = useState(0);
  const { user } = useContext(UserContext);

  // get user data
  useEffect(() => {
    async function fetchUserData() {
      const getUserData = await axios.get(
        `http://localhost:5000/auth/users/${user.email}`
      );
      setUserData(getUserData.data);
    }
    fetchUserData();
  }, [user.email]);

  // get product totals
  useEffect(() => {
    async function fetchProductSum() {
      const response = await axios.get(
        `http://localhost:5000/carts/product_total/users/${userData.id}`
      );
      const productTotalSum = response.data.reduce(
        (acc, curr) => acc + parseFloat(curr.product_total),
        0
      );
      setProductTotal(productTotalSum);
    }
    fetchProductSum();
  }, [userData.id, props.count]);
  // console.log(testTotal);

  let cartTax = productTotal * 0.0825;
  // console.log(cartTax);
  let cartTotal = productTotal + cartTax;
  // console.log(cartTotal);

  return (
    <div className="cart-summary-container">
      <div className="cart-header">Cart Summary </div>
      <div className="cart-total">
        <div>Subtotal ${productTotal.toFixed(2)}</div>
        <div>Estimated Tax ${cartTax.toFixed(2)}</div>
        <div>Estimated Total ${cartTotal.toFixed(2)}</div>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default CartSummary;
