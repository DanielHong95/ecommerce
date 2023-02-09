import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../../components/cartitem/cartitem";
import "../cartpage/cartpage.css";

function CartPage() {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <div className="cart-page-container">
      <div className="header">Cart</div>
      {isAuth ? (
        <div className="item">
          <CartItem />
        </div>
      ) : (
        <div className="login">
          <p>
            <Link color="black" to="/account">
              {" "}
              Log In
            </Link>{" "}
            or{" "}
            <Link color="black" to="/account">
              Register
            </Link>{" "}
            to see your cart
          </p>
        </div>
      )}
    </div>
  );
}

export default CartPage;
