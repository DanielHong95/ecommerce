import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../../components/cartitem/cartitem";

function CartPage() {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <div>
      <div>Cart</div>
      {isAuth ? (
        <CartItem />
      ) : (
        <div className="please-login">
          <p>
            Please{" "}
            <Link color="black" to="/account">
              {" "}
              Log In{" "}
            </Link>
            or
            <Link color="black" to="/account">
              {" "}
              Create an Account{" "}
            </Link>
            to see your cart
          </p>
        </div>
      )}
    </div>
  );
}

export default CartPage;
