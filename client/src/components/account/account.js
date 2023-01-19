import React, { useState } from "react";
import axios from "axios";

function Account() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);

  const register = async () => {
    try {
      await axios
        .post(
          "http://localhost:5000/users/register",
          { username: registerUsername, password: registerPassword },
          { withCredentials: true }
        )
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      await axios
        .post(
          "http://localhost:5000/users/login",
          { username: loginUsername, password: loginPassword },
          { withCredentials: true }
        )
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error.message);
    }
  };

  const user = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/users/user",
    }).then((res) => {
      setData(res);
      console.log(res);
    });
  };

  return (
    <div className="App">
      <div>
        <h1>Register</h1>
        <input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </div>
      <div>
        <h1>Login</h1>
        <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Submit</button>
      </div>
      <div>
        <h1>Get User</h1>
        <button onClick={user}>Submit</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null}
      </div>
    </div>
  );
}

export default Account;
