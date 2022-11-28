import React from "react";
import wakanda from "../images/wakanda.png";
import "./Home.css";

const Home = () => {
  const heading = {
    color: "gray",
    backGroundColor: "red",
    textAlign: "center",
    textTransform: "capitalize",
  };

  const heading1 = {
    padding: "20px 20px",
    backgroundColor: "#ffe9c5",
    textAlign: "center",
    borderRadius: "20px",
  };

  let currDate = new Date();
  currDate = currDate.getHours();

  let greeting = "";
  let cssStyle = {};

  if (currDate >= 1 && currDate < 12) {
    greeting = "Good Morning!";
    cssStyle.color = "Green";
  } else if (currDate >= 12 && currDate < 19) {
    greeting = "Good Afternoon!";
    cssStyle.color = "Orange";
  } else {
    greeting = "Good night!";
    cssStyle.color = "Purple";
  }
  return (
    <>
      <h1 style={heading}>Wakanda Forever</h1>

      <h1 style={heading1}>
        Hey,Dip <span style={cssStyle}> {greeting}</span>
      </h1>

      <div className="img_div">
        <img src={wakanda} alt="wakanda" />
        <img src={wakanda} alt="wakanda" />
        <img src={wakanda} alt="wakanda" />
      </div>
    </>
  );
};

export default Home;
