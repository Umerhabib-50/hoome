import React from "react";
import black_arrow_btn from "../../Images/black_arrow_btn.png";
import left from "../../Images/left.png";
import right from "../../Images/right.png";
import mid from "../../Images/mid.png";
import cover1 from "../../Images/cover1.png";
import screen2 from "../../Images/desktop-screen-03.png";

const Second_Sec = () => {
  return (
    <div className="second_Sec_main">
      <div className="second_Sec_top">
        <img src={black_arrow_btn} alt="" />
        <span>The process</span>
      </div>
      <div className="second_Sec_h_p">
        <h1>Define, research, and strategy.</h1>
        <p className="para1">
          Understanding the needs of a new client is critical. <br /> <br />
          During the discovery phase of the project we meet with the business
          owners to dicsuss the importance of certain aspects of the new system
          including valuable stock control integrations and carrier controlled
          shipping facilities.
        </p>
        <p className="para2">
          It’s not all about appearance. Most of the action goes on behind the
          scenes. How does our client upload new product, how do they control
          stock levels when picking and packing from a shop floor? Hows does
          this integrate with their till system? Being aware of the problems at
          this phase means we can offer the correct solutions in the next.
        </p>
      </div>
      <div className="images_u">
        <img className="img1" src={left} alt="" />
        <img className="img2" src={mid} alt="" />
        <img className="img3" src={right} alt="" />
      </div>
      <div className="images_l">
        <img src={cover1} alt="" />
      </div>
      <div className="second_Sec_sol">
        <img src={black_arrow_btn} alt="" />
        <span>The Solution</span>
      </div>
      <div className="bespok">
        <h1>Bespoke technology</h1>
        <p>
          Using a bespoke API we were able to link Shopify’s e-commerce system
          together with the stores existing stock management control from the
          tills. This means that now, when a customer purchases an item
          in-store, it is automatically reduced from the online stock
          availability and visa versa.
        </p>
      </div>

      <div className="screen_2">
        <img src={screen2} alt="" />
      </div>
    </div>
  );
};

export default Second_Sec;
