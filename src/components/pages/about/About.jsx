import React from "react";
import CommonPages from "../commonPages/CommonPages";
import AboutUs from "../../../images/About.png";
import MyCaraousel from "./MyCaraousel";

const About = () => {
  return (
    <>
      <CommonPages
        title="This is Our About us Page"
        description="𝐻𝒶𝓂𝓇𝑜𝒦𝒽𝒶𝓃𝒶 is the the fastest,easiest and most convenient way to
        enjoy the best food of your favourite restaurants at home, at the office or wherever you want to. We know that
        your time is valuable and sometimes every minute in the day counts. That's why we deliver!
        So you can spend more time doing the things you love. "
        btnHome="Contact us"
        imgSrc={AboutUs}
        visit="/contact"
      />

      <MyCaraousel />
    </>
  );
};

export default About;
