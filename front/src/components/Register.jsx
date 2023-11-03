import React, { useState } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [, /*user*/ setUser] = useState(undefined);
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    name: "",
    last_name: "",
  });

  const inputValue = (e) => {
    const { name, value } = e.target;
    setInputData((previousState) => {
      return { ...previousState, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/users/register", inputData)
      .then(() => {
        console.log("este es el input data", inputData);
        setUser();
      })
      .catch((error) => console.error(error));
    setInputData({ email: "", password: "", name: "", last_name: "" });
  };
  document.body.classList.add("loginPage");
  return (
    <div className="login-box">
      <h1>Hey, Welcome!</h1>
      <h3>Give us your data and we"ll show you movies!</h3>
      <form>
        <div className="user-box">
          <input type="text" name="email" required="" onChange={inputValue} />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="text" name="name" required="" onChange={inputValue} />
          <label>Name</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="last_name"
            required=""
            onChange={inputValue}
          />
          <label>Last name</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            required=""
            onChange={inputValue}
          />
          <label>Password</label>
        </div>
        <center onClick={handleSubmit}>
          {/* ASK HERE! */}
          <a href="/users/register">
            SIGN UP
            <span></span>
          </a>
        </center>
      </form>
      <h4>Already have an account?</h4>
      {/* ASK HERE! */}
      <a className="tag-a-register-login" href="/users/login">
        Sign In here!
      </a>
    </div>
  );
};

export default Login;
