import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../../components/cartitem/cartitem";
import "../cartpage/cartpage.css";

function CartPage() {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <div className="cart-page-container">
      <div className="cart-page-header">Cart</div>
      {isAuth ? (
        <div className="cart-page-item">
          <CartItem />
        </div>
      ) : (
        <div className="cart-page-login">
          <p>
            Please{" "}
            <Link color="black" to="/account">
              {" "}
              Log In
            </Link>{" "}
            or{" "}
            <Link color="black" to="/account">
              Create an Account
            </Link>{" "}
            to see your cart
          </p>
        </div>
      )}
    </div>
  );
}

export default CartPage;
