import React from "react";

import { ToastContainer } from "react-toastify";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import "../pages/Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ToastContainer />
    </div>
  );
};

export default Home;
