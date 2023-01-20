import Login from "../../components/login/login";
import Register from "../../components/register/register";

function AccountPage2() {
  return (
    <div>
      <Login />
      <Register />
    </div>
  );
}

export default AccountPage2;

// const checkAuthenticated = async () => {
//   try {
//     const token = localStorage.getItem("token");
//     const headers = { headers: { jwt_token: token } };
//     const res = await axios.post(
//       "http://localhost:5000/users/verify",
//       {},
//       headers
//     );
//     const parseRes = res.data;
//     parseRes ? setIsAuthenticated(true) : setIsAuthenticated(false);
//   } catch (err) {
//     console.error(err.message);
//   }
// };
