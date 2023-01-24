import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../redux/slices/authSlice";

const Login = () => {
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
      // const { data } = await onLogin(values);
      const data = await axios.post("http://localhost:5000/auth/login", values);
      dispatch(authenticateUser());
      setSuccess(data.message);
      localStorage.setItem("isAuth", "true");
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)} className="container mt-3">
        <h1>Login</h1>

        <div className="mb-3">
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
            placeholder="test@gmail.com"
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
            id="loginPassword"
            name="password"
            placeholder="passwod"
            required
          />
        </div>

        <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
        <div style={{ color: "green", margin: "10px 0" }}>{success}</div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
