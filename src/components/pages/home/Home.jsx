import React from "react";
import CommonPages from "../commonPages/CommonPages";
import Deliver from "../../../images/Food.png";
import "./Home.css";
import { dealData } from "../../constants/data";
import HomeCard from "./HomeCard";

const Home = () => {
  return (
    <>
      <CommonPages
        title="We Started Our Startup with"
        description="We know that your time is valuable and sometimes every minute in the day counts. That’s why we deliver! So you can spend more time doing the things you love. You can get anything from Indian food to high French cuisine by placing a simple order online
         through our website, mobile app or over the phone.
          Then just sit back, relax, and wait for your order to arrive"
        btnHome="Get Services"
        imgSrc={Deliver}
        visit="/services"
      />

      <div className="my-0">
        <h2 className="text-center">Best Deal of the Day</h2>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {dealData.map((curValue) => {
                return (
                  <HomeCard
                    key={curValue.id}
                    title={curValue.title}
                    url={curValue.url}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
