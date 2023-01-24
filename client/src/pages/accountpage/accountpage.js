import Login from "../../components/login/login";
import Register from "../../components/register/register";
import Logout from "../../components/logout/logout";
import "../accountpage/accountpage.css";

function AccountPage() {
  return (
    <div className="account-page">
      <Login />
      <Logout />
      <Register />
    </div>
  );
}

export default AccountPage;
