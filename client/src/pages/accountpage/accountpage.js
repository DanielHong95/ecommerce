import Login from "../../components/login/login";
import Register from "../../components/register/register";
import { useContext } from "react";
import { UserContext } from "../../context/userContext.js";
import "../accountpage/accountpage.css";

function AccountPage() {
  const { user } = useContext(UserContext);

  return (
    <div className="account-page-container">
      <div className="header">
        {user ? `Welcome, ${user.email}` : "Please login"}
      </div>
      <div className="forms">
        <Login />
        <Register />
      </div>
    </div>
  );
}

export default AccountPage;
