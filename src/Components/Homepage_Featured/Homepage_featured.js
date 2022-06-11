import React from "react";
import "../Homepage_Featured/homepage_featured.scss";
import Carousel_Sec from "./Carousel_Sec";
import Featured_sec2 from "./Featured_sec2";
import Featured_sec3 from "./Featured_sec3";
import Header from "../Header/Header";
import Footer from "../Shahzaib/Footer/Footer";
const Homepage_featured = () => {
  return (
    <div className="homepage_featured_main">
      <Header />
      <Carousel_Sec />
      <Featured_sec2 />
      <Featured_sec3 />
      <Footer />
    </div>
  );
};

export default Homepage_featured;
