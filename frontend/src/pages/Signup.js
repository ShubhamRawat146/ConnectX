import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
import "../pages/Signup.css";

const Signup = () => {
  const [signUpInfo, setsignUpInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const Navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    const copySignUpInfo = { ...signUpInfo };
    copySignUpInfo[name] = value;
    setsignUpInfo(copySignUpInfo);
  };
  console.log("signUpInfo -> ", signUpInfo);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password } = signUpInfo;
    if (!name || !email || !password) {
      return handleError("All fields are required");
    }
    try {
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpInfo),
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        setTimeout(() => {
          Navigate("/login");
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
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              autoFocus
              placeholder="Enter your Name..."
              value={signUpInfo.name}
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your Email..."
              value={signUpInfo.email}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter Password"
              value={signUpInfo.password}
            ></input>
          </div>
          <button type="submit">Sign Up</button>
          <span>
            Already have an account?
            <Link to="/login">Login</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
