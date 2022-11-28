import React from "react";
import wakanda from "../images/wakanda.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <h1 className="heading">Wakanda Forever</h1>
      <div className="img_div">
        <img src={wakanda} alt="wakanda" />
        <img src={wakanda} alt="wakanda" />
        <img src={wakanda} alt="wakanda" />
      </div>
    </>
  );
};

export default Home;
