import { useContext, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../redux/slices/authSlice";
import { UserContext } from "../../context/userContext";
import "../login/login.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Login = () => {
  const { loginUser } = useContext(UserContext);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", values);
      dispatch(authenticateUser());
      setSuccess(res.data.message);
      localStorage.setItem("isAuth", "true");
      loginUser(values);
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
    }
  };

  setTimeout(function () {
    setSuccess(true);
    setError(true);
  }, 5000);

  return (
    <div className="login-container">
      <div className="login-header">Login</div>
      <Box
        component="form"
        onSubmit={(e) => onSubmit(e)}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          onChange={(e) => onChange(e)}
          value={values.email}
          sx={{ bgcolor: "#fff" }}
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          onChange={(e) => onChange(e)}
          value={values.password}
          sx={{ bgcolor: "#fff" }}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            fontFamily: "Monospace",
            bgcolor: "grey",
            ":hover": {
              bgcolor: "#262626",
            },
          }}
        >
          Login
        </Button>
      </Box>
      <div className="login-messages">
        <div style={{ color: "red" }}>{error}</div>
        <div style={{ color: "green" }}>{success}</div>
      </div>
      {/* <form onSubmit={(e) => onSubmit(e)} className="login-form">
        <div className="login-header">Login</div>

        <div className="login-email-input">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => onChange(e)}
            type="email"
            className="form-control"
            id="loginEmail"
            name="email"
            value={values.email}
            placeholder="email"
            required
          />
        </div>

        <div className="login-password-input">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => onChange(e)}
            type="password"
            value={values.password}
            className="form-control"
            id="loginPassword"
            name="password"
            placeholder="password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>

        <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
        <div style={{ color: "green", margin: "10px 0" }}>{success}</div>
      </form> */}
    </div>
  );
};

export default Login;
