import "./nav.css";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleSuccess } from "../utils";

const Navbar = () => {
  const [loggedINuser, setloggedInuser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setloggedInuser(localStorage.getItem("loggedInuser"));
  }, []);

  const handleLogOut = (event) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInuser");
    handleSuccess(`Bye ${loggedINuser}`);
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <>
      <div className="container-fit">
        <nav class="navbar fixed-top bg-body-tertiary">
          <div class="container-fluid">
            <img src="logo.png" alt="logo" height={20} width={100}></img>
            <p className="name mt-2">Hi! {loggedINuser}</p>
            <button className="btn btn-outline-success" onClick={handleLogOut}>
              LogOut
            </button>
          </div>
        </nav>
        <ToastContainer />
      </div>
    </>
  );
};

export default Navbar;
