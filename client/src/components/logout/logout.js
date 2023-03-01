import { useDispatch } from "react-redux";
import axios from "axios";
import { unauthenticateUser } from "../../redux/slices/authSlice";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import Button from "@mui/material/Button";
import "../logout/logout.css";

const Logout = () => {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const { logoutUser } = useContext(UserContext);
  const { user } = useContext(UserContext);

  const logout = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/auth/logout`
      );
      dispatch(unauthenticateUser());
      localStorage.removeItem("isAuth");
      logoutUser();
      setSuccess(data.message);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    logout();
  }, []);

  setTimeout(function () {
    setSuccess(true);
  }, 5000);

  return (
    <div className="logout-container">
      <div className="logout-button">
        {user ? (
          <Button
            onClick={() => logout()}
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              fontFamily: "Monospace",
              color: "#262626",
              bgcolor: "white",
              ":hover": {
                bgcolor: "#262626",
              },
            }}
          >
            Logout
          </Button>
        ) : (
          ""
        )}
      </div>
      <div className="logout-messages">
        <div style={{ color: "green" }}>{success}</div>
      </div>
      {/* <button onClick={() => logout()} className="btn btn-primary">
        Logout
      </button> */}
    </div>
  );
};

export default Logout;
