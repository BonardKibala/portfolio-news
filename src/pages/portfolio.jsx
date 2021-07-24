import React from "react";
import Navbar from "../components/navbar";
import About from "./about/about";
import Home from "./home/home";

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
    </div>
  );
};
export default Portfolio;
