import React from "react";
import { NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { DataCarousel } from "./CarouselData";

const MyCaraousel = () => {
  return (
    <>
      <section id="myCarousel" className=" my-1 d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <Carousel>
                    {DataCarousel.map((curValue) => {
                      return (
                        <Carousel.Item key={curValue.id}>
                          <img
                            className="d-block w-100"
                            src={curValue.url}
                            alt="First slide"
                          />
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>
                </div>

                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    <strong style={{ color: "#f33066" }} className="brand-name">
                      𝐻𝒶𝓂𝓇𝑜𝒦𝒽𝒶𝓃𝒶
                    </strong>
                    mission is to provide
                  </h1>
                  <p className="my-3">
                    the fastest,easiest and most convenient way to enjoy the
                    best food of your favourite restaurants at home, at the
                    office or wherever you want to. We know that your time is
                    valuable and sometimes every minute in the day counts.
                    That's why we deliver! So you can spend more time doing the
                    things you love.
                  </p>
                  <div className="mt-3">
                    <NavLink className="btn-get-started" to="/contact">
                      Our Mission
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
    </>
  );
};

export default MyCaraousel;
