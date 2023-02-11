import React, { useState } from "react";
import classes from "./Login.module.css";
import Card from "../UI/Card";

const usernameGen = (email) => email.split("@")[0];

const Login = ({ onLogin, onGetUsername }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.includes("@") && password.length >= 4) {
      onLogin();
      onGetUsername(username);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setUsername(usernameGen(e.target.value));
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.login__welcome}>Welcome to Chisme</h1>
        <span className={classes.login__msg}>
          Please login to see whats the tea 🍵.
        </span>
      </div>
      <Card>
        <form className={classes.form__container} onSubmit={handleSubmit}>
          <label className={classes.login__header}>
            Enter email
            <input
              className={classes.login__input}
              type="email"
              name="email"
              placeholder="email"
              onChange={handleEmail}
              value={email}
            />
          </label>

          <label className={classes.login__header}>
            Enter password
            <input
              className={classes.login__input}
              type="password"
              name="password"
              placeholder="password"
              onChange={handlePassword}
              value={password}
            />
          </label>

          <button type="submit" className={classes.login__button}>
            Login
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
