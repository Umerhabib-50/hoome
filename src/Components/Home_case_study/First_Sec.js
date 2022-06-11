import React from "react";
import desktopscreen from "../../Images/desktop-screen-01-v2.png";
import sweaters from "../../Images/sweaters.png";

const First_Sec = () => {
  return (
    <div className="first_sec_main">
      <div className="first_sec_top">
        <h1>Liquor Store Clothing</h1>
        <p>
          We were asked to re-create the vibe, style, and the bespoke shopping
          experience that the this trendy clothing store offers to its clients -
          for the world to see online.
        </p>
      </div>
      <div className="img_1">
        <img src={desktopscreen} alt="" />
      </div>
      <p className="brief">The Brief</p>
      <div className="h_p_btm">
        <h1>Increase online sales</h1>
        <p>
          Our mission was simple. To generate a greater volume of online orders,
          whilst maintaining the up-market aesthetic of the real-life shopping
          experience. We needed to translate an atmosphere of sleek subtlety and
          refinement, into a one-of-a-kind digital experience.
        </p>
      </div>
      <div className="btm_img">
        <img src={sweaters} alt="" />
      </div>
    </div>
  );
};

export default First_Sec;
