import { useState } from "react";
import axios from "axios";
import "../register/register.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Register = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/auth/register`,
        values
      );
      setError("");
      setSuccess(data.message);
      setValues({ email: "", password: "" });
    } catch (error) {
      setError(error.response.data.errors[0].msg);
      setSuccess("");
    }
  };

  setTimeout(function () {
    setSuccess(true);
    setError(true);
  }, 5000);

  return (
    <div className="register-container">
      <div className="register-header">Register</div>
      <Box
        component="form"
        noValidate
        onSubmit={(e) => onSubmit(e)}
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
        />
        <TextField
          onChange={(e) => onChange(e)}
          value={values.password}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          sx={{ bgcolor: "#fff" }}
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
          Register
        </Button>
      </Box>
      <div className="register-messages">
        <div style={{ color: "red" }}>{error}</div>
        <div style={{ color: "green" }}>{success}</div>
      </div>
      {/* <form onSubmit={(e) => onSubmit(e)} className="container mt-3">
        <h1>Register</h1>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => onChange(e)}
            type="email"
            className="form-control"
            id="registerEmail"
            name="email"
            value={values.email}
            placeholder="email"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => onChange(e)}
            type="password"
            value={values.password}
            className="form-control"
            id="registerPassword"
            name="password"
            placeholder="password"
            required
          />
        </div>

        <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
        <div style={{ color: "green", margin: "10px 0" }}>{success}</div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form> */}
    </div>
  );
};

export default Register;
