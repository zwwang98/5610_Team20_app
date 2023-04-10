import React, {useState} from "react";
import Header from "../header";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Header />
      <h4>Login</h4>
      <div className="form-group">
        <label>Username</label>
        <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
        />
      </div>
      <button className="btn btn-primary">
        Login
      </button>
    </>
  );
};

export default LoginComponent;
