import React from "react";
import "./header.scss";
import logo from "../../Images/Logo - White.png";

const Header = () => {
  return (
    <div className="header_main">
      <div className="left">
        <img src={logo} alt="" />
      </div>
      <div className="right">
        <div className="toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
