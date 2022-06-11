import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import pic1 from "../../Images/pic1.png";
import pic2 from "../../Images/pic2.png";
import pic3 from "../../Images/pic3.png";

const Carousel_Sec = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel_main">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval="100000000000"
      >
        <Carousel.Item>
          <img className="d-block w-100" src={pic1} alt="First slide" />
          <div className=" view view_1">
            <span>view</span>
          </div>
          <span className=" scroll"> Scroll for more</span>
          <Carousel.Caption>
            <h3>Digital</h3>
            <h3>Shopping</h3>
            <h3>Experience</h3>
            <p>Multi-national e-commerce solution for Liquor Store Clothing</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pic2} alt="Second slide" />
          <div className=" view view_2">
            <span>view</span>
          </div>
          <span className=" scroll"> Scroll for more</span>

          <Carousel.Caption>
            <h3>Augumented</h3>
            <h3>Product</h3>
            <h3>Designs</h3>
            <p>Using the latest in VR technology to help make golf better</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pic3} alt="Third slide" />
          <div className=" view view_3">
            <span>view</span>
          </div>
          <span className=" scroll"> Scroll for more</span>

          <Carousel.Caption>
            <h3>Tapped in</h3>
            <h3>Teachnology</h3>
            <p>Feature rich, lightweight applications for everyday use.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousel_Sec;
