import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
import "../pages/Login.css";

const Login = () => {
  const [logInInfo, setlogInInfo] = useState({
    email: "",
    password: "",
  });

  const Navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    const copyLogInInfo = { ...logInInfo };
    copyLogInInfo[name] = value;
    setlogInInfo(copyLogInInfo);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = logInInfo;
    if (!email || !password) {
      return handleError("All fields are required");
    }
    try {
      const url = "https://connect-x-eosin.vercel.app/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logInInfo),
      });
      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;
      if (success) {
        //handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInuser", name);
        setTimeout(() => {
          Navigate("/home");
        }, 1000);
        handleSuccess(message);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
      console.log("result -> ", result);
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="login-container">
      <div className="container">
        <h1>LogIn</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your Email..."
              value={logInInfo.email}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter Password"
              value={logInInfo.password}
            ></input>
          </div>
          <button type="submit">Log In</button>
          <span>
            Don't have an account?
            <Link to="/signup">Signup</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
